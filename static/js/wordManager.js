class WordManager {
    constructor() {
        this.wordsByCategory = {};
    }

    async loadWords() {
        try {
            const response = await fetch('/api/words');
            const data = await response.json();
            this.wordsByCategory = data;
            return data;
        } catch (error) {
            console.error('Error loading words:', error);
            return {};
        }
    }

    getCategories() {
        return Object.keys(this.wordsByCategory);
    }

    getWordsByCategory(category) {
        return this.wordsByCategory[category] || [];
    }

    async getRandomWord(category = null) {
        try {
            const url = category 
                ? `/api/random-word?category=${encodeURIComponent(category)}`
                : '/api/random-word';
            
            const response = await fetch(url);
            const data = await response.json();
            return data.word;
        } catch (error) {
            console.error('Error getting random word:', error);
            return '';
        }
    }

    findCategoryForWord(word) {
        for (const [category, words] of Object.entries(this.wordsByCategory)) {
            if (words.includes(word)) {
                return category;
            }
        }
        return null;
    }
}

const wordManager = new WordManager();
