import {BoardTmpl} from "./Board.tmpl";
import {Templator} from "../../core/templator";
import {CellTmpl} from "../cell/Cell.tmpl";

const data = {
    name: 2,
    chess__container: '123',
}
const CellComponent = new Templator(CellTmpl).compile({color: 'black'})
export const BoardComponent = new Templator(BoardTmpl)
    .addTemplate('CellTemplate', CellComponent)
    .compile(data)