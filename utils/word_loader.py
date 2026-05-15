import csv
import random
from pathlib import Path

class WordLoader:
    def __init__(self, csv_path='data/words.csv'):
        self.csv_path = Path(csv_path)
        self.words_by_category = {}
        self.load_words()
    
    def load_words(self):
        with open(self.csv_path, 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                category = row['category']
                word = row['word']
                
                if category not in self.words_by_category:
                    self.words_by_category[category] = []
                
                self.words_by_category[category].append(word)
    
    def get_categories(self):
        return list(self.words_by_category.keys())
    
    def get_words_by_category(self, category):
        return self.words_by_category.get(category, [])
    
    def get_random_word(self, category=None):
        if category and category in self.words_by_category:
            return random.choice(self.words_by_category[category])
        
        all_words = [word for words in self.words_by_category.values() for word in words]
        return random.choice(all_words)
    
    def get_all_words(self):
        return {cat: words for cat, words in self.words_by_category.items()}
