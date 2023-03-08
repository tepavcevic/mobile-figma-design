import Product from "./Product";

export default function ProductsList({ model, price, modelImage }) {
    return(
        <div className="product-group-list">          
            <Product 
                model={model}
                price={price}
                modelImage={modelImage}
            />   
        </div>
    )
}