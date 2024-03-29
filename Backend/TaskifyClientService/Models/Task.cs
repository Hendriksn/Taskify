namespace TaskifyClientService.Models
{
    public class Task
    {
        public int TaskId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime DueDate { get; set; }
        public int Priority { get; set; }
        public string Status { get; set; }
        public ICollection<Category> Categories { get; set; }

    }
}
