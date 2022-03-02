const taskArray = [];

const addTask = () => {
  const taskName = document.getElementById("taskId");
  let list = document.getElementById("list");
  const ele = getElement(taskName.value);
  taskArray.push(ele);
  list.appendChild(ele);
  taskName.value = null;
};

const getElement = (taskName) => {
  let li = document.createElement("li");
  li.innerText = taskName;
  let checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  checkbox.onchange = (event) => completeTask(event, li);
  let deleteButton = document.createElement("INPUT");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "Delete");
  deleteButton.onclick = (event) => deleteTask(event, li);
  li.appendChild(checkbox);
  li.appendChild(deleteButton);
  return li;
};

const deleteTask = (_event, ele) => {
  const index = taskArray.findIndex((element) => element === ele);
  taskArray.splice(index, 1);
  let list = document.getElementById("list");
  taskArray.map((element) => list.appendChild(element));
};

const completeTask = (event, ele) => {
  const { checked } = event.target;
  const index = taskArray.findIndex((element) => element === ele);
  if (checked === true) {
    ele.style.textDecoration = "line-through";
    taskArray[index] = ele;
  } else {
    ele.style.textDecoration = "none";
    taskArray[index] = ele;
  }
  let list = document.getElementById("list");
  taskArray.map((element) => list.appendChild(element));
};
