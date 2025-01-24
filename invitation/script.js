document.addEventListener('DOMContentLoaded', () => {
    const rsvpButton = document.querySelector('.rsvp-button');
    rsvpButton.addEventListener('click', () => {
        alert('its made by aldemar osorio');
    });

    const countdownElement = document.querySelector('.countdown');
    function updateCountdown() {
        const eventDate = new Date('2025-03-15T19:00:00');
        const now = new Date();
        const timeLeft = eventDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownElement.textContent = "The event has started!";
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    const lightsContainer = document.querySelector('.lights');
    for (let i = 0; i < 50; i++) {
        const light = document.createElement('div');
        light.className = 'light';
        light.style.width = `${Math.random() * 10 + 10}px`;
        light.style.height = light.style.width;
        light.style.left = `${Math.random() * 100}vw`;
        light.style.animationDelay = `${Math.random() * 10}s`;
        lightsContainer.appendChild(light);
    }
});