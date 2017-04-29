const  taskList = [];

addItem = () => {
  const task = document.getElementById('todoInput').value;
  const ul = document.getElementById('myUl');

  if(task.trim().length === 0) {
    return false;
  }
  else {

    if(taskList.length < 5) {
      taskList.push(task);

      const li = document.createElement("li");
      const text = document.createTextNode(task);

      const checkMark = document.createElement("button");
      checkMark.innerHTML = "&check;";
      checkMark.className = "listItemButton";
      checkMark.setAttribute("onclick", "checkMe(this)");

      const crossMark = document.createElement("button");
      crossMark.innerHTML = "&#x2715;";
      crossMark.className = "listItemButton";
      crossMark.setAttribute("onclick", "removeMe(this)");

      li.appendChild(text);
      li.appendChild(checkMark);
      li.appendChild(crossMark);
      ul.appendChild(li);
      reset();
    }

  }

}

reset = () => {
  document.getElementById("todoInput").value = "";
}

checkMe = (item) => {
  const liTag = item.parentElement;
  liTag.style.textDecoration = (liTag.style.textDecoration === "line-through") ? "none" : "line-through";
  //pareil que liTag.style.textDecoration = (liTag.style.textDecoration === "") ? "line-through" : "";
}

removeMe = (item) => {
  const liTag = item.parentElement;
  const ulTag = liTag.parentElement;
  ulTag.removeChild(liTag);
  taskList.pop();
}

enterKey = () => {
  const input = document.getElementById('todoInput');
  input.onkeyup = (key) => {
    key.keyCode === 13 ? addItem() : "";
    }
}
enterKey();

clearList = () => {
  const ul = document.getElementById('myUl');
  ul.innerHTML = "";
  taskList.splice(0, taskList.length);
}
