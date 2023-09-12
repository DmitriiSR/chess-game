import {Figure} from "./Figure";
import {Colors} from "../../types";
import {Cell} from "../Cell";

export class Pawn extends Figure {
    logo: string;
    $el: HTMLElement;
    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.logo = color === Colors.BLACK ? 'pawn-black' : 'pawn-white';
        this.$el = document.createElement('div');
        this.$el.className = `chess__item ${this.logo}`
        this.cell.$el.appendChild(this.$el)
    }
}