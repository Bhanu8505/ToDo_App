function addTask(columnId){
    const input = document.getElementById(`${columnId}--input`);
    const taskText = input.value;

    if(taskText===""){
        return;
    }

    const taskElement = createTaskElement(taskText);
    document.getElementById(`${columnId}--task`).appendChild(taskElement);
}

function createTaskElement(taskText){
    const taskElement = document.createElement("div");
    taskElement.textContent = taskText;
    return taskElement;
}