
   
const buttons = document.querySelectorAll('.addCommentBtn');


buttons.forEach(button => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();

    const postId = await event.target.id;
  
    console.log(postId)

    let postInput = document.getElementById(`${postId}_comment`).value

    console.log(postInput);

    fetch('/api/comment/addcomment', {
      method: 'POST',
      body: JSON.stringify({postInput, postId}),
      headers: { 'Content-Type': 'application/json' }
    });

    window.location.reload();

  });
})