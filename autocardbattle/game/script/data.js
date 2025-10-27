class Data {
    static card = {
        801: {'ID': 801, 'name': 'Normal unit', 'type': 'unit', 'element': 8, 'crystal': [[8, 1]], 'crystallist': [8], 'stat': [1, 2], 'effect': []},
        802: {'ID': 802, 'name': 'Normal unit', 'type': 'unit', 'element': 8, 'crystal': [[8, 2]], 'crystallist': [8, 8], 'stat': [2, 3], 'effect': []},
        803: {'ID': 803, 'name': 'Normal unit', 'type': 'unit', 'element': 8, 'crystal': [[8, 3]], 'crystallist': [8, 8, 8], 'stat': [3, 4], 'effect': []},
        101: {'ID': 101, 'name': 'attack', 'type': 'spell', 'element': 1, 'crystal': [[1, 1]], 'crystallist': [1], 'stat': [0, 0], 'effect': []},
        102: {'ID': 102, 'name': 'Random Attack', 'type': 'spell', 'element': 1, 'crystal': [[1, 1], [8, 1]], 'crystallist': [8, 1], 'stat': [0, 0], 'effect': []},
        301: {'ID': 301, 'name': 'Fast Attack', 'type': 'spell', 'element': 3, 'crystal': [[3, 1], [8, 1]], 'crystallist': [8, 3], 'stat': [0, 0], 'effect': []},
        401: {'ID': 401, 'name': 'Guard', 'type': 'spell', 'element': 4, 'crystal': [[4, 1]], 'crystallist': [4], 'stat': [0, 0], 'effect': []},
    }

    static cardP = {
        801: [['summon']],
        802: [['summon']],
        803: [['summon']],
        101: [['dmghero', 3]],
        102: [['dmgrandom', 3]],
        301: [['dmgrandom', 2], ['gainacceler', 1]],
        401: [['gainarmor', 4]]
    }

    static cardD = {
        801: [],
        802: [],
        803: [],
        101: ['Deal 3 damage to', 'enemy hero.'],
        102: ['Deal 3 damage to', 'random character.'],
        301: ['Deal 2 damage to', 'random character', 'Gain 1 acceler.'],
        401: ['Gain 4 armor.']
    }

    static crystal = {
        1: {'ID': 1, 'name': 'fire crystal', 'element': 1, 'effect': []},
        2: {'ID': 2, 'name': 'water crystal', 'element': 2, 'effect': []},
        3: {'ID': 3, 'name': 'wind crystal', 'element': 3, 'effect': []},
        4: {'ID': 4, 'name': 'earth crystal', 'element': 4, 'effect': []},
        5: {'ID': 5, 'name': 'light crystal', 'element': 5, 'effect': []},
        6: {'ID': 6, 'name': 'dark crystal', 'element': 6, 'effect': []},
        7: {'ID': 7, 'name': 'raindow crystal', 'element': 7, 'effect': []},
        8: {'ID': 8, 'name': 'normal crystal', 'element': 8, 'effect': []},
    }

    static crystalD = {

    }

    static equipment = {
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
    }

    static equipmentD = {

    }

    static character = {
        1: {'deck': [101, 101, 101, 101, 102, 102, 102, 102], 'crystal': [1, 1, 1, 1, 8, 8, 8, 8]},
        2: {'deck': [801, 801, 801, 801, 802, 802, 802, 802, 803, 803, 803, 803], 'crystal': [2, 2, 2, 2, 8, 8, 8, 8]},
        3: {'deck': [301, 301, 301, 301, 301, 301, 301, 301, 301, 301, 301, 301], 'crystal': [3, 3, 3, 3, 8, 8, 8, 8]},
        4: {'deck': [401, 401, 401, 401, 401, 401, 401, 401, 803, 803, 803, 803], 'crystal': [4, 4, 4, 4, 8, 8, 8, 8]},
        5: {'deck': [801, 801, 801, 801, 802, 802, 802, 802, 803, 803, 803, 803], 'crystal': [5, 5, 5, 5, 8, 8, 8, 8]},
        6: {'deck': [801, 801, 801, 801, 802, 802, 802, 802, 803, 803, 803, 803], 'crystal': [6, 6, 6, 6, 8, 8, 8, 8]},
        7: {'deck': [801, 801, 801, 801, 802, 802, 802, 802, 803, 803, 803, 803], 'crystal': [7, 7, 7, 7, 8, 8, 8, 8]}
    }

    static characterD = {
        1: ['Character : Fire', 'Gain extra energy.'],
        2: ['Character : Water', 'Freeze enemy and summon.'],
        3: ['Character : Wind', 'Play extra cards.'],
        4: ['Character : Earth', 'Use powerful units.'],
        5: ['Character : Light', 'Use units with rush.'],
        6: ['Character : Dark', 'When units exit, do someting'],
        7: ['Character : All', 'Use all cards.']
    }

    static enemy = {
        1101: {'deck': [801, 801, 801, 801, 801, 801, 801, 801], 'crystal': [8, 8, 8, 8, 8, 8, 8, 8], 'hp': 15}
    }
}
