# Imposter Game Documentation

Welcome to the Imposter Game documentation! This folder contains comprehensive guides and references for the project.

## 📚 Documentation Index

### **Getting Started**
- **[Main README](../README.md)** - Quick start guide and overview
- **[Complete Guide](README_NEW.md)** - Full documentation with all features
- **[Migration Guide](MIGRATION_GUIDE.md)** - Comparison of old vs new architecture

### **Technical Documentation**
- **[Project Summary](PROJECT_SUMMARY.md)** - Development overview and metrics
- **[Mobile Optimization](MOBILE_OPTIMIZATION.md)** - Responsive design implementation
- **[Game Features](imposter-game-features.md)** - Detailed feature breakdown

### **Enhancement Guides**
- **[Upgrades](UPGRADES.md)** - 31 future enhancement ideas with implementation guides
- **[Easter Eggs](EASTER_EGGS.md)** - Hidden features and fun game modes

## 🎯 Quick Navigation

### **For Players**
- How to play → [Main README](../README.md)
- Game rules → [Complete Guide](README_NEW.md)

### **For Developers**
- Architecture overview → [Migration Guide](MIGRATION_GUIDE.md)
- Code structure → [Project Summary](PROJECT_SUMMARY.md)
- Future features → [Upgrades](UPGRADES.md)

### **For Contributors**
- Mobile design → [Mobile Optimization](MOBILE_OPTIMIZATION.md)
- Feature ideas → [Upgrades](UPGRADES.md)
- Easter eggs → [Easter Eggs](EASTER_EGGS.md)

## 📁 Project Structure

```
impostor/
├── README.md              # Main documentation
├── app.py                 # Flask application
├── config.py              # Configuration
├── requirements.txt       # Dependencies
│
├── data/
│   └── words.csv         # 550+ words in 10 categories
│
├── static/
│   ├── css/
│   │   └── style.css     # Custom styles + animations
│   └── js/
│       ├── gameState.js  # State management
│       ├── roleAssignment.js
│       ├── wordManager.js
│       └── ui.js
│
├── templates/
│   ├── base.html         # Base template
│   ├── index.html        # Welcome screen
│   ├── settings.html     # Game configuration
│   ├── setup.html        # Player setup
│   └── reveal.html       # Role reveal
│
├── utils/
│   ├── __init__.py
│   └── word_loader.py    # CSV word loading
│
├── docs/                 # 📍 You are here
│   ├── README.md         # This file
│   ├── README_NEW.md
│   ├── MIGRATION_GUIDE.md
│   ├── MOBILE_OPTIMIZATION.md
│   ├── PROJECT_SUMMARY.md
│   ├── UPGRADES.md
│   ├── EASTER_EGGS.md
│   └── imposter-game-features.md
│
└── legacy/               # Archived old files
    ├── imposter-game.html
    ├── word-dictionary.js
    └── test_randomness.html
```

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Backend** | Flask 3.0 |
| **Templates** | Jinja2 |
| **Frontend** | Vanilla JavaScript (ES6+) |
| **Styling** | TailwindCSS + Custom CSS |
| **Data** | CSV files |
| **Icons** | Font Awesome 6.4 |
| **State** | localStorage |

## 🎮 Game Flow

```
1. Welcome Screen (/)
   ↓
2. Settings (/settings)
   - Configure players, roles, word
   ↓
3. Player Setup (/setup)
   - Enter names and colors
   ↓
4. Role Reveal (/reveal)
   - Pass device for private reveals
   ↓
5. Play the game!
   - Discuss and vote
```

## 📊 Key Metrics

- **Lines of Code**: ~2,000 (down from 590 monolithic)
- **Files**: 20+ organized files
- **Word Database**: 550+ words
- **Categories**: 10 themes
- **Player Support**: 4-13 players
- **Mobile Responsive**: ✅ Yes
- **API Endpoints**: 4 RESTful routes

## 🚀 Recent Improvements

- ✅ Refactored from monolithic to modular architecture
- ✅ Mobile-first responsive design
- ✅ localStorage state persistence
- ✅ CSV-based word management
- ✅ RESTful API structure
- ✅ Comprehensive documentation

## 🔮 Future Enhancements

See [UPGRADES.md](UPGRADES.md) for 31 detailed enhancement ideas including:
- Game history tracking
- Real-time multiplayer
- Custom word lists UI
- Timer and voting systems
- PWA support
- Multi-language support

## 📝 Contributing

This is a personal project, but contributions and forks are welcome!

1. Check [UPGRADES.md](UPGRADES.md) for feature ideas
2. Follow the existing code style
3. Test on mobile and desktop
4. Update documentation

## 📄 License

MIT License - See main README for details

---

**Happy coding!** 🎉
