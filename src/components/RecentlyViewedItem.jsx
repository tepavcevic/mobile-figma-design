export default function RecentlyViewedItem({ brandName, photo }) {
    return(
        <div className="recent-item">
            <img src={photo} alt={`${brandName} logo`} className="round-picture" />
            <p className="recent-brand-name">{brandName}</p>
        </div>
    )
}