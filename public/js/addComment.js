const buttons = document.querySelectorAll('.addCommentBtn');


buttons.forEach(button => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();

    const blogId = await event.target.id;
  
    console.log(blogId)

    let blogInput = document.getElementById(`${blogId}_comment`).value

    console.log(blogInput);

    fetch('/api/comment/addcomment', {
      method: 'POST',
      body: JSON.stringify({blogInput, blogId}),
      headers: { 'Content-Type': 'application/json' }
    });

    window.location.reload();

  });
})