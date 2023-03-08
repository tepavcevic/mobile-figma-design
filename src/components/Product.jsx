export default function Product({ model, price, modelImage }) {
    return(
        <div className="product-card">
            <img className="product-image" src={modelImage} alt="sneaker model image" />
            <p className="shoe-model-title">{model}</p>
            <p className="shoe-model-price">${price}</p>
        </div>
    )
}