class Dinner {
    constructor(dinner) {
        this.dinner = dinner;
    }
    
    courses() {
        // length of items in dinner = number of recipes
        return this.dinner.length 
    }
    
    getAllRecipes() {
    return this.dinner.map(function (anything_here) {
            return anything_here.getRecipe();
        });
    }
}
