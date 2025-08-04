let generatedOtp = "";

document.getElementById("sendOtp").addEventListener("click", function() {
    let phone = document.getElementById("phone").value.trim();
    
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Generate a 6-digit OTP
    generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`Your OTP is: ${generatedOtp}`); // Simulating OTP sent to mobile

    document.getElementById("otpSection").style.display = "block";
});

document.getElementById("verifyOtp").addEventListener("click", function() {
    let enteredOtp = document.getElementById("otp").value.trim();

    if (enteredOtp === generatedOtp) {
        document.getElementById("message").innerText = "OTP Verified! You can now register.";
        document.getElementById("message").style.color = "green";
        document.getElementById("registerButton").style.display = "block";
    } else {
        document.getElementById("message").innerText = "Invalid OTP. Try again.";
        document.getElementById("message").style.color = "red";
    }
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
