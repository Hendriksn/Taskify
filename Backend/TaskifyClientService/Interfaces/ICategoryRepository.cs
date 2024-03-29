using TaskifyClientService.Models;

namespace TaskifyClientService.Interfaces
{
    public interface ICategoryRepository
    {
        ICollection<Category> GetCategories();
    }
}
