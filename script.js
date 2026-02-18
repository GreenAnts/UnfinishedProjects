document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    
    // Custom personable greetings
    if (hour < 12) greeting.textContent = "Morning in the workshop.";
    else if (hour < 18) greeting.textContent = "Afternoon in the workshop.";
    else greeting.textContent = "Late night tinkering.";

    // Smooth reveal for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        card.style.transform = "translateY(10px)";
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, 150 * (i + 1));
    });
});