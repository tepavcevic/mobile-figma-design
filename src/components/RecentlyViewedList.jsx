import RecentlyViewedItem from "./RecentlyViewedItem"
import { brands } from "../data/brands"


export default function RecentlyViewedList() {
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