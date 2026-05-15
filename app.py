from flask import Flask, render_template, jsonify, request
from config import Config
from utils.word_loader import WordLoader
import random

app = Flask(__name__)
app.config.from_object(Config)

word_loader = WordLoader(app.config['WORDS_CSV'])

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/settings')
def settings():
    categories = word_loader.get_categories()
    return render_template('settings.html', categories=categories)

@app.route('/setup')
def setup():
    return render_template('setup.html')

@app.route('/reveal')
def reveal():
    return render_template('reveal.html')

@app.route('/api/words')
def get_words():
    return jsonify(word_loader.get_all_words())

@app.route('/api/categories')
def get_categories():
    return jsonify(word_loader.get_categories())

@app.route('/api/words/<category>')
def get_words_by_category(category):
    words = word_loader.get_words_by_category(category)
    return jsonify(words)

@app.route('/api/random-word')
def get_random_word():
    category = request.args.get('category')
    word = word_loader.get_random_word(category)
    return jsonify({'word': word, 'category': category})

if __name__ == '__main__':
    print("=" * 50)
    print("Imposter Game Server")
    print(f"Running on http://localhost:{app.config['PORT']}")
    print(f"Debug mode: {app.config['DEBUG']}")
    print("=" * 50)
    app.run(
        host=app.config['HOST'],
        port=app.config['PORT'],
        debug=app.config['DEBUG']
    )