using System.Web;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc;
using Therapists.Data;
using Therapists.Data.Entites;
using Therapists.Models;

namespace Therapists.Controllers;

[ApiController]
[Route("api/populate")]
public class PopulateDataController : ControllerBase
{
    private readonly TherapistContext _db;

    public PopulateDataController(TherapistContext context)
    {
        _db = context;
    }
    private static string CleanString(string text)
    {
        return HttpUtility.HtmlDecode(text.Replace("\r\n", "").Replace("\r", "").Replace("\n", "").Trim());
    }

    [HttpPost]
    public async Task<ActionResult> Get()
    {
        var url = "https://www.evimdekipsikolog.com/";
        var web = new HtmlWeb();
        var doc = web.Load(url);

        var cards = doc.DocumentNode.SelectNodes("//div[contains(@class, 'consultant-card')]");

        var profiles = cards.Select(card => new ProfileModel
        {
            Id = Convert.ToInt32(card.Attributes["data-location"].Value.Split("/").Last()),
            FullName = CleanString(card.Descendants().First(a => a.Attributes["class"] != null && a.Attributes["class"].Value == "profile-name").InnerText),
            Title = CleanString(card.Descendants("a").First(a => a.Attributes["itemprop"] != null && a.Attributes["itemprop"].Value == "title").InnerText),
            Resume = CleanString(card.Descendants("p").First().InnerText),
            Image = card.Descendants("img").First(a => a.Attributes["itemprop"] != null && a.Attributes["itemprop"].Value == "image").Attributes["src"].Value,
            Expertises = card.Descendants()
            .First(a => a.Attributes["class"] != null && a.Attributes["class"].Value == "badge-list")
            .Descendants("li").Select(d => CleanString(d.InnerText)).ToList()
        });

        var allTitles = profiles
            .Select(p => p.Title)
            .Distinct()
            .Select(t => new Title { Description = t }).ToList();

        await _db.Titles.AddRangeAsync(allTitles);

        var allExpertise = profiles
            .SelectMany(p => p.Expertises)
            .Where(e => !string.IsNullOrWhiteSpace(e))
            .OrderBy(e => e)
            .Distinct()
            .Select(e => new Expertise { Description = e });

        await _db.Expertises.AddRangeAsync(allExpertise);

        await _db.SaveChangesAsync();

        var savedExpertises = _db.Expertises.ToList();

        var allProfiles = profiles.Select(p => new Profile
        {
            FullName = p.FullName,
            Resume = p.Resume,
            Image = p.Image,
            Title = allTitles.First(t => t.Description == p.Title),
            Expertises = savedExpertises.Where(e => p.Expertises.Contains(e.Description!)).ToList()
        });

        await _db.Profiles.AddRangeAsync(allProfiles);

        await _db.SaveChangesAsync();

        return Ok();
    }
}