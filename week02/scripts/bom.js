window.addEventListener('DOMContentLoaded', (event) => {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('#addButton');
    const list = document.querySelector('#list');
  
    function addChapter() {
      if (input.value.trim() !== "") {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.appendChild(deleteButton);
        list.appendChild(li);
        
        deleteButton.addEventListener("click", function () {
          list.removeChild(li);
          input.focus();
        });
  
        input.value = '';
      }
      input.focus();
    }
  
    button.addEventListener('click', addChapter);
  
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        addChapter();
      }
    });
  });