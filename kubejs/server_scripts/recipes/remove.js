ServerEvents.recipes(event => {
  // remove recipes here
  removeVanillaTools(event)
  // removeComputerCraft(event)
})

const removeVanillaTools = (event) => {
  // remove all vanilla tools except wooden/stone (use tinker's!)
  event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden|stone).+_pickaxe/ });
  event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden|stone).+_axe/ });
  event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden|stone).+_shovel/ });
  event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden|stone).+_hoe/ });
  event.remove({ type: 'minecraft:crafting_shaped', output: /minecraft:(?!wooden|stone).+_sword/ });
}