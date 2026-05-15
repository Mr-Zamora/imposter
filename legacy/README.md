# Legacy Files

This folder contains the original implementation files that have been replaced by the new Flask architecture.

## 📁 Files

### **imposter-game.html** (29KB)
- Original monolithic HTML file
- Contains all game logic, UI, and styles in one file
- 590 lines of mixed HTML/CSS/JavaScript
- **Replaced by**: Modular Flask app with Jinja templates

### **word-dictionary.js** (32KB)
- JavaScript object with 550+ words
- Hard to edit without coding knowledge
- **Replaced by**: `data/words.csv` (editable in Excel)

### **test_randomness.html**
- Testing tool for role assignment randomness
- Runs 1000 simulated games
- **Purpose**: Verify Fisher-Yates shuffle is unbiased

## 🔄 Why These Were Replaced

### **Problems with Old Architecture:**
1. **Monolithic** - Everything in one file (hard to maintain)
2. **Not scalable** - Can't add features without breaking things
3. **Hard to edit data** - Need to code to add words
4. **No separation** - HTML/CSS/JS all mixed together
5. **No backend** - Can't add database, API, etc.

### **Benefits of New Architecture:**
1. ✅ **Modular** - Each file has one responsibility
2. ✅ **Scalable** - Easy to add new features
3. ✅ **CSV data** - Edit words in Excel/Google Sheets
4. ✅ **Separation** - Backend/Frontend/Data clearly divided
5. ✅ **API-ready** - Can build mobile apps, multiplayer, etc.

## 📊 Comparison

| Aspect | Old (Legacy) | New (Current) |
|--------|--------------|---------------|
| **Files** | 2 files | 20+ files |
| **Largest file** | 590 lines | ~200 lines |
| **Data format** | JavaScript | CSV |
| **Backend** | None | Flask |
| **Templates** | None | Jinja2 |
| **API** | None | RESTful |
| **Mobile** | Basic | Fully responsive |
| **Maintainability** | ❌ Hard | ✅ Easy |

## 🗑️ Can I Delete These?

**Yes**, but keep them for reference:
- See how the game originally worked
- Compare old vs new implementation
- Use test_randomness.html for testing
- Backup in case you need to revert

## 🔙 How to Use Legacy Version

If you want to run the old version:

```bash
# Just open the HTML file in a browser
start imposter-game.html
```

No server needed - it's completely client-side.

## 📝 Migration Notes

See `docs/MIGRATION_GUIDE.md` for detailed comparison and migration path.

---

**These files are kept for historical reference only.** Use the new Flask app for all development.
