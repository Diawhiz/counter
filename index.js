// Initialize the count variable to track the number of clicks
let count = 0;

// Add an event listener to the 'add' button that increments the count and updates the display
const add = document.getElementById('add').addEventListener('click', function() {
    // Increment the count by 1
    count++;
    
    // Update the text content of the element with id 'counts' to show the current count
    document.getElementById('counts').textContent = count;

    // Change the text color of the element with id 'counts' to green
    document.getElementById('counts').style.color = "green";
});

// Add an event listener to the 'subtract' button that decrements the count and updates the display
const subtract = document.getElementById('subtract').addEventListener('click', function() {
    // Ensure the count does not go below 0
    if (count > 0) {
        // Decrement the count by 1
        count--;

        // Update the text content of the element with id 'counts' to show the current count
        document.getElementById('counts').textContent = count;

        // Change the text color of the element with id 'counts' to red
        document.getElementById('counts').style.color = "red";

        // If the count is exactly 0, change the text color to white (or another color of your choice)
        if (count == 0) {
            document.getElementById('counts').style.color = "#fff";
        }
    } 
});
