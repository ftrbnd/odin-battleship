const Player = (name) => {
    name = name.trim() || 'Player';

    const getName = () => name;

    const setName = (n) => {
        name = n.trim() || 'Player';
    }

    return {
        getName,
        setName
    }
}

export default Player;