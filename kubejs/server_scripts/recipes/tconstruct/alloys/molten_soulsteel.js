ServerEvents.recipes(event => {
  customRecipeHandler(event, {
    type: "tconstruct:alloy",
    inputs: [
      {
        "amount": 90,
        "tag": "forge:molten_iron"
      },
      {
        "amount": 10,
        "fluid": "create_enchantment_industry:hyper_experience"
      }
    ],
    result: {
      amount: 100,
      fluid: "kubejs:molten_soulsteel"
    },
    temperature: 811
  })
})