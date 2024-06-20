// priority: 0

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

  // computercraft advanced computer joke
  // event.create('dead_mouse')
  //   .displayName('Dead Mouse')
  //   .maxStackSize(16)
  //   .tooltip('A dead mouse, complete with bite marks. At least it is whole.')

  // event.create('yarn_ball')
  //   .displayName('Ball of Yarn')
  //   .maxStackSize(16)
  //   .tooltip('A ball of yarn. Purrfect!')

  // // filling molten metals
  // event.create('ingot_casing')
  //   .displayName('Ingot Casing')
  //   .maxStackSize(16)
  //   .tooltip('Used to form ingots from molten metal')
  //   .fireResistant(true)

  // event.create('block_casing')
  //   .displayName('Block Casing')
  //   .maxStackSize(16)
  //   .tooltip('Used to form Blocks from molten metal')
  //   .fireResistant(true)

  // for (const [id, entry] of Object.entries(metals)) {
  //   event.create(`${id}_filled_block_casing`)
  //     .displayName(`${entry.displayName} Filled Block Casing`)
  //     .maxStackSize(64)
  //     .color(1, entry.colour)
  
  //     event.create(`${id}_filled_ingot_casing`)
  //     .displayName(`${entry.displayName} Filled Ingot Casing`)
  //     .maxStackSize(64)
  //     .color(1, entry.colour)
  // }
})

StartupEvents.registry('fluid', event => {
  // for (const [id, entry] of Object.entries(metals)) {
  //     event.create(`molten_${id}`)
  //     .thickTexture(entry.colour)
  //     .bucketColor(entry.colour)
  //     .displayName(`Molten ${entry.displayName}`)   
  //     .stillTexture('tconstruct:block/fluid/molten/still')
  //     .flowingTexture('tconstruct:block/fluid/molten/flowing')
  //     .tag('minecraft:lava')
  // }
})

// rubber -> rubber hand
// deployer automation


// molten metal + ingot casing = ingot,
// molten metal + block casing = block,
// molten metal + ingot cast = ingot + ingot cast,
// molten metal + block cast = ingot + block cast,

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

// StartupEvents.registry('server.started', event => {
// 	if (event.server.isNewWorld) {
// 		event.server.runCommand(`/summon ad_astra:lander ~ ~ ~ {CustomName:'{"text":"Aventus Lander"}', Items:[{id:"minecraft:diamond",Count:1b}]}`)
// 		event.server.runCommand('/say <!> Warning - Destination \'NULL\' is not covered by your insurance policy. <!>');
// 		event.server.runCommand('/say <!> Travel to the nearest collection location \'Jupiter-471\' at your earliest convenience. <!>');
// 		event.server.runCommand('/say <i> A service charge of 10,000 credits has been deducted from your account in accordance with our emergency lander dispension policy. <i>');
// 	  }
// })