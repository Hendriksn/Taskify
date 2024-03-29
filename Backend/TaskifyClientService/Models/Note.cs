namespace TaskifyClientService.Models
{
    public class Note
    {
        public int NoteID { get; set; }
        public string Content { get; set; }
        public ICollection<Task> Task { get; set; }
    }
}
