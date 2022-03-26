console.log("createPost.js is running")

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
  
    if (title && content) {

      console.log('submitting title and content');
      console.log(title);
      console.log(content);
      const response = await fetch('/api/post/addpost', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
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
    .querySelector('.postForm')
    .addEventListener('submit', loginFormHandler);