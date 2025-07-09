let handleForm=(e) =>{
  e.preventDefault(); // Prevents actual form submission
  alert("Form submitted successfully!"); // Show alert
  e.target.reset(); // Optional: clears the form after submission
}