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

export function displayEmptyBoards(playerBoard, enemyBoard, boardId, player) {
    initializePlayerBoard(playerBoard, boardId);
    displayPlayerName(boardId, player)
    displayEnemyBoard(enemyBoard, boardId == 'board1' ? 'enemy1' : 'enemy2', player, false);
}

function initializePlayerBoard(board, boardId) {
    const boardDiv = document.getElementById(boardId);
    boardDiv.style.gridTemplateRows = `repeat(${board.getRows()}, 64px)`;
    boardDiv.style.gridTemplateColumns = `repeat(${board.getRows()}, 64px)`;

    while (boardDiv.firstChild)
        boardDiv.removeChild(boardDiv.firstChild);
    
    for (let r = 0; r < board.getRows(); r++) {
        for (let c = 0; c < board.getColumns(); c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `${boardId}-cell-${r}-${c}`);

            boardDiv.appendChild(cell);
        }
    }
}

function displayPlayerName(boardId, player) {
    const boardDiv = document.getElementById(boardId);
    const playerName = boardDiv.previousElementSibling.previousElementSibling.previousElementSibling;
    playerName.textContent = player.getName();
    playerName.addEventListener('click', () => {
        player.setName(prompt(`Enter ${player.getName()}'s new name:`) || player.getName());
        playerName.textContent = player.getName();
    });
}

// enemy board refers to current player's view of hits and misses
export function displayEnemyBoard(enemyBoard, enemyBoardId, player, gameActive) {
    const enemyBoardDiv = document.getElementById(enemyBoardId);
    enemyBoardDiv.style.gridTemplateRows = `repeat(${enemyBoard.getRows()}, 64px)`;
    enemyBoardDiv.style.gridTemplateColumns = `repeat(${enemyBoard.getRows()}, 64px)`;
    enemyBoardDiv.classList.toggle('turn');

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

            if (marker != 'H' && marker != 'M') {                
                cell.addEventListener('click', () => {
                    enemyBoardDiv.classList.toggle('turn');

                    enemyBoard.receiveAttack(r, c);
                    if (enemyBoard.getBoard()[r][c] == 'H') {
                        cell.style.backgroundColor = 'darkred';
                        cell.style.pointerEvents = 'none';
                    } else if (enemyBoard.getBoard()[r][c] == 'M') {
                        cell.style.backgroundColor = 'rgb(64, 64, 64)';
                    }

                    cell.style.pointerEvents = 'none';
                    
                    if (enemyBoard.allShipsSunk()) {
                        console.log(`All of ${player.getName()}'s ships have sunk!`);
                    }
                });
            } else {
                cell.style.pointerEvents = 'none';
            }

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