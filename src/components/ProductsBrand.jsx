export default function ProductsBrand({ brand, numberOfItems, brandImage }) {
    return(
        <div className="product-brand-card">
            <img className="round-picture" src={brandImage} alt={`${brandImage} logo`} />
            <p>{brand}</p>
            <p>{numberOfItems}</p>
        </div>
    )
}