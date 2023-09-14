import {Colors, FiguresNames} from "../../types";
import {Cell} from "../Cell";
import {Figure} from "./Figure";
import {dragFigure} from "../../utils";

export class Bishop extends Figure {
    logo: string;
    $el: HTMLElement;
    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.logo = color === Colors.BLACK ? 'bishop-black' : 'bishop-white';
        this.$el = document.createElement('div');
        this.$el.className = `chess__item ${this.logo}`
        this.cell.figure = FiguresNames.BISHOP;
        this.cell.$el.appendChild(this.$el);
        this.addListeners();
    }

    private addListeners() {
        this.$el.onmousedown = () => dragFigure(this.$el)
    }
}