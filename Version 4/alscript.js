document.getElementById("leaveForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var reason = document.getElementById("reason").value;
    // Basic validation
    if (startDate === "" || endDate === "" || reason === "") {
    document.getElementById("message").innerHTML = "<p>Please fill out all fields.</p>";
    } else {
    // Send leave request data to server or perform further processing
    document.getElementById("message").innerHTML = "<p>Leave request submitted successfully!</p>";
    // Reset form
    document.getElementById("leaveForm").reset();
    }
    });