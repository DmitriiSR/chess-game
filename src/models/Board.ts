import {Cell} from "./Cell";
import {Colors} from "../types";

export class Board {
    $el: HTMLElement | null;
    activeCellCoords: number[] = []
    constructor() {
        this.$el = document.getElementById('board');
    }
    render() {
        for (let i = 0; i < 8; i++) {
            for (let k = 0; k < 8; k++) {
                const color = (i + k) % 2 !== 0 ? Colors.BLACK : Colors.WHITE
                this.appendCell(i, k, color)
            }
        }
    }

    appendCell(x: number, y: number, color: Colors) {
        const cell = new Cell(x, y, color);
        this.$el?.appendChild(cell.$el);
        cell.$el.addEventListener('click', () => {
            this.clickCell(cell)
        })
    }

    clickCell(cell: Cell) {
        this.clearActiveCells();
        cell.$el.classList.add('active')
    }

    clearActiveCells() {
        document.querySelectorAll('.chess__cell')
            .forEach(e => e.classList.remove('active'))
    }
}