//your JS code here. If required.
function submitForm() {
    // Retrieve form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;

    // Construct the alert message with proper spacing
    const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`;

    // Display the alert message
    alert(alertMessage);
}