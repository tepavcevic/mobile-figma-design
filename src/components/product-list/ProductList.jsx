import "./styles.css";
import Product from "./components/Product";
import ProductBrand from "./components/ProductBrand";

export default function ProductList({ productBrand, shoeBrand }) {
    return(
        <div className="brand-product-list">
            <ProductBrand 
                brandImage={shoeBrand.photo}
                brand={shoeBrand.name}
                numberOfItems={productBrand.length}
            />
            
            <div className="product-group-list"> 
                {productBrand.slice(0, 3).map(shoe =>
                    <Product 
                        model={shoe.model}
                        price={shoe.price}
                        modelImage={shoe.modelImage}
                    /> 
                )}
            </div>
        </div>
    )
}