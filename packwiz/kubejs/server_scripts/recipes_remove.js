const byOutput = [
    'easy_villagers:auto_trader',
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
    'sophisticatedstorage:stack_upgrade_omega_tier'
]

ServerEvents.recipes(event => {
    byOutput.forEach(item => event.remove({ output: item }));
});
