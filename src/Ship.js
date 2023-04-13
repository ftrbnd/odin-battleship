const Ship = (length, hits = 0) => {
    const getLength = () => length;
    const getHits = () => hits;

    const hit = (amount) => {
        hits += amount;
    };

    const isSunk = () => {
        return hits >= length;
    };

    return {
        getLength,
        getHits,
        hit,
        isSunk
    }
}

export default Ship;