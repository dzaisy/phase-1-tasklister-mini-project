document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  taskForm.addEventListener('submit', e => {
    e.preventDefault();
    const taskInput = document.getElementById('new-task-description');
    const taskDes = taskInput.value;
    const list = document.createElement('li');
    list.textContent = taskDes;
    taskList.appendChild(list);
    taskInput.value = '';
    taskList.addEventListener('click', () => {
      list.remove();
    });
  })
});
