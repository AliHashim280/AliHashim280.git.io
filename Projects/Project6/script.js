document.querySelector('.hamburger').addEventListener('click', function () {
  // Toggle sidebar visibility
  document.querySelector('.sidebar').classList.toggle('active');
  
  // Animate the hamburger icon (optional)
  this.classList.toggle('open');
});
