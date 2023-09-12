import {Colors} from "../types";

export class Cell {
    x: number;
    y: number;
    color: Colors;
    $el: HTMLElement;

    constructor(x: number, y: number, color: Colors) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.$el = document.createElement('div');
        this.$el.className = `chess__cell ${this.color === Colors.BLACK ? 'black' : ''}`
    }

}