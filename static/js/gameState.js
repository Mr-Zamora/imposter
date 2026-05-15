class GameState {
    constructor() {
        this.loadFromStorage();
    }

    loadFromStorage() {
        const saved = localStorage.getItem('imposterGameState');
        if (saved) {
            const data = JSON.parse(saved);
            this.players = data.players || [];
            this.currentPhase = data.currentPhase || 'welcome';
            this.playerCount = data.playerCount || 6;
            this.imposterCount = data.imposterCount || 1;
            this.jesterCount = data.jesterCount || 0;
            this.jesterInfo = data.jesterInfo || 'nothing';
            this.secretWord = data.secretWord || '';
            this.wordCategory = data.wordCategory || 'Animals';
        } else {
            this.players = [];
            this.currentPhase = 'welcome';
            this.playerCount = 6;
            this.imposterCount = 1;
            this.jesterCount = 0;
            this.jesterInfo = 'nothing';
            this.secretWord = '';
            this.wordCategory = 'Animals';
        }
    }

    saveToStorage() {
        localStorage.setItem('imposterGameState', JSON.stringify(this.getState()));
    }

    setPlayers(players) {
        this.players = players;
        this.saveToStorage();
    }

    setPlayerCount(count) {
        this.playerCount = parseInt(count);
        this.saveToStorage();
    }

    setImposterCount(count) {
        this.imposterCount = parseInt(count);
        this.saveToStorage();
    }

    setJesterCount(count) {
        this.jesterCount = parseInt(count);
        this.saveToStorage();
    }

    setJesterInfo(info) {
        this.jesterInfo = info;
        this.saveToStorage();
    }

    setSecretWord(word) {
        this.secretWord = word;
        this.saveToStorage();
    }

    setWordCategory(category) {
        this.wordCategory = category;
        this.saveToStorage();
    }

    setPhase(phase) {
        this.currentPhase = phase;
        this.saveToStorage();
    }

    reset() {
        this.players = [];
        this.currentPhase = 'welcome';
        this.saveToStorage();
    }

    getState() {
        return {
            players: this.players,
            currentPhase: this.currentPhase,
            playerCount: this.playerCount,
            imposterCount: this.imposterCount,
            jesterCount: this.jesterCount,
            jesterInfo: this.jesterInfo,
            secretWord: this.secretWord,
            wordCategory: this.wordCategory
        };
    }
}

const gameState = new GameState();
