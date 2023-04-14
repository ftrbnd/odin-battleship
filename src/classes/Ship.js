const Ship = (length, hits = 0) => {
    length = length <= 0 ? 1 : length;
    hits = hits <= 0 ? 0 : hits;

    const getLength = () => length;
    const getHits = () => hits;

    const hit = (amount) => {
        hits += amount <= 0 ? 0 : amount;
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