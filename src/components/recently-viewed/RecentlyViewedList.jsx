import "./styles.css"

import RecentlyViewedItem from "./components/RecentlyViewedItem"

export default function RecentlyViewedList({ brands }) {
    return(
        <>
            <div className="recent-title">
                <h3>Recently viewed</h3>
                <p>See All</p>
            </div>

            <div className="recent-list">
                {brands.map(brand => 
                    <RecentlyViewedItem 
                        brandName={brand.name}
                        photo={brand.photo}
                    />
                )}
            </div>
        </>
    )
}