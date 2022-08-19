namespace Therapists.Data.Entites;

public class Expertise
{
    public int Id { get; set; }
    public string? Description { get; set; }
    public ICollection<Profile>? Profiles { get; set; }
}