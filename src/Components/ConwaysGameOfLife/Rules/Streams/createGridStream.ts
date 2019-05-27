import { Observable } from "rxjs";
import { scan, startWith, map } from "rxjs/operators";

import GameOfLife from "../../GameOfLife";

import randomGrid from "../Utils/randomGrid";

import createTimerStream from "./createTimerStream";
import createNextGrid from "../Utils/createNextGrid";
import Cell from "../Cell";

type GridType = Array<Array<Cell>>

const createGridStream = (
    gameOfLife: GameOfLife
    ): Observable<[GridType, number[]]> =>
    createTimerStream(gameOfLife)
        .pipe(
            startWith(randomGrid(gameOfLife.rules.getDimensions())),
            scan((prevGrid: GridType) => createNextGrid(prevGrid, gameOfLife.rules.getDimensions())),
            map((nextGrid: GridType) => [nextGrid, gameOfLife.rules.getDimensions()])
        )

export default createGridStream;
