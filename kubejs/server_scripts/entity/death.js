EntityEvents.death(event => {
  // if killer is not player
  if (event.source.type !== 'player') return
  
  // if entity is player
  if ( event.entity.type === 'player') return
  
  // if item is not silentgear
  const player = event.source.actual

  if (player.mainHandItem.mod !== 'tconstruct') return
  
  // if gear does not use soul_steel
  if (!tconstructUsingMaterial(player, 'tconstruct:soul_steel')) return

  // mod deny list
  if ([ 'immersive_aircraft', 'create' ].includes(event.entity.mod)) return
  
  // entity deny list
  if ([ /ad_astra:tier.*/, /ad_astra:lander.*/ ].some(pattern => pattern.test(event.entity.type))) return


  let emptyCrystal = null
  for (const itemStack of player.inventory.allItems) {    
    // not a soul crystal, skip
    if (itemStack.id !== 'spirit:soul_crystal') continue
    // crystal exists but is empty
    if (itemStack.nbt.StoredEntity === undefined) {
      emptyCrystal = itemStack
    // matching type & not full
    } else if (itemStack.nbt.StoredEntity.Type === event.entity.type && itemStack.nbt.StoredEntity.Souls < 512) {
      itemStack.nbt.StoredEntity.Souls = itemStack.nbt.StoredEntity.Souls + 1
      // return so no further actions are taken
      return
    }     
  }

  // if we didn't find any crystals with a matching entity, use a blank one
  if (emptyCrystal !== null) {
    player.tell('didn\'t find any matching crystals, using a blank')
    emptyCrystal.nbt = {
      StoredEntity: {
        Type: event.entity.type,
        Souls: 1
      }
    }
  }
})