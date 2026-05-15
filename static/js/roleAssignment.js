function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function assignRoles(players, imposterCount, jesterCount) {
    const playersCopy = players.map(p => ({...p, role: 'crewmate'}));
    
    const indices = shuffleArray([...Array(players.length).keys()]);
    let roleIndex = 0;
    
    for (let i = 0; i < imposterCount; i++) {
        playersCopy[indices[roleIndex++]].role = 'imposter';
    }
    
    for (let i = 0; i < jesterCount; i++) {
        playersCopy[indices[roleIndex++]].role = 'jester';
    }
    
    return playersCopy;
}

function getJesterWordInfo(secretWord, wordCategory, jesterInfoLevel) {
    switch (jesterInfoLevel) {
        case 'nothing':
            return 'No word information';
        case 'category':
            return `Category: ${wordCategory}`;
        case 'partial':
            return `Partial word: ${secretWord.substring(0, 3)}...`;
        case 'full':
            return `Full word: ${secretWord}`;
        default:
            return 'No word information';
    }
}
