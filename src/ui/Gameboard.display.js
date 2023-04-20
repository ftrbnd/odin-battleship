import Ship from "../classes/Ship";

export function displayBoard(board, id, gameActive) {
    for (let r = 0; r < board.getRows(); r++) {
        for (let c = 0; c < board.getColumns(); c++) {
            const cell = document.querySelector(`#${id}-cell-${r}-${c}`);

            if (gameActive)
                cell.classList.add('game-active');

            switch (board.getBoard()[r][c]) {
                case 5:
                case 4:
                case 3:
                case 2:
                    cell.style.backgroundColor = 'lightgray';
                    break;
                case 'H':
                    cell.style.backgroundColor = 'darkred';
                    break;
                case 'M':
                    cell.style.backgroundColor = 'navy';
                    break;
            }
        }
    }
}

export function displayEmptyBoards(playerBoard, enemyBoard, id, player) {
    displayEmptyPlayerBoard(playerBoard, id, player);
    displayEnemyBoard(enemyBoard, id == 'board1' ? 'enemy1' : 'enemy2', player, false);
}

function displayEmptyPlayerBoard(board, id, player) {
    const boardDiv = document.getElementById(id);
    boardDiv.style.gridTemplateRows = `repeat(${board.getRows()}, 64px)`;
    boardDiv.style.gridTemplateColumns = `repeat(${board.getRows()}, 64px)`;

    boardDiv.previousElementSibling.previousElementSibling.previousElementSibling.textContent = player.getName();

    while (boardDiv.firstChild)
        boardDiv.removeChild(boardDiv.firstChild);
    
    for (let r = 0; r < board.getRows(); r++) {
        for (let c = 0; c < board.getColumns(); c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `${id}-cell-${r}-${c}`);

            boardDiv.appendChild(cell);
        }
    }
}

// enemy board refers to current player's view of hits and misses
export function displayEnemyBoard(enemyBoard, enemyBoardId, player, gameActive) {
    const enemyBoardDiv = document.getElementById(enemyBoardId);
    enemyBoardDiv.style.gridTemplateRows = `repeat(${enemyBoard.getRows()}, 64px)`;
    enemyBoardDiv.style.gridTemplateColumns = `repeat(${enemyBoard.getRows()}, 64px)`;

    while (enemyBoardDiv.firstChild)
        enemyBoardDiv.removeChild(enemyBoardDiv.firstChild);

    for (let r = 0; r < enemyBoard.getRows(); r++) {
        for (let c = 0; c < enemyBoard.getColumns(); c++) {
            const cell = document.createElement('div');
            cell.classList.add('enemy-cell');
            cell.setAttribute('id', `${enemyBoardId}-cell-${r}-${c}`);

            if (gameActive)
                cell.classList.add('game-active');

            const marker = enemyBoard.getBoard()[r][c];

            if (marker == 'H') {
                cell.style.backgroundColor = 'darkred';
            } else if (marker == 'M') {
                cell.style.backgroundColor = 'rgb(64, 64, 64)';
            }

            cell.addEventListener('click', () => {
                enemyBoard.receiveAttack(r, c);
                if (enemyBoard.getBoard()[r][c] == 'H') {
                    cell.style.backgroundColor = 'darkred';
                } else if (enemyBoard.getBoard()[r][c] == 'M') {
                    cell.style.backgroundColor = 'rgb(64, 64, 64)';
                }
                
                cell.style.pointerEvents = 'none';

                if (enemyBoard.allShipsSunk()) {
                    console.log(`All of ${player.getName()}'s ships have sunk!`);
                }
            });

            enemyBoardDiv.appendChild(cell);
        }
    }
}

// temp function - let users place ships later
export function populateBoards(sideLength, ...boards) {
    for (const board of boards) {
        const shipLengths = [5, 4, 3, 3, 2];
        
        while (shipLengths.length > 0) {
            const length = shipLengths.pop();
            const newShip = Ship(length);

            const x = Math.floor(Math.random() * sideLength);
            const y = Math.floor(Math.random() * sideLength);
            const isVertical = Math.random() < 0.5;

            const placedShip = board.placeShip(newShip, x, y, isVertical, length);
            if (!placedShip) {
                shipLengths.push(length);
            }
        }
    }
}