document.getElementById("contact-form").addEventListener("submit",function(event){
    event.preventDefault();

    // Select the form element by ID
    const form = document.getElementById("contact-form");

    // Create a new FormData object from the form
    const formData = new FormData(form);

    // Reset the form fields
    this.reset();

    fetch("https://formspree.io/f/mnqkvqdy", {
      method: "POST",
      body: formData
    }).then(()=>{
      window.location.href = "https://formspree.io/f/mnqkvqdy";
    })
})
