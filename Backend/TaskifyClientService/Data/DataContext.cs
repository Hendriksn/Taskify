using Microsoft.EntityFrameworkCore;
using TaskifyClientService.Models;
using Task = TaskifyClientService.Models.Task;

namespace TaskifyClientService.Data
{
    public class DataContext: DbContext
    {

        public DataContext(DbContextOptions<DataContext> options): base(options)
        {
            
        }

        public DbSet<Category> Categories { get; set; }
      //  public DbSet<Task> Tasks { get; set; }
        public DbSet<Note> Notes { get; set; }

     }
}
