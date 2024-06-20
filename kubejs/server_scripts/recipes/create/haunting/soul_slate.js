ServerEvents.recipes(event => {
  customRecipeHandler(event, {
    type: "create:haunting",
    ingredients: [
        {
            item: "minecraft:deepslate",
        }
    ],
    results: [
        {
            item: "spirit:soul_slate",
        }
    ]
})
})