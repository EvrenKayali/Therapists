namespace Therapists.Data.Entites;

public class Profile
{
    public int Id { get; set; }
    public string? FullName { get; set; }
    public string? Resume { get; set; }
    public string? Image { get; set; }
    public Title? Title { get; set; }
    public List<Expertise>? Expertises { get; set; }
}