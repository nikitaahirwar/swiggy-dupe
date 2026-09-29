const RestaurantCardShimmer = () => {
    return (
        <div className="restaurant-list">
            {Array.from({length: 10}).map((_, index) => (
                <div className="restaurant-card" key={index}>
                    <div className="restaurant-image shimmer"></div>
                    <div className="restaurant-name shimmer shimmer-text"></div>
                    <div className="restaurant-cuisine shimmer shimmer-text"></div>
                    <div className="restaurant-rating shimmer shimmer-text"></div>
                </div>
            ))}
        </div>
    )
}
export default RestaurantCardShimmer
