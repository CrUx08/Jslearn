document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = (event) => {
        event.preventDefault();
        const task = document.querySelector('#Taskinput').value;
        const time = document.querySelector('#date').value;
        console.log(time)
        console.log(task)
        
        const tasks = document.createElement('li');
        const tasktime = document.createElement('label');
        tasks.innerHTML = task;
        tasktime.innerHTML = time;
        
        document.querySelector('#tasklist').append(tasks)
        document.querySelector('#tasklist').append(tasktime)
        document.querySelector('#Taskinput').value = '';
        document.querySelector('#date').value = '';

    };
});
