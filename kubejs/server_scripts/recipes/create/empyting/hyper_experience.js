ServerEvents.recipes(event => {
  // there are a maximum of 500 souls in a soul crystal
  for (let i=1; i<501;i++) {
    customRecipeHandler(event, {
      type: "create:emptying",
      ingredients: [
          // weakNBT as the soul crystal has a StoredEntity type tag that we don't care about
          Item.of('spirit:soul_crystal', `{StoredEntity:{Souls:${i}}}`).weakNBT()
      ],
      results: [
        {
            item: "spirit:soul_crystal",
        },
        {
          "fluid": "create_enchantment_industry:hyper_experience",
          "amount": i
        }
      ]
    })
  }
})
