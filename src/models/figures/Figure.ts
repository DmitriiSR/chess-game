import {Colors, FiguresNames} from "../../types";
import {Cell} from "../Cell";

export class Figure {
    color: Colors
    name: FiguresNames
    cell: Cell

    constructor(cell: Cell, color: Colors) {
        this.cell = cell;
        this.name = FiguresNames.FIGURE;
        this.color = color;
    }

}