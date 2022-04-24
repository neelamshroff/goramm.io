export class Category {
  id! : number;
  name!: string;
}


export class CategoryService {
  categories: Category[] = [];

  addCategory(name: string) {
    let category = new Category();
    category.name = name;
    category.id = Math.floor((Math.random() * 100) + 1);
    this.categories.push(category);
    this.setCategories();
  }

  getCategories() {
    let categories = localStorage.getItem("categories")
    if(categories){
      this.categories = JSON.parse(categories);
    }
    return this.categories;
  }

  updateCategory(id:number, name: string){
    for(var i=0; i<this.categories.length ; i++){
      if(this.categories[i].id == id){
        this.categories.splice(i, 1);
        break;
      }
    }
    let category = new Category();
    category.name = name;
    category.id = Number(id);
    this.categories.push(category);
    this.setCategories();
  }

  findById(id : number) {
    let category;
    this.categories.forEach(cat=>{
      if(cat.id == id){
        category = cat;
      }
    })
    return category;
  }

  deleteCategory(id:number){
    let index = this.categories.findIndex(x => x.id === id);
    this.categories.splice(index, 1);
    this.setCategories();
  }

  setCategories(){
    localStorage.setItem("categories", JSON.stringify(this.categories))
  }

}
