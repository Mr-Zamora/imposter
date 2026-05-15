# Migration Guide: Old → New Architecture

## 🎯 What Changed?

### **Before (Monolithic)**
```
impostor/
├── imposter-game.html (590 lines - everything in one file)
├── word-dictionary.js (32KB - huge JS file)
└── app.py (simple HTTP server)
```

### **After (Modular)**
```
impostor/
├── app.py (Flask app with routes)
├── config.py (configuration)
├── requirements.txt
├── data/
│   └── words.csv (CSV format - easy to edit)
├── static/
│   ├── css/style.css
│   └── js/ (4 modular files)
├── templates/ (5 Jinja templates)
└── utils/
    └── word_loader.py
```

## 📊 Key Improvements

| Aspect | Old | New |
|--------|-----|-----|
| **Files** | 1 HTML, 1 JS | 15+ organized files |
| **Data Format** | JavaScript object | CSV (editable in Excel) |
| **Backend** | Simple HTTP server | Flask with API |
| **JavaScript** | 400+ lines inline | 4 modular files |
| **Templates** | None | Jinja2 inheritance |
| **Scalability** | ❌ Hard to extend | ✅ Easy to add features |
| **Maintainability** | ❌ Everything mixed | ✅ Clear separation |

## 🔄 How to Use the New Version

### **1. Install Dependencies**
```bash
pip install -r requirements.txt
```

### **2. Run the Server**
```bash
python app.py
```

### **3. Access the Game**
Open: http://localhost:8000

## 📝 Adding New Words

### **Old Way**
Edit `word-dictionary.js`:
```javascript
const wordDictionary = {
    'Animals': ['cat', 'dog', ...],
    // Hard to edit, requires JS knowledge
}
```

### **New Way**
Edit `data/words.csv` in Excel or any text editor:
```csv
category,word
Animals,cat
Animals,dog
Food,pizza
```
✅ No coding required!

## 🛠️ Extending the Application

### **Adding a New Feature (e.g., Game History)**

#### **1. Add CSV for Storage**
Create `data/game_history.csv`:
```csv
date,players,winner,duration
2024-05-16,6,Crewmates,15
```

#### **2. Create Python Utility**
Create `utils/history_loader.py`:
```python
import csv

class HistoryLoader:
    def save_game(self, game_data):
        # Save to CSV
        pass
    
    def get_history(self):
        # Load from CSV
        pass
```

#### **3. Add Flask Route**
In `app.py`:
```python
@app.route('/api/history')
def get_history():
    return jsonify(history_loader.get_history())
```

#### **4. Create Template**
Create `templates/history.html`:
```html
{% extends "base.html" %}
{% block content %}
  <!-- History display -->
{% endblock %}
```

#### **5. Add JavaScript Module**
Create `static/js/history.js`:
```javascript
async function loadHistory() {
    const response = await fetch('/api/history');
    return await response.json();
}
```

## 🎮 Feature Comparison

| Feature | Old | New |
|---------|-----|-----|
| Role Assignment | ✅ | ✅ |
| Secret Words | ✅ | ✅ |
| Multiple Categories | ✅ | ✅ |
| Custom Words | ✅ | ✅ |
| Settings Screen | ✅ | ✅ |
| **API Endpoints** | ❌ | ✅ |
| **CSV Data** | ❌ | ✅ |
| **Modular Code** | ❌ | ✅ |
| **Easy to Extend** | ❌ | ✅ |
| **Template Reuse** | ❌ | ✅ |

## 🔧 Configuration

### **Old Version**
Hard-coded in HTML/JS

### **New Version**
Edit `config.py`:
```python
class Config:
    PORT = 8000
    DEBUG = True
    # Easy to change!
```

## 📦 File Organization Benefits

### **JavaScript Modules**
- `gameState.js` - State management only
- `roleAssignment.js` - Role logic only
- `wordManager.js` - Word API calls only
- `ui.js` - UI utilities only

✅ **Each file has one job** → Easy to debug and test

### **Templates**
- `base.html` - Common layout
- `index.html` - Welcome screen
- `settings.html` - Settings
- `setup.html` - Player setup
- `reveal.html` - Role reveal

✅ **Reusable components** → Change header once, updates everywhere

## 🚀 Future Possibilities

With the new architecture, you can easily add:

1. **Database Support** (replace CSV with SQLite/PostgreSQL)
2. **User Accounts** (Flask-Login)
3. **Multiplayer** (Flask-SocketIO)
4. **Mobile App** (use the API)
5. **Game Statistics** (track wins/losses)
6. **Custom Themes** (CSS modules)
7. **Admin Panel** (manage words via web UI)
8. **Export/Import** (backup game data)

## 📚 Learning Resources

- **Flask**: https://flask.palletsprojects.com/
- **Jinja2**: https://jinja.palletsprojects.com/
- **CSV in Python**: https://docs.python.org/3/library/csv.html

## ⚠️ Important Notes

- Old files (`imposter-game.html`, `word-dictionary.js`) are preserved
- Both versions can coexist
- New version uses port 8000 (configurable)
- Flask auto-reloads on code changes in debug mode

## 🎉 Summary

The new architecture provides:
- ✅ Better organization
- ✅ Easier maintenance
- ✅ Scalable design
- ✅ CSV data (no coding to add words)
- ✅ API-ready for future features
- ✅ Professional structure

**Enjoy building on this foundation!** 🚀
