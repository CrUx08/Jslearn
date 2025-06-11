document.addEventListener('DOMContentLoaded', function() {
   const input = document.querySelector('#Taskinput');
   const submit = document.querySelector('#submit');
   submit.disabled = true;
   input.addEventListener('input',()=>{
    if (input.value.trim() === ''){
        submit.disabled = true;
       }
       else {
        submit.disabled = false;
       }
   })
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
        document.querySelector('#Taskinput').value = '';
        document.querySelector('#date').value = '';
        
    };
});
