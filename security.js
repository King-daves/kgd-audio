/**
 * TEXTKING Security & Optimization Engine
 * Version: 1.2 Pro
 */

// 1. Disable Right Click (To prevent Inspect Element)
document.addEventListener('contextmenu', (e) => {
    // Pinapayagan pa rin natin ang right-click sa loob ng textarea para sa spellcheck/native tools
    if (e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
    }
});

// 2. Disable Common DevTools Shortcuts
document.addEventListener('keydown', (e) => {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'u')
    ) {
        e.preventDefault();
        return false;
    }
});

// 3. Simple Anti-Debugger (Optional: Nagpapabagal sa mga nag-i-inspect)
/*
setInterval(() => {
    debugger;
}, 3000);
*/

// 4. Console Brighter Branding (Professional Look sa DevTools)
console.log(
    '%c TEXTKING PRO %c SECURE SESSION ACTIVE ',
    'background: #eab308; color: #000; font-weight: bold; border-radius: 3px 0 0 3px; padding: 2px 5px;',
    'background: #262626; color: #eab308; font-weight: bold; border-radius: 0 3px 3px 0; padding: 2px 5px;'
);

// 5. Prevent Drag and Drop of sensitive UI elements
document.querySelectorAll('img, a').forEach(el => {
    el.addEventListener('dragstart', (e) => e.preventDefault());
});

// 6. XSS Protection (Basic sanitization indicator)
window.TEXTKING_SECURE = true;
