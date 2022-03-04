window.onload = () => {
  if (localStorage.getItem("taskList")) {
    const nodeList = JSON.parse(localStorage["taskList"]);
    const list = document.getElementById("list");
    taskArray = [...nodeList];
    const refreshedList = nodeList.map((element) => {
      return getElement(element);
    });
    [...refreshedList].map((ele) => list.appendChild(ele));
  }
};
let taskArray = [];

const getAllNodes = () => {
  const list = document.getElementById("list");
  const nodeList = list.querySelectorAll("li");
  return [...nodeList];
};
const addTask = () => {
  const taskName = document.getElementById("taskId");
  const taskObj = { name: taskName.value, checked: false };
  taskArray.push(taskObj);
  const ele = getElement(taskObj);
  list.appendChild(ele);

  localStorage["taskList"] = JSON.stringify([...taskArray]);
  taskName.value = null;
};

const getElement = ({ name, checked }) => {
  let li = document.createElement("li");
  li.innerText = name;
  let checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = checked;
  checked
    ? (li.style.textDecoration = "line-through")
    : (li.style.textDecoration = "none");
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
  const index = getAllNodes().findIndex((element) => element === ele);

  if (index !== -1) {
    let list = document.getElementById("list");
    const nodeList = getAllNodes();
    nodeList.splice(index, 1);
    taskArray.splice(index, 1);
    list.innerHTML = "";
    nodeList.map((element) => list.appendChild(element));
    localStorage["taskList"] = JSON.stringify([...taskArray]);
  }
};

const completeTask = (event, ele) => {
  const { checked } = event.target;
  const index = getAllNodes().findIndex((element) => element === ele);
  if (checked === true) {
    ele.style.textDecoration = "line-through";
    getAllNodes[index] = ele;
    taskArray[index].checked = true;
  } else {
    ele.style.textDecoration = "none";
    getAllNodes[index] = ele;
    taskArray[index].checked = false;
  }
  let list = document.getElementById("list");
  getAllNodes().map((element) => list.appendChild(element));
  localStorage["taskList"] = JSON.stringify([...taskArray]);
};
