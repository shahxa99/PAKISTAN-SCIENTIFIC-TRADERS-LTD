// Function to animate the counting
function animateCounters() {
    const counters = document.querySelectorAll('.count');
    const targetValues = [500, 40, 10]; // Set the target values for customers, years, and team members
    const duration = 2000; // Animation duration in milliseconds (adjust as needed)
    const increments = [];

    counters.forEach((counter, index) => {
        let currentValue = 0;
        const target = targetValues[index];
        increments[index] = Math.ceil((target / duration) * 20); // Calculate increments for all counters

        const updateCounter = () => {
            if (currentValue < target) {
                currentValue += increments[index];
                if (currentValue > target) {
                    currentValue = target;
                }
                counter.textContent = currentValue;
                setTimeout(updateCounter, 20); // Adjust the speed of the counting
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

