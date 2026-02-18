 /**
     * Toggles the chat window and changes the button shape
     */
    function toggleChat() {
        const popup = document.getElementById('waPopup');
        const button = document.getElementById('waButton');
        const btnText = document.getElementById('waBtnText');

        if (popup.style.display === "none" || popup.style.display === "") {
            // Show Popup
            popup.style.display = "block";
            // Transform button to circle and hide text
            button.classList.add('is-circle');
            btnText.style.display = "none";
        } else {
            // Hide Popup
            popup.style.display = "none";
            // Transform button back to pill and show text
            button.classList.remove('is-circle');
            btnText.style.display = "inline";
        }
    }

    /**
     * Redirects user to WhatsApp with a pre-filled message
     */
    function openWhatsApp() {
        const phoneNumber = "9310304700"; // Enter your number with country code
        const widget = document.querySelector('.wa-widget-wrapper');
        const message = widget.dataset.message || "Hi! I would like to chat with you.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    }