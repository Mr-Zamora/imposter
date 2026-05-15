# Imposter Game

A social deduction game for 4-13 players built with Flask, Jinja templates, and vanilla JavaScript.

## 🚀 Quick Start

```bash
# Install dependencies
pip install -r requirements.txt

# Run the server
python app.py

# Open browser to http://localhost:8000
```

## 🎮 How to Play

1. **Configure settings** - Set player count, imposters, jesters, and secret word
2. **Add players** - Enter names and pick colors
3. **Assign roles** - Pass device around for private role reveals
4. **Play the game** - Discuss and vote to find the imposter!

## 🎭 Game Roles

- **Crewmates** - Know the secret word, find the imposter
- **Imposter** - Blend in without knowing the word
- **Jester** - Get voted out to win (configurable word info)

## ✨ Features

- ✅ Mobile-responsive design
- ✅ 550+ words across 10 categories
- ✅ Configurable game settings
- ✅ localStorage state persistence
- ✅ RESTful API
- ✅ CSV-based word management

## 📚 Documentation

- **[Complete Guide](docs/README_NEW.md)** - Full documentation
- **[Migration Guide](docs/MIGRATION_GUIDE.md)** - Old vs new architecture
- **[Mobile Optimization](docs/MOBILE_OPTIMIZATION.md)** - Responsive design details
- **[Easter Eggs](docs/EASTER_EGGS.md)** - Hidden features & fun modes
- **[Upgrades](docs/UPGRADES.md)** - Future enhancement ideas
- **[Project Summary](docs/PROJECT_SUMMARY.md)** - Development overview

## 🏗️ Project Structure

```
impostor/
├── app.py              # Flask application
├── config.py           # Configuration
├── requirements.txt    # Python dependencies
├── data/
│   └── words.csv      # Word dictionary
├── static/
│   ├── css/           # Styles
│   └── js/            # Modular JavaScript
├── templates/         # Jinja templates
├── utils/             # Python utilities
├── docs/              # Documentation
└── legacy/            # Old files (archived)
```

## 🛠️ Tech Stack

- **Backend**: Flask 3.0
- **Frontend**: Jinja2 + Vanilla JS
- **Styling**: TailwindCSS + Custom CSS
- **Data**: CSV files
- **Icons**: Font Awesome

## 📱 Mobile Support

Fully responsive design with:
- Touch-friendly 44px+ buttons
- Mobile-first CSS
- Optimized layouts for all screen sizes

## 🤝 Contributing

This is a personal project, but feel free to fork and customize!

## � Credits

**Original Game Design & Code**: Zander V.

This project is a refactored and enhanced version of the original Imposter game created by Zander V.

## �📄 License

MIT License - feel free to use and modify

---

**Enjoy the game!** 🎉
