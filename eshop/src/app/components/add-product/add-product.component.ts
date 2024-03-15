import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
@Input() inputFromParent:string="";
fname:string="Welcome"
@Output() updateName=new EventEmitter<string>();

  constructor(private service:ProductService){
    this.fname="Raj";
  }

  ngOnInit(){
    this.getAll();
  }
  id?:0;
   name?:string="";
   description?:string="";
   price?:number=0;
   productlist = new Array<Product>();//how to declary array

   addProduct(){
    this.updateName.emit(this.name);
  //   this.productlist.push(
  //     {'name':this.name,
  //   'desc':this.description,
  //   'price':this.price});
  var data={
    name:this.name,
    description:this.description,
    price:this.price
  }
      this.service.addProduct(data).subscribe({
        next:(response)=>{
            alert('Product added...');
            this.getAll();
        },
        error:(error)=>{
          alert('Error...!!!');
        }
      });
    }
  getAll(){
      this.service.getAll().subscribe({
        next:(response)=>{
            this.productlist=response;
        },
        error:(error)=>{
          alert('Error...!!!');
        }
      });
  }
}
