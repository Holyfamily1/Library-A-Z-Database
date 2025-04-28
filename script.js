
document.querySelector(".collapsible").addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});

function googleLogin() {
  alert("Google Login not fully implemented here!");
}

const databaseList = document.querySelectorAll("#database-list li a");
const search = document.getElementById("search");

search.addEventListener("input", function() {
  const filter = search.value.toLowerCase();
  databaseList.forEach(link => {
    const text = link.textContent.toLowerCase();
    link.parentElement.style.display = text.includes(filter) ? "" : "none";
  });
});
