document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskList = document.getElementById('taskList');

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(li);
  });

  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
