document.getElementById("addButton").addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.className = "item";
    newItem.textContent = "New Item";
    document.getElementById("myList").appendChild(newItem);
  });
  
  document.getElementById("myList").addEventListener("click", (event) => {
    if (event.target.classList.contains("item")) {
      event.target.remove();
    }
  });
  