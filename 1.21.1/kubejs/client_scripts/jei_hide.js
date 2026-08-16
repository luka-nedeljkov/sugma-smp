RecipeViewerEvents.removeEntries('item', event => {
  const itemsToHide = [
    'easy_villagers:farmer',
    'easy_villagers:breeder',
    'easy_villagers:converter',
    'easy_villagers:iron_farm',
    'easy_villagers:incubator',
    'easy_villagers:inventory_viewer',
    'sophisticatedstorage:stack_upgrade_tier_1',
    'sophisticatedstorage:stack_upgrade_tier_1_plus',
    'sophisticatedstorage:stack_upgrade_tier_2',
    'sophisticatedstorage:stack_upgrade_tier_3',
    'sophisticatedstorage:stack_upgrade_tier_4',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_omega_tier',
    'cobblemon-additions:pokemon_spawner',
    'cobblemon-additions:pokemon_trial_spawner',
    'smallships:vampirism_cursed_spruce_cog',
    'smallships:vampirism_cursed_spruce_brigg',
    'smallships:vampirism_cursed_spruce_galley',
    'smallships:vampirism_cursed_spruce_drakkar',
    'smallships:vampirism_dark_spruce_cog',
    'smallships:vampirism_dark_spruce_brigg',
    'smallships:vampirism_dark_spruce_galley',
    'smallships:vampirism_dark_spruce_drakkar',
    'smallships:bountiful_fares_walnut_cog',
    'smallships:bountiful_fares_walnut_brigg',
    'smallships:bountiful_fares_walnut_galley',
    'smallships:bountiful_fares_walnut_drakkar',
    'smallships:bountiful_fares_hoary_cog',
    'smallships:bountiful_fares_hoary_brigg',
    'smallships:bountiful_fares_hoary_galley',
    'smallships:bountiful_fares_hoary_drakkar'
  ]

  event.remove(itemsToHide)
})
