/* 
- Afficher la grille
    - Afficher chaque ligne
        - Afficher chaque cellule => x : mort / o : vivant

    - Afficher X fois chaque ligne

- Step
    - Parcourir la grille

    - Pour chaque cellule, calculer l'état suivante de cette même cellule
        - Compter le nombre de voisin
            - Si vivante et 2/3 voisine vivante : reste vivante sinon meurt
            - Si 3 voisines : devient vivante
    
    - Regénérer la grille

- Boucler
*/


/*grid.forEach((line) =>
    console.log(line.map((cell) => cell ? "O" : "X").join(""));
);

grid.forEach((lineElement) => 
    lineElement.forEach((cellElement) =>
        
        console.log("x")
    )
);*/


const generateGrid = (size) => Array.from({ length : size}, () => Array.from({ length : size }, () => false ));

const displayLine = (line) => line.map((cell) => displayCell(cell)).join(" ");
const displayCell = (cell) => (cell ? "🟢" : "🔴");

const renderGrid = (grid) => grid.forEach((line) => console.log(displayLine(line)));

const getNextState = (isAlive, numberOfAliveNeighbours) => isAlive
    ? numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3
    : numberOfAliveNeighbours === 3
/*{
    if (isAlive) {
        if (numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3) {
            return true;
        } else {
            return false;
        }
    }
    else if(numberOfAliveNeighbours === 3){
        return true;
    }
};*/

const isOutOfBound = ({length}, {x, y}) =>  x < 0 || y < 0 || x >= length || y >= length
/*{
    if (x < 0) {
        return true;
    } else {
        return false;
    }
};*/


const countAliveNeightbour = (grid, {x, y}) =>
[
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1]
].filter(([i, j]) => !isOutOfBound(grid, {x: i, y: j}) && grid[i][j]).length;



const step = (grid) => {
    const newGrid = JSON.parse(JSON.stringify(grid));

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            newGrid[i][j] = getNextState(grid[i][j], countAliveNeightbour(grid, {x: i, y: j}));
        }
    }

    return newGrid;
};
    /*let newGrid = grid.map((line) => {
        line.map((cell) => {
            //cell = cell ? !cell : !cell;
            //cell = getNextState(cell, countAliveNeightbour(grid, {x: line, y: cell}));
        });
    });*/


    // let newGrid = grid.map((grid) => {
    //     grid.forEach((line) => {
    //         line.forEach((cell) => {
    //             cell = cell ? !cell : !cell;
    //         });
    //     });
    // });

    /*grid.forEach((line) => {
        line.forEach((cell) => {
            //cell = getNextState(cell, 3);
            cell = cell ? !cell : !cell;
            //console.log(displayCell(cell));
        });
    });*/

    /*grid.forEach((line) => {
        line.map((cell) => cell ? !cell : cell)




        /*line.forEach((cell) => {
            /*if (cell) {
                invertCell(cell);
            }
            //cell = cell ? "1" : "0";
            cell.map(invertCell(cell));
        })
    });*/

const activateRandomCell = (grid, timesToRepeat) => {
    for (let i = 0; i < timesToRepeat; i++) {
        const x = Math.floor(Math.random() * grid.length);
        const y = Math.floor(Math.random() * grid.length);

        grid[x][y] = true;
    }

    return grid;
};

const gridSize = 30;

let grid = generateGrid(gridSize);
grid = activateRandomCell(grid, gridSize * 7);

// grid[1][1] = true;
// grid[1][2] = true;
// grid[2][1] = true;

// grid[5][4] = true;
// grid[5][5] = true;
// grid[5][6] = true;

let numberOfStep = 0;
setInterval(() => {
    console.clear();
    console.log(`Step ${numberOfStep++}`);
    renderGrid(grid);
    grid = step(grid);
}, 250);