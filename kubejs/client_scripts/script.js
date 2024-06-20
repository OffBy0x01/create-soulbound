// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

const hideVanillaTools = (event) => {
  // hide all vanilla tools except wooden+stone (use tinker's construct!)
  event.hide(/minecraft:(?!wooden|stone).+_pickaxe/)
  event.hide(/minecraft:(?!wooden|stone).+_axe/)
  event.hide(/minecraft:(?!wooden|stone).+_shovel/)
  event.hide(/minecraft:(?!wooden|stone).+_hoe/)
  event.hide(/minecraft:(?!wooden|stone).+_sword/)
}

JEIEvents.hideItems(event => {
	hideVanillaTools(event)
})
