const Gameboard = (rows = 8, cols = 8) => {
    rows = rows <= 8 ? 8 : rows; // enforce minimum board size
    cols = cols <= 8 ? 8 : cols;

    let board = [];
    for (let r = 0; r < rows; r++) {
        board.push([]);
        for (let c = 0; c < cols; c++) {
            board[r].push('_');
        }
    }

    const getRows = () => rows;
    const getColumns = () => cols;

    const shipCoords = [];

    const placeShip = (ship, x, y, isVertical) => {
        const prevBoard = JSON.parse(JSON.stringify(board));
        const coords = [];

        if (isVertical) {
            for (let i = 0; i < ship.getLength(); i++) {
                if (x < 0 || x >= board.length) {
                    board = prevBoard;
                    return `Cannot vertically place ship on row ${x}!`;
                }

                coords.push([x, y]);
                board[x++][y] = 'S';
            }
        } else {
            for (let i = 0; i < ship.getLength(); i++) {
                if (y < 0 || y >= board[0].length) {
                    board = prevBoard;
                    return `Cannot horizontally place ship on column ${y}!`;
                }
                
                coords.push([x, y]);
                board[x][y++] = 'S';
            }
        }

        shipCoords.push([ship, coords]);
    };

    const receiveAttack = (x, y) => {
        if (board[x][y] == 'S') { // hit
            board[x][y] = 'H';
            
            for (const shipAndCoords of shipCoords) {
                const ship = shipAndCoords[0], coords = shipAndCoords[1];

                for (const coord of coords)
                    if (x == coord[0] && y == coord[1])
                        ship.hit(1);
            }
        } else { // miss
            board[x][y] = 'M';
        }
    };

    const allShipsSunk = () => {
        for (const [ship] of shipCoords) {
            if (!ship.isSunk()) return false;
        }
        return true;
    }

    return {
        board,
        getRows,
        getColumns,
        placeShip,
        receiveAttack,
        allShipsSunk
    }
}

export default Gameboard;