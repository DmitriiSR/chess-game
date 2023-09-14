import {Cell} from "./Cell";
import {Colors} from "../types";
import {Bishop} from "./figures/Bishop";
import {King} from "./figures/King";
import {Queen} from "./figures/Queen";
import {Knight} from "./figures/Knight";
import {Pawn} from "./figures/Pawn";
import {Rook} from "./figures/Rook";

export class Board {
    board: HTMLElement
    cells: Cell[][] =[[]]

    constructor() {
        this.board = document.createElement('div');
    }

    render() {
        const root = document.getElementById('app');
        this.board.className = 'chess__container';

        root?.appendChild(this.board);
        this.addCells();
    }

    remove() {
        this.board.remove()
    }
    private addCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let k = 0; k < 8; k++) {
                const color = (k + i) % 2 === 0 ? Colors.WHITE : Colors.BLACK;
                const cell = new Cell(this.cells, i, k, color, null);
                row.push(cell)
                cell.appendOnBoard(this.board);
            }
            this.cells.push(row)
        }
        this.addListeners();
        this.addFigures();
    }

    private getCell(x: number, y: number): Cell  {
        return this.cells[y][x]
    }

    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(this.getCell(i, 2), Colors.BLACK)
            new Pawn(this.getCell(i, 7), Colors.WHITE)
        }
    }

    private addRooks() {
        new Rook(this.getCell(0, 1), Colors.BLACK)
        new Rook(this.getCell(0, 8), Colors.WHITE)
        new Rook(this.getCell(7, 1), Colors.BLACK)
        new Rook(this.getCell(7, 8), Colors.WHITE)
    }

    private addKnights() {
        new Knight(this.getCell(1, 1), Colors.BLACK)
        new Knight(this.getCell(1, 8), Colors.WHITE)
        new Knight(this.getCell(6, 1), Colors.BLACK)
        new Knight(this.getCell(6, 8), Colors.WHITE)
    }

    private addBishops() {
        new Bishop(this.getCell(2, 1), Colors.BLACK)
        new Bishop(this.getCell(2, 8), Colors.WHITE)
        new Bishop(this.getCell(5, 1), Colors.BLACK)
        new Bishop(this.getCell(5, 8), Colors.WHITE)
    }

    private addKings() {
        new King(this.getCell(4, 1), Colors.BLACK)
        new King(this.getCell(4, 8), Colors.WHITE)
    }

    private addQueens() {
        new Queen(this.getCell(3, 1), Colors.BLACK)
        new Queen(this.getCell(3, 8), Colors.WHITE)
    }

    private addFigures() {
        this.addPawns();
        this.addRooks();
        this.addBishops();
        this.addKnights();
        this.addKings();
        this.addQueens();
    }

    private addListeners() {
        document.onmouseup = () => {
            const activeCell = this.board.querySelector('.chess__cell.selected');
            activeCell?.classList.remove('selected')
        }
    }
}