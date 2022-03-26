const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const id = document.querySelector('#id').value.trim();
    const content = document.querySelector('#content').value.trim();
  
    if (id && content) {

      const response = await fetch('/api/blog/updateblog', {
        method: 'POST',
        body: JSON.stringify({ id, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to submit');
      }
    }
  };
  



  document
    .querySelector('.blogForm')
    .addEventListener('submit', loginFormHandler);