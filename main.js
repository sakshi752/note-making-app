const createNoteButton = document.querySelector(".create-note-btn");
const noteContainer = document.querySelector(".note-container");
let  notes=document.querySelectorAll(".input-box")

function shownotes() {
    noteContainer.innerHTML=localStorage.getItem("notes")
}
shownotes()
function updateStorage() {
    localStorage.setItem("notes",noteContainer.innerHTML)
}

createNoteButton.addEventListener("click", () => {
  // alert("i am clicked")
  let newNote = document.createElement("p");
  let img = document.createElement("img");
  newNote.className = "input-box";
  newNote.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  noteContainer.appendChild(newNote).appendChild(img);
});

noteContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.remove();
    // alert("fd")
    updateStorage()
  }
  else if (e.target.tagName==="P") {
    notes=document.querySelectorAll(".input-box")
    notes.forEach(nt=>{
        nt.onkeyup=function () {
            updateStorage()
        }
    })
  }
});

document.addEventListener("keydown",event=>{
    if (event.key==="Enter") {
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }
})