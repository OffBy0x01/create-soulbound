ServerEvents.recipes(event => {
  // molten metal recipes
  for (const [id, entry] of Object.entries(metals)) {
  }

  customRecipeHandler(event, {
    type: "create:filling",
    ingredients: [
        {
            item: "minecraft:quartz",
        },
        {
          "amount": 25,
          "fluid": "create:potion",
          "nbt": {
            "Bottle": "REGULAR",
            "Potion": "minecraft:night_vision"
          }
        }
    ],
    results: [
        {
            item: "minecraft:amethyst_shard",
        }
    ]
  })
})





// rubber -> rubber hand
// deployer automation


// molten metal + ingot casing = ingot,
// molten metal + block casing = block,
// molten metal + ingot cast = ingot + ingot cast,
// molten metal + block cast = ingot + block cast,