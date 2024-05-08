let count = 0;

const add = document.getElementById('add').addEventListener('click', function() {
        count++
        document.getElementById('counts').textContent = count;

        document.getElementById('counts').style.color = "green";
});

const subtract = document.getElementById('subtract').addEventListener('click', function() {
        if (count > 0) {
                count--

                document.getElementById('counts').textContent = count;

                document.getElementById('counts').style.color = "red";

                if (count == 0) {
                        document.getElementById('counts').style.color = "#fff";
                }
        } 
});