document.getElementById("submit-button").addEventListener("click", handleFormSubmission);
document.getElementById("submit-button").addEventListener("touchstart", handleFormSubmission);

function handleFormSubmission(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Select the form element by ID and create FormData object from it
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);

    // Submit the form data to Formspree using fetch
    fetch("https://formspree.io/f/mnqkvqdy", {
        method: "POST",
        body: formData
    })
    .then(response => {
        // Handle the response from Formspree if needed
        if (response.ok) {
            // Form submitted successfully
            showSnackBar("snackbar-success");
        } else {
            // Form submission failed
            showSnackBar("snackbar-fail");
        }
        
        // Reset the input fields
        document.getElementById("first").value = "";
        document.getElementById("last").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error("Error:", error);
    });
}

function showSnackBar(name) {
    var x = document.getElementById(name);
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
