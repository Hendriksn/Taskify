using TaskifyClientService.Data;
using TaskifyClientService.Interfaces;
using TaskifyClientService.Models;

namespace TaskifyClientService.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private DataContext _context;

        public CategoryRepository(DataContext context)
        {
            _context = context;
        }

        public ICollection<Category> GetCategories()
        {
            return _context.Categories.ToList();
        }
    }
}
