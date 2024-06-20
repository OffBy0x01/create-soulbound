// priority: 0

const metals = {
  copper: {
    displayName: 'Copper',
    colour: 0xf59568, // 0xff9933
    ingotId: '',
    blockId: '',
  },
  iron:{
    displayName: 'Iron',
    colour: 0xe7e7e4,
    ingotId: '',
    blockId: '',
  },
  zinc:{
    displayName: 'Zinc',
    colour: 0xe9fff6, //0xf0f4f4
    ingotId: '',
    blockId: '',
  },
  gold:{
    displayName: 'Gold',
    colour: 0xffc638, // 0xecc113 ffc811 ffcf2f ffd22f
    ingotId: '',
    blockId: '',
  },
  brass:{
    displayName: 'Brass',
    colour: 0xffc760, // 0xfab22c 0xe6ac00
    ingotId: '',
    blockId: '',
  },
  andesite_alloy:{
    displayName: 'Andesite Slurry',
    colour: 0xafafb6,
    ingotId: '',
    blockId: '',
  },
}

StartupEvents.registry('fluid', event => {
  for (const [id, entry] of Object.entries(metals)) {
      event.create(`molten_${id}`)
      .thickTexture(entry.colour)
      .bucketColor(entry.colour)
      .displayName(`Molten ${entry.displayName}`)   
      .stillTexture('tconstruct:block/fluid/molten/still')
      .flowingTexture('tconstruct:block/fluid/molten/flowing')
      .noBucket() //adding this will cause the fluid to have no ability to go in a bucket, but will still be able to be placed into the world by machines like create mod pipe unless .noBlock() is also added
      // .noBlock() //adding this will cause the fluid to have no block form, but will still be able to be placed into the world by machines like create mod pipe unless .noBucket() is also added
  }

  event.create(`molten_soul_steel`)
  .thickTexture(0xafafb6)
  .bucketColor(0xafafb6)
  .displayName(`Molten Soul Steel`)   
  .stillTexture('tconstruct:block/fluid/molten/still')
  .flowingTexture('tconstruct:block/fluid/molten/flowing')
  .noBucket() //adding this will cause the fluid to have no ability to go in a bucket, but will still be able to be placed into the world by machines like create mod pipe unless .noBlock() is also added
  // .noBlock() //adding this will cause the fluid to have no block form, but will still be able to be placed into the world by machines like create mod pipe unless .noBucket() is also added
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