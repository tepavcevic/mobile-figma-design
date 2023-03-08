import "./styles.css"

export default function Product({ model, price, modelImage }) {
    return(
        <div className="product-card">
            <img className="product-image" src={modelImage} alt="sneaker model image" />
            <div className="product-card-body">
            <p className="product-model-title">{model}</p>
            <p className="product-model-price">${price}</p>
            </div>
        </div>
    )
}