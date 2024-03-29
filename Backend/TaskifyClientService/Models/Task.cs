namespace TaskifyClientService.Models
{
    public class Task
    {
        public int TaskID { get; set; }
        public string Title { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime DueDate { get; set; }
        public int Priority { get; set; }
        public Enum Status { get; set; }
        public ICollection<Category> Categories { get; set; }

    }
}
