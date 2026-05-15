import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    DEBUG = True
    HOST = '0.0.0.0'
    PORT = 8000
    
    DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
    WORDS_CSV = os.path.join(DATA_DIR, 'words.csv')
