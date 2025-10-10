class Func {
    static pointInsideRectUI(pos, rect) {
        return pos[0] > rect[0] && pos[0] < rect[0] + rect[2] && pos[1] > rect[1] && pos[1] < rect[1] + rect[3]
    }
}
