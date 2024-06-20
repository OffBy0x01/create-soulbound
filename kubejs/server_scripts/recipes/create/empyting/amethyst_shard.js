ServerEvents.recipes(event => {
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