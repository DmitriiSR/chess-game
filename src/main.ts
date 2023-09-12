import {BoardComponent} from "./components/board";
import './style/index.css'

const app = document.getElementById('app')

if (app) {
    app.innerHTML = BoardComponent;
}
