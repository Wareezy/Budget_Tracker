export class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  createCategory(category) {
    if (!category || !category.categoryInfo || !category.categoryInfo.categoryId) {
      throw new Error("Invalid category data");
    }

    const existing = this.categoryRepository.findById(category.categoryInfo.categoryId);
    if (existing) {
      throw new Error("Category already exists");
    }

    this.categoryRepository.save(category);
    return category;
  }

  getCategoryById(id) {
    const category = this.categoryRepository.findById(id);
    if (!category) throw new Error("Category not found");
    return category;
  }

  getAllCategories() {
    return this.categoryRepository.findAll();
  }

  deleteCategory(id) {
    this.categoryRepository.delete(id);
  }
}