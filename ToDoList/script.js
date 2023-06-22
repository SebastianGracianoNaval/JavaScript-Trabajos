// Seleccionar elementos del DOM
const input = document.querySelector('.input');
const addButton = document.querySelector('.boton-agregar');
const taskList = document.querySelector('.task-list');

// Función para crear un nuevo elemento de tarea
function createTaskElement(taskText) {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('item');

  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.classList.add('item-input');
  taskInput.value = taskText;
  taskInput.disabled = true;

  const editButton = document.createElement('button');
  editButton.classList.add('boton-editar');
  editButton.innerHTML = '🔒';

  const removeButton = document.createElement('button');
  removeButton.classList.add('boton-remover');
  removeButton.innerHTML = '🗑️';

  taskDiv.appendChild(taskInput);
  taskDiv.appendChild(editButton);
  taskDiv.appendChild(removeButton);

  return taskDiv;
}

// Función para agregar una nueva tarea a la lista
function addTask() {
  const taskText = input.value;

  if (taskText.trim() !== '') {
    const taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);
    input.value = '';

    // Agregar eventos de clic para editar y eliminar
    const editButton = taskElement.querySelector('.boton-editar');
    const removeButton = taskElement.querySelector('.boton-remover');

    editButton.addEventListener('click', toggleEdit);
    removeButton.addEventListener('click', removeTask);
  }
}

// Función para eliminar una tarea
function removeTask(event) {
  const taskItem = event.target.parentNode;
  taskList.removeChild(taskItem);
}

// Función para habilitar/deshabilitar la edición de una tarea
function toggleEdit(event) {
  const taskInput = event.target.parentNode.querySelector('.item-input');
  taskInput.disabled = !taskInput.disabled;
}

// Agregar evento de clic al botón "Agregar"
addButton.addEventListener('click', addTask);
