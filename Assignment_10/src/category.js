export class Category {
    #categoryId;
    #userId;
    #name;
    #type;
    #status;
  
    constructor(categoryId, userId, name, type = 'custom', status = 'active') {
      this.#categoryId = categoryId;
      this.#userId = userId;
      this.#name = name;
      this.#type = type;
      this.#status = status;
    }
  
    create() {
      this.#status = 'active';
    }
  
    edit(name) {
      this.#name = name;
    }
  
    delete() {
      this.#status = 'deleted';
    }
  
    get categoryInfo() {
      return {
        categoryId: this.#categoryId,
        name: this.#name,
        type: this.#type,
        status: this.#status
      };
    }
  }