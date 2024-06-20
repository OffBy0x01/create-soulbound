const C = (name) => `create:${name}`
const AA = (name) => `adastra:${name}`
const MC = (name) => `minecraft:${name}`
const CEI = (name) => `create_enchantment_industry:${name}`
const TC = (name) => `tconstruct:${name}`
const SD = (name) => `storagedrawers:${name}`

const potion = (potionID, bottle) => Item.of('minecraft:potion', `{Potion:"${potionID}", Bottle:"${bottle}"}`)

const potionFluid = (potionID, count, bottle) => Fluid.of('create:potion', count, `{Potion:"${potionID}", Bottle:"${bottle}"}`)