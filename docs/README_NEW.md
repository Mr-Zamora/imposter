# Imposter Game - Flask Edition

A modular, scalable web-based role assignment system for social deduction games built with Flask, Jinja templates, vanilla JavaScript, and CSV data storage.

## 🏗️ Architecture

### **Technology Stack**
- **Backend**: Flask (Python web framework)
- **Templates**: Jinja2 (server-side rendering)
- **Frontend**: Vanilla JavaScript (modular ES6)
- **Data Storage**: CSV files
- **Styling**: TailwindCSS + Custom CSS

### **Project Structure**
```
impostor/
├── app.py                      # Flask application & routes
├── config.py                   # Configuration settings
├── requirements.txt            # Python dependencies
├── data/
│   └── words.csv              # Word dictionary (550+ words)
├── static/
│   ├── css/
│   │   └── style.css          # Custom styles & animations
│   ├── js/
│   │   ├── gameState.js       # Centralized state management
│   │   ├── roleAssignment.js  # Role assignment logic
│   │   ├── wordManager.js     # Word API client
│   │   └── ui.js              # UI utility functions
│   └── images/
├── templates/
│   ├── base.html              # Base template with common layout
│   ├── index.html             # Welcome screen
│   ├── settings.html          # Game configuration
│   ├── setup.html             # Player setup
│   └── reveal.html            # Role reveal screen
└── utils/
    ├── __init__.py
    └── word_loader.py         # CSV word loading utility

```

## 🚀 Quick Start

### **1. Install Dependencies**
```bash
pip install -r requirements.txt
```

### **2. Run the Application**
```bash
python app.py
```

### **3. Access the Game**
Open your browser to: **http://localhost:8000**

## 📋 Features

### **Modular Architecture**
- ✅ **Separation of Concerns**: Backend (Flask), Frontend (JS), Data (CSV)
- ✅ **Reusable Components**: Modular JavaScript files
- ✅ **Template Inheritance**: Jinja2 base templates
- ✅ **RESTful API**: Clean API endpoints for data

### **Game Features**
- 🎮 4-13 player support
- 🎭 Multiple roles: Crewmates, Imposters, Jesters
- 🔐 Secret word system with 10 categories
- 📊 550+ words across categories
- 🎲 Random word generation
- ⚙️ Configurable game settings
- 🔄 Play again with new roles

### **Data Management**
- 📁 CSV-based word storage (easy to edit)
- 🔄 Dynamic word loading via API
- 📂 Organized by categories
- ➕ Easy to add new words/categories

## 🛠️ API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Welcome screen |
| `/settings` | GET | Game settings page |
| `/setup` | GET | Player setup page |
| `/reveal` | GET | Role reveal page |
| `/api/words` | GET | Get all words by category |
| `/api/categories` | GET | Get all categories |
| `/api/words/<category>` | GET | Get words for specific category |
| `/api/random-word?category=X` | GET | Get random word (optional category) |

## 📝 How to Add New Words

Edit `data/words.csv`:
```csv
category,word
Animals,dolphin
Food,pizza
Colors,purple
```

The app will automatically load new words on restart.

## 🎯 Benefits Over Previous Version

### **Scalability**
- ✅ Easy to add new features (multiplayer, database, etc.)
- ✅ Modular code - change one part without breaking others
- ✅ API-ready for mobile apps or other clients

### **Maintainability**
- ✅ Clear file organization
- ✅ Separated concerns (HTML/CSS/JS/Python)
- ✅ Easy to debug and test

### **Data Management**
- ✅ CSV files - edit in Excel/Google Sheets
- ✅ No code changes needed to update words
- ✅ Easy backup and version control

### **Developer Experience**
- ✅ Flask auto-reload during development
- ✅ Clean code structure
- ✅ Easy to understand and extend

## 🔧 Configuration

Edit `config.py` to customize:
- Port number
- Debug mode
- File paths
- Secret key

## 📦 Dependencies

- **Flask 3.0.0**: Web framework
- **Werkzeug 3.0.1**: WSGI utilities

## 🎮 Game Roles

### **Crewmate**
- Receives the secret word
- Works to identify the imposter
- Wins by voting out imposters

### **Imposter**
- Doesn't know the secret word
- Must blend in and deceive
- Wins by not getting caught

### **Jester**
- Configurable word information (nothing/category/partial/full)
- Wins by getting voted out
- Acts suspicious to get eliminated

## 🔄 Migration from Old Version

The old files (`imposter-game.html`, `word-dictionary.js`) are preserved. The new Flask version is a complete rewrite with:
- Better organization
- Easier maintenance
- More scalable architecture
- CSV-based data storage

## 📄 License

Same as original project.

## 🤝 Contributing

To add new features:
1. Backend: Add routes in `app.py`
2. Frontend: Add templates in `templates/`
3. JavaScript: Add modules in `static/js/`
4. Data: Edit CSV files in `data/`

---

**Enjoy the game! 🎮**
