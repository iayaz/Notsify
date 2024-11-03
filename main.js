showModal = () => {
  let modal = document.getElementById("notes-info");
  modal.hidden = !modal.hidden;
};

createNotes = () => {
  let inputElem = document.getElementById("data-notes");

  let notesText = inputElem.value;
  inputElem.value = "";
  showModal();
  addToContainer(notesText);
};

addToContainer = (notesText) => {
  let contaierElem = document.getElementById("notes-cont");
  let newNote = document.createElement("div");
  newNote.innerHTML = `<div class="bg-yellow-100 h-48 w-48 rounded-md p-2">
                            <div class="flex justify-end">
                                <button class="rounded-full bg-red-600 mb-2 w-6 h-6" onclick=removeNote(this)>x</button>
                            </div>
                        <p class="p-2">${notesText}</p>
                        </div>`;
  contaierElem.prepend(newNote);
};

removeNote = (button) => {
  let noteDiv = button.closest("div").parentNode;
  console.dir(noteDiv)
  noteDiv.parentNode.remove();
};
