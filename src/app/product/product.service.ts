export class Product {
  id! : number;
  name!: string;
  category!: string;
  price!: number;
}


export class ProductService {
  products: Product[] = [];

  addProduct(name: string, categoryname: string, price : number) {
    let product = new Product();
    product.name = name;
    product.category = categoryname;
    product.price = price;
    product.id = Math.floor((Math.random() * 100) + 1);
    this.products.push(product);
    this.setProducts();
  }

  getProducts() {
    let products = localStorage.getItem("products")
    if(products){
      this.products = JSON.parse(products);
    }
    return this.products;
  }

  updateProduct(id:number, name: string, categoryname: string, price : number){
    
    for(var i=0; i<this.products.length ; i++){
      if(this.products[i].id == id){
        this.products.splice(i, 1);
        break;
      }
    }
    let product = new Product();
    product.name = name;
    product.category = categoryname;
    product.price = price;
    product.id = id;
    this.products.push(product);    
    this.setProducts();
  }

  findById(id : number) {
    let product;
    this.products.forEach(cat=>{
      if(cat.id == id){
        product = cat;
      }
    })
    return product;
  }

  deleteProduct(id:number){
    console.log(id, name);
    let index = this.products.findIndex(x => x.id === id);
    this.products.splice(index, 1);
    this.setProducts();
  }

  setProducts(){
    localStorage.setItem("products", JSON.stringify(this.products))
  }




}
