export default function Product({ model, price }) {
    return(
        <div className="product-card">
            <p>{model}</p>
            <p>${price}</p>
        </div>
    )
}