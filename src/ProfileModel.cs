namespace Therapists.Models;

public class ProfileModel
{
    public int Id { get; set; }
    public string? FullName { get; set; }
    public string? Resume { get; set; }
    public string? Image { get; set; }
    public string? Title { get; set; }
    public List<string> Expertises { get; set; } = new List<string>();
}