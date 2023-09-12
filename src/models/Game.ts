import {Board} from "./Board";

export class Game {
    activePlayer = 0;
    board: Board

    constructor() {
        this.board = new Board()
    }
    init() {
        this.board.render();
    }
}