import Product from "./Product";

export default function ProductsList({ brandImage, brand, numberOfItems, model, price }) {
    return(
        <div className="product-group-list">          
            <Product 
                model={model}
                price={price}
            />   
        </div>
    )
}