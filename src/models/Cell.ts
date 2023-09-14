import { Colors, FiguresNames } from "../types";

export class Cell {
    cells: Cell[][]
    x: number
    y: number
    color: Colors
    figure: FiguresNames | null
    $el: HTMLElement

    constructor(cells: Cell[][], x: number, y: number, color: Colors, figure: FiguresNames | null) {
        this.cells = cells;
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.$el = document.createElement('div');
    }

    appendOnBoard(container: HTMLElement) {
        this.$el.className = `chess__cell ${this.color}`;
        container.appendChild(this.$el);
        this.addListener();
        return this.$el;
    }

    private addListener() {
        this.$el.onmousedown = () => this.highlightOnClick();
        this.$el.onmouseover = () => console.log(1);
    }

    private highlightOnClick() {
        if (this.figure) {
            this.$el.classList.add('selected');
        }
    }
}