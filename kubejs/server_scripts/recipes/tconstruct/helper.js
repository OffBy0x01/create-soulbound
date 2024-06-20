//Casting into blocks or using the casting table
//cast_block "amount" should be 1296 for Metal-like (x9) blocks, 1000 for Congealed Slime-like (x4) blocks
//keep in mind when casting that Nuggets are 16mb, Ingots are 144mb, and Slimeballs are 250mb
let cast_block = (fluid, item, amount) => {
  event.custom({
      "type": "tconstruct:casting_basin",
      "fluid": { "name": fluid, "amount": amount },
      "result": { "item": item },
      "cooling_time": 150
  })
}

let cast = (type, fluid, amount, item, time) => {
  event.custom({
      "type": "tconstruct:casting_table",
      "cast": { "tag": "tconstruct:casts/single_use/" + type },
      "cast_consumed": true,
      "fluid": { "name": fluid, "amount": amount },
      "result": { "item": item },
      "cooling_time": time
  })
  event.custom({
      "type": "tconstruct:casting_table",
      "cast": { "tag": "tconstruct:casts/multi_use/" + type },
      "fluid": { "name": fluid, "amount": amount },
      "result": { "item": item },
      "cooling_time": time
  })
}

let tc_material = (ingredientName, materialName) => {
  event.custom({
      "type": "tconstruct:material",
      "ingredient": { "item": ingredientName },
      "material": materialName,
      "needed": 1,
      "value": 1
  })
}

//addmelting melts specific items, tagmelting melts entire tags
let addmelting = (fluid, input, amount, temp, time) => {
  event.custom({
      "type": "tconstruct:melting",
      "ingredient": { "item": input },
      "result": {
          "fluid": fluid,
          "amount": amount
      },
      "temperature": temp,
      "time": time
});}
let tagmelting = (fluid, input, amount, temp, time) => {
  event.custom({
      "type": "tconstruct:melting",
      "ingredient": { "tag": input },
      "result": {
          "fluid": fluid,
          "amount": amount
      },
      "temperature": temp,
      "time": time
});}

// cast("rod", MC("milk"), 1000, MC('bone'), 60)
// cast("nugget", TC("venom"), 500, MC('spider_eye'), 50)

//Mob melting. Damage & Amount should be small numbers
let mobmelter = (mob, fluid, amount, damage) => {
  event.custom({
      "type": "tconstruct:entity_melting",
      "entity": {
          "type": mob
      },
      "result": {
          "fluid": fluid,
          "amount": amount
      },
      "damage": damage
})}

// mobmelter(MC("wither_skeleton"), TC("molten_obsidian"), 20, 2)
// mobmelter(MC("pufferfish"), TC("venom"), 25, 2)