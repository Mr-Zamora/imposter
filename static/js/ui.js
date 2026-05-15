function hideAllScreens() {
    const screens = document.querySelectorAll('[data-screen]');
    screens.forEach(screen => screen.classList.add('hidden'));
}

function showScreen(screenName) {
    hideAllScreens();
    const screen = document.querySelector(`[data-screen="${screenName}"]`);
    if (screen) {
        screen.classList.remove('hidden');
    }
}

function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle('hidden');
    }
}

function setInputValue(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.value = value;
    }
}

function getInputValue(elementId) {
    const element = document.getElementById(elementId);
    return element ? element.value : '';
}

function generatePlayerInputs(container, count) {
    container.innerHTML = '';
    
    for (let i = 1; i <= count; i++) {
        const inputDiv = document.createElement('div');
        inputDiv.className = 'flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mb-3 bg-white p-3 rounded-lg';
        inputDiv.innerHTML = `
            <label class="font-semibold text-sm sm:text-base sm:w-24">Player ${i}:</label>
            <input 
                type="text" 
                id="player${i}" 
                placeholder="Enter name" 
                class="flex-1 px-3 py-2 sm:py-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none text-base"
            >
            <input 
                type="color" 
                id="color${i}" 
                value="#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}" 
                class="w-full sm:w-16 h-12 sm:h-10 rounded cursor-pointer border-2 border-gray-300"
            >
        `;
        container.appendChild(inputDiv);
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 ${
        type === 'error' ? 'bg-red-500' : 
        type === 'success' ? 'bg-green-500' : 
        'bg-blue-500'
    } text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
