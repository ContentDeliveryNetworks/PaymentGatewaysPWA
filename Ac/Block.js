        document.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });

        // Disable key combinations
        document.addEventListener('keydown', (event) => {
            // Prevent "Ctrl+U" (View Source), "Ctrl+Shift+I" (DevTools), and "Ctrl+S" (Save)
            if (
                (event.ctrlKey && ['u', 's', 'Shift'].includes(event.key.toLowerCase())) ||
                (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'i') ||
                event.key === 'F12'
            ) {
                event.preventDefault();
            }
        });

        // Disable text selection and copying
        document.addEventListener('selectstart', (event) => event.preventDefault());
        document.addEventListener('copy', (event) => {
            event.preventDefault();
        });

        // Constantly monitor for DevTools
        (function detectDevTools() {
            const devTools = /./;
            devTools.toString = function () {
                return '';
            };
            console.log('%c', devTools);
            setTimeout(detectDevTools, 1000); // Continuously check every second
        })();
