ServerEvents.recipes(event => {
  customRecipeHandler(event, {
    type: "create:haunting",
    ingredients: [
        {
            item: "minecraft:glowstone_dust",
        }
    ],
    results: [
        {
            item: "spirit:soul_powder",
            count: 2,
        }
    ]
  })
})