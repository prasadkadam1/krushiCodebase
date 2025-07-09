let showAlert=(event)=> {
  event.preventDefault(); // Prevents actual form submission
  alert("✅ Thank you! Your policy query has been submitted.");
  return false;
}
