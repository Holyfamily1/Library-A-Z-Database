// Collapsible functionality
document.querySelectorAll('.collapsible').forEach(button => {
  button.addEventListener('click', function() {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

// Search function
document.getElementById("search").addEventListener("keyup", function() {
  let filter = this.value.toUpperCase();
  let listItems = document.querySelectorAll("#database-list li");

  listItems.forEach(item => {
    let text = item.textContent || item.innerText;
    item.style.display = text.toUpperCase().indexOf(filter) > -1 ? "" : "none";
  });
});
