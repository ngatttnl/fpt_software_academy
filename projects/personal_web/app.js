const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const searchButton = document.getElementById("search-button");

// tạo mảng lưu trữ các công việc
let tasks = [];

// tạo một công việc mới và thêm vào danh sách
function addTask(task) {
    tasks.push(task);
    renderTasks();
}

// hiển thị danh sách công việc

function renderTasks() {
    // xóa danh sách công việc hiện tại
    taskList.innerHTML = "";

    // hiển thị danh sách công việc mới
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        // tạo phần tử li chứa thông tin công việc
        const taskItem = document.createElement("li");
        taskItem.className = "task-item";
        taskItem.innerHTML = `
  <div class="task-details">
    <input type="checkbox" ${task.completed ? "checked" : ""}>
    <span class="task-name ${task.completed ? "completed" : ""}">${task.name}</span>
  </div>
  <div class="task-actions">
    <button class="edit-button" data-id="${i}">Edit</button>
    <button class="delete-button" data-id="${i}">Delete</button>
  </div>
`;

        // thêm phần tử li vào danh sách công việc
        taskList.appendChild(taskItem);

    }
}

// tìm kiếm công việc theo tên
function searchTask(keyword) {
    const filteredTasks = tasks.filter((task) =>
        task.name.toLowerCase().includes(keyword.toLowerCase())
    );
    renderTasks(filteredTasks);
}

// thêm công việc mới
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskNameInput = document.getElementById("task-name");
    const taskName = taskNameInput.value.trim();
    if (taskName !== "") {
        const newTask = {
            id: tasks.length + 1,
            name: taskName,
            completed: false,
        };
        addTask(newTask);
        taskNameInput.value = "";
    }
});

// sửa công việc
taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-button")) {
        const taskId = event.target.getAttribute("data-id");
        const taskName = tasks[taskId].name;
        const updatedTaskName = prompt("Edit task", taskName);
        if (updatedTaskName !== null) {
            tasks[taskId].name = updatedTaskName.trim();
            renderTasks();
        }
    }
});

// xóa công việc
taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-button")) {
        const taskId = event.target.getAttribute("data-id");
        tasks.splice(taskId, 1);
        renderTasks();
    }
});

// tìm kiếm công việc
searchButton.addEventListener("click", () => {
    const keywordInput = document.getElementById("keyword");
    const keyword = keywordInput.value.trim();
    searchTask(keyword);
});