class Data {
    static level = {}
    static loadData() {
        Data.level['level1'] = JSON.parse(JSON.stringify(level1['level1']))
        Data.level['level2'] = JSON.parse(JSON.stringify(level2['level2']))
    }
}