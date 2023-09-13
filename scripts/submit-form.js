document.getElementById("contact-form").addEventListener("submit",function(event){
    event.preventDefault();

    // Reset the form fields
    this.reset();

    // Redirect to the specified target page
    const targetPage = this.getAttribute("action");
    window.location.href = targetPage;
})
