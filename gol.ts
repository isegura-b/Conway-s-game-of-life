const canvas = document.getElementById("gameoflife") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

canvas.width = 500;
canvas.height = 500;

const cellSize = 10;
let numCells: number = 1000;
let cols: number = canvas.width / cellSize;
let rows: number = canvas.height / cellSize;

let grid: number[][] = [];

function initGrid(grid: number[][]) {
    for (let y = 0; y < rows; y++) {
        const row: number[] = [];
        for (let x = 0; x < cols; x++) {
            row.push(0);
        }
        grid.push(row);
    }
}
initGrid(grid);
for (let y = 0; y < rows; y++) {
    console.log(grid[y]);
}


for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
        if (grid[y][x] === 1) {
            ctx.fillStyle = "black";
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}

let presentGen: number[][] = grid;

function sim() {
    for (let i = 0; i < numCells; i++) {
        const y = Math.floor(Math.random() * rows);
        const x = Math.floor(Math.random() * cols);
        presentGen[y][x] = 1;
    }
}
sim();

function searchForLife(g: number[][], y: number, x: number): number {
    let next = 0;
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            if (dy === 0 && dx === 0)
                continue;
            let ny = y + dy;
            let nx = x + dx;
            if (ny >= 0 && ny < rows && nx >= 0 && nx < cols) {
                if (g[ny][nx] == 1)
                    next++;
            }
        }
    }
    return next;
}

function calculateNextGen(presentGen: number[][], futureGen: number[][]) {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let nextTo: number = searchForLife(presentGen, y, x);
            futureGen[y][x] = presentGen[y][x];
            if (presentGen[y][x] == 1) {
                if (nextTo < 2)
                    futureGen[y][x] = 0;
                else if (nextTo > 3)
                    futureGen[y][x] = 0;
            }
            else if (presentGen[y][x] == 0) {
                if (nextTo == 3)
                    futureGen[y][x] = 1;
            }
        }
    }
}

/*function getRandomColor(): string {
    const random = Math.floor(Math.random() * 3)
    if (random == 1)
        return "Green";
    if (random == 2)
        return "Red";
    else
        return "Blue";
}*/

function drawNextGen(futureGen: number[][]) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "black";
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (futureGen[y][x] == 1) {
                //ctx.fillStyle = getRandomColor();
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
            }
        }
    }
}

function presentToFuture(presentGen: number[][], futureGen: number[][]) {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            presentGen[y][x] = futureGen[y][x]
        }
    }
}

function updatePopulation() {
    let count = 0;
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (presentGen[y][x] === 1)
                count++;
        }
    }
    document.getElementById("population")!.innerText = count.toString();
}

let futureGen: number[][] = [];
initGrid(futureGen);

let start: boolean = false;
let speed: number = 400;
let restart: boolean = true;

document.getElementById("startBtn")!.onclick = () => {
    start = true;
    tick();
}
document.getElementById("stopBtn")!.onclick = () => {
    start = false;
}
document.getElementById("resetBtn")!.onclick = () => {
    grid = [];
    presentGen = [];
    futureGen = [];
    initGrid(grid);
    presentGen = grid;
    initGrid(futureGen);
    sim();
    drawNextGen(presentGen);
    updatePopulation();

    start = false;
}
document.getElementById("speedRange")!.oninput = (e) => {
    speed = parseInt((e.target as HTMLInputElement).value);
}
document.getElementById("x1Btn")!.onclick = () => {
    numCells = 1000;
    canvas.width = 500;
    canvas.height = 500;
    cols = canvas.width / cellSize;
    rows = canvas.height / cellSize;
    // reset matrices
    grid = [];
    presentGen = [];
    futureGen = [];
    initGrid(grid);
    presentGen = grid;
    initGrid(futureGen);
    // generate new cells
    sim();
    drawNextGen(presentGen);
    updatePopulation();

    start = false;
}
document.getElementById("x2Btn")!.onclick = () => {
    numCells = 5000;
    canvas.width = 1000;
    canvas.height = 1000;
    cols = canvas.width / cellSize;
    rows = canvas.height / cellSize;
    grid = [];
    presentGen = [];
    futureGen = [];
    initGrid(grid);
    presentGen = grid;
    initGrid(futureGen);
    sim();
    drawNextGen(presentGen);
    updatePopulation();

    start = false;
}
document.getElementById("x4Btn")!.onclick = () => {
    numCells = 20000;
    canvas.width = 2000;
    canvas.height = 2000;
    cols = canvas.width / cellSize;
    rows = canvas.height / cellSize;
    grid = [];
    presentGen = [];
    futureGen = [];
    initGrid(grid);
    presentGen = grid;
    initGrid(futureGen);
    sim();
    drawNextGen(presentGen);
    updatePopulation();

    start = false;
}


function tick() {
    if (!start)
        return;
    calculateNextGen(presentGen, futureGen);
    drawNextGen(futureGen);
    presentToFuture(presentGen, futureGen);

    updatePopulation();

    setTimeout(tick, 500 - speed);
}

tick();