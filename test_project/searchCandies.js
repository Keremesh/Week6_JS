const searchCandies = (searchString, maxPrice, candies) => {
    const filteredCandies = candies.filter(candy => candy.name.startsWith(searchString) && candy.price <= maxPrice);
    return filteredCandies.map(candy => candy.name)
}
module.exports = searchCandies;