const todoContainer = document.getElementById("todo-container");
const todo = document.getElementById("todo");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const todo = form.elements.todo;
  const newLi = document.createElement("LI");
  const deleteBtn = document.createElement("button");
  const completeBtn = document.createElement("button");

  if (todo.value !== "") {
    document.querySelector("small").hidden = true;
    completeBtn.classList.add("bg-success");
    completeBtn.classList.add("complete");
    completeBtn.innerHTML = '<i class="far fa-check-circle"></i>';
    completeBtn.addEventListener("click", function (e) {
      newLi.classList.toggle("line");
    });

    deleteBtn.classList.add("bg-danger");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    deleteBtn.addEventListener("click", function (e) {
      newLi.remove();
    });

    newLi.classList += "list-group-item";
    newLi.append(deleteBtn, completeBtn, todo.value);
    todoContainer.append(newLi);
    todo.value = "";
  } else {
    document.querySelector("small").hidden = false;
  }
});
