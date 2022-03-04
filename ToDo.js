// window.onload = () => {
//   if (localStorage.getItem("taskList")) {
//     const nodeList = JSON.parse(localStorage["taskList"]);
//     let list = document.getElementById("list");
//     [...nodeList].map((element) => list.appendChild(element));
//   }
// };

const getAllNodes = () => {
  const list = document.getElementById("list");
  const nodeList = list.querySelectorAll("li");
  return [...nodeList];
};
const addTask = () => {
  const taskName = document.getElementById("taskId");

  const ele = getElement(taskName.value);
  list.appendChild(ele);
  // let childNodes = list.childNodes;
  // localStorage["taskList"] = JSON.stringify([...childNodes]);
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
  const index = getAllNodes().findIndex((element) => element === ele);

  if (index !== -1) {
    let list = document.getElementById("list");
    const nodeList = getAllNodes();
    nodeList.splice(index, 1);
    list.innerHTML = "";
    nodeList.map((element) => list.appendChild(element));
  }
};

const completeTask = (event, ele) => {
  const { checked } = event.target;
  const index = getAllNodes().findIndex((element) => element === ele);
  if (checked === true) {
    ele.style.textDecoration = "line-through";
    getAllNodes[index] = ele;
  } else {
    ele.style.textDecoration = "none";
    getAllNodes[index] = ele;
  }
  let list = document.getElementById("list");
  getAllNodes().map((element) => list.appendChild(element));
};
