export default class Pantry {
    constructor(pantryIngredients) {
        this.ingredients = pantryIngredients
        this.missingIngredients = []

    }
    checkUserIngredients(recipe) {    
        
        recipe.requiredIngredients.forEach(ingredient => {
            const found = this.ingredients.find(foundIngredient => foundIngredient.id === ingredient.id)
            if (!found) {
                this.missingIngredients.push({
                    name: ingredient.name,
                    id: ingredient.id,
                    amount: ingredient.amount,
                    unit: ingredient.unit
                })
            } else {
                if (found.amount < ingredient.amount) {
                    this.missingIngredients.push({
                        name: ingredient.name,
                        id: ingredient.id,
                        amount: ingredient.amount - found.amount,
                        unit: ingredient.unit
                    })
                }
            }
        })
    }

removeIngredients(recipe) {
    console.log(recipe)
    return recipe.requiredIngredients.map(recipeIngredient => {
        const pantryIngredient = this.ingredients.filter(pantryIng => recipeIngredient.id === pantryIng.ingredient)
        if (pantryIngredient && pantryIngredient.amount >= recipeIngredient.amount){
            pantryIngredient = recipeIngredient.amount - pantryIngredient.amount
        }
        return pantryIngredient
    })
}
    attachNameToId(ingredientsData) {
        this.ingredients = this.ingredients.map(ingredient => {
            let foundIngredient = ingredientsData.find(ing => ingredient.ingredient === ing.id)
        return {
            name: foundIngredient.name,
            id: foundIngredient.id,
            amount: ingredient.amount
            }
        })
    }
    addIngredientsToUsersPantry() {

    }
    // removeIngredients() {
    //     recipe.requiredIngredients.forEach(recipeIngredient => {
    //         const pantryIngredient = this.ingredients.map(pantryIng => {
    //             recipeIngredient.id === pantryIng.id
    //             if (pantryIngredient && pantryIngredient.amount >= recipeIngredient.amount){
    //                 recipeIngredient.amount - pantryIngredient.amount
    //             }
    //         })
    //         // need to compare recipe ingredients to pantry ingredients
    //         // if ALL ingredients for recipe are found then remove ingredients from pantry
    //         // 
    //     })
    // }
}

// once a recipe is clicked, we can view the missing ingredients. We want to be able to increase the users pantry amount. 
// we need to match missing ingredient id to pantry id so we can add to the pantry id
