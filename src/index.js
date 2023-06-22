document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = e.target.elements['new-task-description'].value;
    newTask(value);
    e.target.reset();
  });

  function newTask(value) {
    const p = document.createElement('p');
    p.textContent = value;
    document.querySelector('#tasks').appendChild(p);
  }
  document.getElementById('delete')
  button.addEventListener('click',(task)=>{
    task.target.parentNode.remove()
  })

});

