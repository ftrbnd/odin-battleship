import Ship from "../classes/Ship";

export function displayBoard(board, id, player) {
    const boardDiv = document.getElementById(id);

    for (let r = 0; r < board.getRows(); r++) {
        for (let c = 0; c < board.getColumns(); c++) {
            const cell = document.querySelector(`#${id}-cell-${r}-${c}`);
            console.log(cell);

            switch (board.getBoard()[r][c]) {
                case 5:
                case 4:
                case 3:
                case 2:
                    cell.style.backgroundColor = 'lightgray';
                    break;
            }

            cell.addEventListener('click', () => {
                board.receiveAttack(r, c);
                if (board.getBoard()[r][c] == 'H') {
                    cell.style.backgroundColor = 'darkred';
                } else if (board.getBoard()[r][c] == 'M') {
                    cell.style.backgroundColor = 'navy';
                }
                
                cell.style.pointerEvents = 'none';

                if (board.allShipsSunk()) {
                    console.log(`All of ${player.getName()}'s ships have sunk!`);
                }
            });
        }
    }
}

export function displayEmptyBoards(board, id, player) {
    const boardDiv = document.getElementById(id);
    boardDiv.style.gridTemplateRows = `repeat(${board.getRows()}, 64px)`;
    boardDiv.style.gridTemplateColumns = `repeat(${board.getRows()}, 64px)`;

    boardDiv.previousElementSibling.previousElementSibling.textContent = player.getName();

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
    console.log(boardDiv);
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