// priority: 99999

LootJS.modifiers((event) => {
  event.addBlockLootModifier(/(minecraft|create):deepslate_.+_ore/).modifyLoot(Ingredient.all, (itemStack) => {
    itemStack.setCount(itemStack.getCount() * getRandomNumBetween(1,2))
    return itemStack
  })
});