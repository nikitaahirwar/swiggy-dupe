const RestaurantCardShimmer = () => {
    return (
        <div className="flex flex-wrap">
            {Array.from({length: 10}).map((_, index) => (
                <div className="w-[250px] h-[380px] p-2 m-2 shadow-lg bg-gray-200 rounded-lg" key={index}>
                    <div className="w-full h-50 bg-gray-300"></div>
                    <div className="py-2 my-2 bg-gray-300 h-10"></div>
                    <div className="py-1 my-2 bg-gray-300 h-10"></div>
                    <div className="py-1 my-2 bg-gray-300 h-10"></div>
                </div>
            ))}
        </div>
    )
}
export default RestaurantCardShimmer
