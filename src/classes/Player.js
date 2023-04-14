const Player = (name) => {
    name = name.trim() || 'Player';
    const getName = () => name;

    return {
        getName
    }
}

export default Player;