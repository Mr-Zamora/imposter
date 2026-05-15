# Easter Eggs & Hidden Features

## 🎭 All Imposter Mode

### **What It Does**
10% chance that ALL players become imposters - chaos mode!

### **How to Enable**
Add this code to `static/js/roleAssignment.js` in the `assignRoles` function, right after line 11:

```javascript
function assignRoles(players, imposterCount, jesterCount) {
    const playersCopy = players.map(p => ({...p, role: 'crewmate'}));
    
    // ADD THIS BLOCK:
    const allImposterMode = Math.random() < 0.1;
    
    if (allImposterMode) {
        playersCopy.forEach(p => p.role = 'imposter');
        console.log("🎭 ALL IMPOSTER MODE ACTIVATED!");
        return playersCopy;
    }
    // END OF BLOCK
    
    const indices = shuffleArray([...Array(players.length).keys()]);
    let roleIndex = 0;
    
    for (let i = 0; i < imposterCount; i++) {
        playersCopy[indices[roleIndex++]].role = 'imposter';
    }
    
    for (let i = 0; i < jesterCount; i++) {
        playersCopy[indices[roleIndex++]].role = 'jester';
    }
    
    return playersCopy;
}
```

### **Full Code Block to Insert**
Insert between line 11 and line 13 in `roleAssignment.js`:

```javascript
const allImposterMode = Math.random() < 0.1;

if (allImposterMode) {
    playersCopy.forEach(p => p.role = 'imposter');
    console.log("🎭 ALL IMPOSTER MODE ACTIVATED!");
    return playersCopy;
}
```

### **Customization Options**

#### **Change Probability**
```javascript
// 10% chance (default)
const allImposterMode = Math.random() < 0.1;

// 1% chance (rare)
const allImposterMode = Math.random() < 0.01;

// 25% chance (frequent)
const allImposterMode = Math.random() < 0.25;

// 50% chance (chaos!)
const allImposterMode = Math.random() < 0.5;
```

#### **Add Notification**
Show a visual alert when it happens:

```javascript
if (allImposterMode) {
    playersCopy.forEach(p => p.role = 'imposter');
    console.log("🎭 ALL IMPOSTER MODE ACTIVATED!");
    
    // Add visual notification
    showNotification("🎭 SURPRISE! Everyone is an imposter!", "info");
    
    return playersCopy;
}
```

### **Why It's Fun**
- Unexpected twist keeps game fresh
- Players realize during discussion that something's wrong
- Creates hilarious moments when everyone's lying
- Great for experienced groups who know the game well

---

## 💡 Other Easter Egg Ideas

### **1. All Jester Mode**
Everyone tries to get voted out:

```javascript
const allJesterMode = Math.random() < 0.05; // 5% chance

if (allJesterMode) {
    playersCopy.forEach(p => p.role = 'jester');
    console.log("🃏 ALL JESTER MODE ACTIVATED!");
    return playersCopy;
}
```

### **2. No Imposters Mode**
Everyone's a crewmate with the word:

```javascript
const peacefulMode = Math.random() < 0.05; // 5% chance

if (peacefulMode) {
    // Everyone stays as crewmate (default)
    console.log("☮️ PEACEFUL MODE - No imposters!");
    return playersCopy;
}
```

### **3. Swap Roles Mid-Game**
Add a button in reveal screen to randomly swap 2 players' roles after assignment.

### **4. Secret Word Scramble**
Randomly scramble letters in the secret word for jesters:

```javascript
case 'partial':
    const scrambled = secretWord.split('').sort(() => Math.random() - 0.5).join('');
    return `Scrambled: ${scrambled}`;
```

### **5. Bonus Role: Detective**
One crewmate gets to see one other player's role:

```javascript
// After assigning roles, pick one crewmate as detective
const crewmates = playersCopy.filter(p => p.role === 'crewmate');
if (crewmates.length > 0) {
    const detective = crewmates[Math.floor(Math.random() * crewmates.length)];
    detective.role = 'detective';
    detective.specialInfo = 'You can see one other player\'s role!';
}
```

---

## 🎲 Random Events

### **Word Category Mismatch**
5% chance the secret word doesn't match the selected category:

```javascript
// In wordManager.js
async getRandomWord(category) {
    const mismatch = Math.random() < 0.05;
    
    if (mismatch && category) {
        // Pick from a different category
        const categories = await this.getCategories();
        const otherCategories = categories.filter(c => c !== category);
        const randomCategory = otherCategories[Math.floor(Math.random() * otherCategories.length)];
        category = randomCategory;
        console.log("🎲 MISMATCH MODE - Word from different category!");
    }
    
    // ... rest of function
}
```

---

## 🔧 How to Test Easter Eggs

### **Force Trigger (for testing)**
Replace random chance with always true:

```javascript
// Testing mode - always trigger
const allImposterMode = true; // Math.random() < 0.1;
```

### **Console Logging**
Check browser console (F12) to see when easter eggs activate.

### **Probability Calculator**
With 10% chance:
- 1 in 10 games will trigger
- Play ~7 games to have 50% chance of seeing it
- Play ~22 games to have 90% chance of seeing it

---

## 📝 Notes

- Easter eggs should be rare to maintain surprise
- Always log to console when they activate
- Consider adding a "Chaos Mode" toggle in settings
- Test thoroughly before deploying to production
- Document all easter eggs for future reference

**Have fun experimenting!** 🎉
