import { products } from "../data/products"
import Product from "./Product";
import ProductsBrand from "./ProductsBrand";

const nike = products.filter(product => product.brand === "Nike");
const adidas = products.filter(product => product.brand === "Adidas");

export default function ProductsList() {
    return(
        <div className="product-group-list">
            <ProductsBrand 
                brand={nike[0].brand}
                numberOfItems={nike.length}
            />
            {nike.slice(0, 2).map(shoe => 
                <Product 
                    model={shoe.model}
                    price={shoe.price}
                />
            )}
            
        </div>
    )
}