const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML)
}

createBtn.addEventListener("click", () => { //
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";    //This line adds a CSS    class to p tag.
  inputBox.setAttribute("contenteditable", "true");  //Make the <p> tag editable by the user.
  img.src = "images/delete.png";
  inputBox.appendChild(img);  //Put the img inside the  inputBox.
  notesContainer.appendChild(inputBox);  //This line adds the entire note (with the image inside it) to the main container.
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
  else if (e.target.tagName === "p") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function () {
        updateStorage();
      }
    })
  }
})

document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})