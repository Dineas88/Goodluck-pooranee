// Function to reveal the surprise message
function revealSurprise() {
    const surpriseElement = document.getElementById('surprise');
    surpriseElement.style.display = 'block'; // Show the hidden surprise message
}

// Set exam start and end times
const examStartTime = new Date("November 22, 2024 09:00:00").getTime();
const examEndTime = new Date("November 22, 2024 10:00:00").getTime();
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();

    if (now < examStartTime) {
        // Countdown to the exam start time
        const timeLeft = examStartTime - now;
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `⏳ Time until exam starts: ${hours}h ${minutes}m ${seconds}s`;
    } else if (now >= examStartTime && now <= examEndTime) {
        // During the exam
        const timeLeft = examEndTime - now;
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `📖 Exam in progress! Time left: ${minutes}m ${seconds}s`;
    } else {
        // After the exam ends
        countdownElement.innerHTML = "🎉 The exam is over! Relax now! 🎉";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
