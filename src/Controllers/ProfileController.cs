using System.Web;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc;
using Therapists.Data;
using Therapists.Models;

namespace Therapists.Controllers;

[ApiController]
[Route("api/profiles")]
public class ProfileController : ControllerBase
{
    private readonly TherapistContext _db;

    public ProfileController(TherapistContext db)
    {
        _db = db;
    }

    [HttpGet]
    public IEnumerable<ProfileModel> Get()
    {
        var profiles = _db.Profiles.Take(50).Select(p => new ProfileModel
        {
            Id = p.Id,
            FullName = p.FullName,
            Resume = p.Resume,
            Image = p.Image,
            Expertises = p.Expertises!.Select(e => e.Description).ToList()!,
            Title = p.Title!.Description!
        });

        return profiles.ToArray();
    }
}
