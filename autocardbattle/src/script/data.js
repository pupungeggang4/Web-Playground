const dataCard = {
    1: {'ID': 1, 'name': 'Normal unit', 'type': 'unit', 'element': 1, 'crystal': [[1, 1]], 'crystallist': [1], 'stat': [1, 2], 'effect': []},
    2: {'ID': 2, 'name': 'Normal unit', 'type': 'unit', 'element': 1, 'crystal': [[1, 2]], 'crystallist': [1, 1], 'stat': [2, 3], 'effect': []},
    3: {'ID': 3, 'name': 'Normal unit', 'type': 'unit', 'element': 1, 'crystal': [[1, 3]], 'crystallist': [1, 1, 1], 'stat': [3, 4], 'effect': []},
    201: {'ID': 201, 'name': 'attack', 'type': 'spell', 'element': 2, 'crystal': [[2, 1]], 'crystallist': [2], 'stat': [0, 0], 'effect': []}
}

const dataCardP = {
    1: [['summon']],
    2: [['summon']],
    3: [['summon']],
    201: [['dmghero', 3]]
}

const dataCardD = {
    1: [],
    2: [],
    3: [],
    201: ['Deal 3 damage to', 'enemy hero.'],
}

const dataCrystal = {
    1: {'ID': 1, 'name': 'normal crystal', 'element': 1, 'effect': []},
    2: {'ID': 2, 'name': 'fire crystal', 'element': 2, 'effect': []},
    3: {'ID': 3, 'name': 'water crystal', 'element': 3, 'effect': []},
    4: {'ID': 4, 'name': 'wind crystal', 'element': 4, 'effect': []},
    5: {'ID': 5, 'name': 'earth crystal', 'element': 5, 'effect': []},
    6: {'ID': 6, 'name': 'light crystal', 'element': 6, 'effect': []},
    7: {'ID': 7, 'name': 'dark crystal', 'element': 7, 'effect': []},
    8: {'ID': 8, 'name': 'raindow crystal', 'element': 8, 'effect': []},
}

const dataCrystalD = {

}

const dataEquipment = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
}

const dataEquipmentD = {

}

const dataCharacter = {
    1: {'deck': [201, 201, 201, 201, 201, 201, 201, 201], 'crystal': [1, 1, 1, 1, 2, 2, 2, 2]},
    2: {'deck': [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], 'crystal': [1, 1, 1, 1, 3, 3, 3, 3]},
    3: {'deck': [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], 'crystal': [1, 1, 1, 1, 4, 4, 4, 4]},
    4: {'deck': [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], 'crystal': [1, 1, 1, 1, 5, 5, 5, 5]},
    5: {'deck': [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], 'crystal': [1, 1, 1, 1, 6, 6, 6, 6]},
    6: {'deck': [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], 'crystal': [1, 1, 1, 1, 7, 7, 7, 7]},
    7: {'deck': [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], 'crystal': [1, 1, 1, 1, 1, 1, 8, 8]}
}

const dataCharacterD = {
    1: ['Character : Fire', 'Gain extra energy.'],
    2: ['Character : Water', 'Freeze enemy and summon.'],
    3: ['Character : Wind', 'Play extra cards.'],
    4: ['Character : Earth', 'Use powerful units.'],
    5: ['Character : Light', 'Use units with rush.'],
    6: ['Character : Dark', 'When units exit, do someting'],
    7: ['Character : All', 'Use all cards.']
}

const dataEnemy = {
    1: {'deck': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'crystal': [1, 1, 1, 1, 1, 1, 1, 1], 'hp': 15}
}
