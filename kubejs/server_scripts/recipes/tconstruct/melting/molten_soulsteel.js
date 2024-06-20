ServerEvents.recipes(event => {
  // ingot
  customRecipeHandler(event, {
    type: "tconstruct:material_melting",
    inputs: 'spirit:soul_steel_ingot',
    result: {
      amount: 90,
      fluid: "kubejs:molten_soul_steel"
    },
    temperature: 811,
    time: 60
  })
  // block
  customRecipeHandler(event, {
    type: "tconstruct:material_melting",
    inputs: 'spirit:soul_steel_block',
    result: {
      amount: 900,
      fluid: "kubejs:molten_soul_steel"
    },
    temperature: 811,
    time: 181
  })
})