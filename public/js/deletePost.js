const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const id = document.querySelector('#id').value.trim();
  
    if (id) {
      const response = await fetch('/api/blog/deleteblog', {
        method: 'POST',
        body: JSON.stringify({ id }),
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