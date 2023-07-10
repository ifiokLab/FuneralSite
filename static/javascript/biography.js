function show_event(){
  document.getElementById('event-container').style.display = 'block';

}

document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader-wrapper");
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 2000);
});



function m_show_event(){
  document.getElementById('m-event-container').style.display = 'block';
}


function m_hide_event(){
  document.getElementById('m-event-container').style.display = 'none';

}
function hide_event(){
  document.getElementById('event-container').style.display = 'none';

}


function share_clip(){
  const textToCopy = document.getElementById('copy-text-b').innerHTML;
  navigator.clipboard.writeText(textToCopy)
  .then(() => {
      console.log("Text copied to clipboard successfully");
      document.getElementById('copied-b').style.display = 'block';
      console.log(document.getElementById('copied-b').style.display = 'block');
      setTimeout(function() {
          document.getElementById('copied-b').style.display = 'none';
      }, 1000);
  })
  .catch((error) => {
      console.error("Error copying text to clipboard: ", error);
  });
}

document.getElementById('clip-board-b').addEventListener('click',()=>{
  const textToCopy = document.getElementById('copy-text-b').innerHTML;

  navigator.clipboard.writeText(textToCopy)
  .then(() => {
      console.log("Text copied to clipboard successfully");
      document.getElementById('copied-b').style.display = 'block';
      setTimeout(function() {
          document.getElementById('copied-b').style.display = 'none';
      }, 1000);
  })
  .catch((error) => {
      console.error("Error copying text to clipboard: ", error);
  });
});

document.getElementById('share-container').addEventListener('click',(event)=>{
  if(event.target.className == 'share-container'){
      document.getElementById('share-container').style.display = 'none';
  }

})


function close_share(){
  document.getElementById('share-container').style.display = 'none';
}



document.querySelectorAll('.share-btn').forEach(button => {
  button.addEventListener('click', event => {

    document.getElementById('share-container').style.display = 'flex';
  });
});


function share_whatsapp(fname,lname,month,year,url){

  const message = `Please help us honor the life of ${fname} ${lname}, who passed away on ${month},${year}. by visiting their memorial. ${url} #memorial #restinpeace`;
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

  window.open(shareUrl, "_blank");
}

function share_messenger(fname,lname,month,year,url){
  const message = `Please help us honor the life of ${fname} ${lname}, who passed away on ${month},${year}. by visiting their memorial. ${url} #memorial #restinpeace`;
  const shareUrl = `fb-messenger://share/?link=${encodeURIComponent(window.location.href)}&app_id=${encodeURIComponent('futurism.pythonanywhere.com')}&quote=${encodeURIComponent(message)}`;

  window.open(shareUrl, "_blank");
}


function share_facebook(fname,lname,month,year,url){
  const message = `Please help us honor the life of ${fname} ${lname}, who passed away on ${month},${year}. by visiting their memorial. ${url} #memorial #restinpeace`;
  const shareUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(message)}`;

  window.open(shareUrl, "_blank");
}


function share_twitter(fname,lname,month,year,url){
  const message = `Please help us honor the life of ${fname} ${lname}, who passed away on ${month},${year}. by visiting their memorial. ${url} #memorial #restinpeace`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;

  window.open(shareUrl, "_blank");
}


function share_mail(fname,lname,month,year,url){
  const message = `Please help us honor the life of ${fname} ${lname}, who passed away on ${month},${year}. by visiting their memorial. ${url} #memorial #restinpeace`;

  const subject = `Memorial for ${fname} ${lname}`;

  // Define the email address to send to
  const emailAddress = "ifiokudoh77@gmail.com";
  const shareUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0D%0A%0D%0A${encodeURIComponent(window.location.href)}`;

  window.open(shareUrl, "_blank");
}






function profile(){
    var element = document.getElementById('profile-card');
    var modal = document.getElementById('profile-modal');
    modal.classList.toggle('show');
    element.classList.toggle('show');


}

function show_invite(){
  var element  = document.getElementById('invite-container');
  element.style.display = 'flex';
}

function close_invite(){
  document.getElementById('invite-container').style.display = 'none';
}
document.getElementById('invite-container').addEventListener('click',(event)=>{
  //document.getElementById('invite-container').style.display = 'none';
  if(event.target.className === 'invite-container') {
      document.getElementById('invite-container').style.display = 'none';
    }
});



document.getElementById('clip-board').addEventListener('click',()=>{
  const textToCopy = document.getElementById('copy-text').innerHTML;

  navigator.clipboard.writeText(textToCopy)
  .then(() => {

      document.getElementById('copied').style.display = 'block';
      setTimeout(function() {
          document.getElementById('copied').style.display = 'none';
      }, 1000);
  })
  .catch((error) => {
      console.error("Error copying text to clipboard: ", error);
  });
})


function profile_modal(){
    var element = document.getElementById('profile-card');
    var element2 = document.getElementById('m-profile-card');
    element.classList.remove('show');
    element2.classList.remove('show');
    var modal = document.getElementById('profile-modal');
    modal.classList.remove('show');
}

function mprofile(){
    var element = document.getElementById('m-profile-card');
    var modal = document.getElementById('profile-modal');
    modal.classList.toggle('show');
    element.classList.toggle('show');
}

function notification(event){
    var element = document.getElementById('notification-wrapper');
    element.classList.toggle('show');


}

function close_not(event){
    var element = document.getElementById('notification-wrapper');
    if(event.target.className === 'notification-wrapper show') {
        element.classList.remove('show');
      }
}





function editcontainer(){
  var edit = document.getElementById('edit-container');
  edit.classList.add('show');
}

function m_editcontainer(event){

  const x = event.clientX;
  const y = event.clientY;
  var edit = document.getElementById('edit-container');
  edit.style.top = `${y+50}px` ;
  edit.classList.add('show');
}



function cancel_edit(){
    var edit = document.getElementById('edit-container');
    edit.classList.remove('show');
}


var messages = document.getElementById('messages');

// Check if the notification element exists
if (messages) {
  // Show the notification message
  //messages.innerHTML = "{{ messages }}";
  messages.style.display = 'block';

  // Set a timer to hide the notification message
  setTimeout(function() {
    messages.style.display = 'none';
  }, 3000);
}







//function show_comment(){
  //var element  =  document.getElementById('comment-container');
  //element.classList.add('show');
//}

function hide_comment(){
  var element  =  document.getElementById('comment-container');
  element.classList.remove('show');
}

function m_hide_comment(){
  var element  =  document.getElementById('m-comment-container');
  element.classList.remove('show');
}


function m_tribute_comment(){
  var element  =  document.getElementById('m-tribute-container');
  element.classList.remove('show');
}

function tribute_comment(){
  var element  =  document.getElementById('tribute-container');
  element.classList.remove('show');
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function currentDiv(n) {
showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";

  }
  x[slideIndex-1].style.display = "block";
  if(x[slideIndex-1].style.display == "block"){
    if(slideIndex>1 && slideIndex<x.length){
      var photoId = x[slideIndex-1].querySelector('input').value;
      var element  =  document.getElementById('comment-container');
      //element.classList.add('show');
      if(element.classList.contains('show')){
        const url = `/photos/${photoId}/comments/`;




          fetch(url)
          .then(response => response.json())
          .then(comments_data => {
            const container = document.querySelector('.comment-box');
            container.innerHTML = '';

            comments_data.forEach(comment => {
              const comment_card = document.createElement('div');
              const card1 = document.createElement('div');
              card1.classList.add('card1');
              const box1 = document.createElement('div');
              const box2 = document.createElement('div');
              box1.classList.add('box1');
              box2.classList.add('box2');
              box2.setAttribute('data-comment-id',`${comment.comment_id}`);
              //box2.classList.add('elipsis');

              if(comment.comment_by == comment.login_user){
                box2.classList.add('elipsis');
              }
              else{
                box2.classList.add('elipsis-X');

              }
              const ellipsis = document.createElement('i');
              ellipsis.classList.add('fa-solid');
              ellipsis.classList.add('fa-ellipsis');
              const initials = document.createElement('div');
              initials.classList.add('icon');
              initials.innerHTML =  `${comment.first_name[0]} ${comment.last_name[0]}`;
              const user_box = document.createElement('div');
              user_box.classList.add('user-box');
              const user_name = document.createElement('div');
              user_name.classList.add('name');
              user_name.innerHTML = `${comment.first_name} ${comment.last_name}`;
              const time = document.createElement('time');
              time.classList.add('time');

              const dateString = `${comment.date}`;
              const dateObject = new Date(dateString);
              const formattedDate = dateObject.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
              });
              time.innerHTML = `${formattedDate}`;
              //append
              box2.appendChild(ellipsis);
              user_box.appendChild(user_name);
              user_box.appendChild(time);
              box1.appendChild(initials);
              box1.appendChild(user_box);
              card1.appendChild(box1);
              card1.appendChild(box2);



              const card2 = document.createElement('div');
              card2.classList.add('card2');
              const text = document.createElement('div');
              text.classList.add('text');
              text.textContent= `${comment.text}`;
              card2.appendChild(text);


              const card3 = document.createElement('div');
              card3.classList.add('delete-card');
              const icon = document.createElement('div');
              icon.classList.add('icon');
              card3.setAttribute('id',`icon${comment.comment_id}`);
              card3.setAttribute('data-delete-id',`${comment.comment_id}`);
              const fa_trash = document.createElement('i');
              fa_trash.classList.add('fa-solid');
              fa_trash.classList.add('fa-trash');
              const del_text = document.createElement('div');
              del_text.classList.add('text');
              if(comment.comment_by == comment.login_user){
                del_text.innerHTML = 'Delete';
              }
              else{
                del_text.innerHTML = "can't delete"
              }
              //del_text.innerHTML = 'Delete';
              //append
              icon.appendChild(fa_trash);
              card3.appendChild(icon);
              card3.appendChild(del_text);

              //append event to delete icon




              //end append





              comment_card.appendChild(card1);
              comment_card.appendChild(card2);
              comment_card.appendChild(card3);
              comment_card.classList.add('comment-card');

              container.appendChild(comment_card);
            });

            const deleteBtns = document.querySelectorAll('.elipsis');
            //let delete_box = document.getElementById(`icon${comment.comment_id}`);
            deleteBtns.forEach(btn => {
              //console.log('hhr',btn);
             btn.addEventListener('click', () => {
                const commentId = btn.getAttribute('data-comment-id');
                let parent_card = btn.closest('.comment-card').querySelector('.delete-card');
                parent_card.style.display = 'flex';
                if(parent_card.style.display == 'flex'){
                  document.getElementById('comment-modal').style.display = 'block';
                  document.getElementById('comment-modal').addEventListener('click',()=>{
                    parent_card.style.display='none';
                    document.getElementById('comment-modal').style.display = 'none';
                  });

                  //add event to delete btn
                  const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                  parent_card.addEventListener('click',()=>{
                    fetch(`/delete-comment/${commentId}/`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken,
                      },
                    })
                      .then(response => {
                        if (response.ok) {
                          // Remove the comment element from the DOM
                          //const commentEl = btn.closest('.comment');

                          //commentEl.remove();
                          btn.closest('.comment-card').remove();
                          document.getElementById('comment-modal').style.display = 'none';

                        } else {
                          throw new Error('Failed to delete comment.');
                        }
                      })
                      .catch(error => console.error(error));
                  });

                }




              });
            });

            const deleteBtns_X = document.querySelectorAll('.elipsis-X');
            //let delete_box = document.getElementById(`icon${comment.comment_id}`);
            deleteBtns_X.forEach(btn => {
              //console.log('hhr',btn);
            btn.addEventListener('click', () => {
                const commentId = btn.getAttribute('data-comment-id');
                let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

              parent_card.style.display = 'flex';
                if(parent_card.style.display == 'flex'){
                  document.getElementById('comment-modal').style.display = 'block';
                  document.getElementById('comment-modal').addEventListener('click',()=>{
                    parent_card.style.display='none';
                    document.getElementById('comment-modal').style.display = 'none';
                  });
                }
            });

          });

          });
      }
      const like_url = `/like-list/${photoId}/`;
      fetch(like_url)
      .then(response => response.json())
      .then(data => {
        var likeCount = x[slideIndex-1].querySelector('.num');
        var btn = x[slideIndex-1].querySelector('.like-btn');

        if (data.liked) {

          btn.classList.add('liked');
          //likeCount.textContent = data.count + ' likes';
          likeCount.textContent = data.count ;
        } else {
          btn.classList.remove('liked');
          likeCount.textContent = data.count ;
        }
      });
    }
    else{
      var photoId = x[slideIndex-1].querySelector('input').value;
      const like_url = `/cover-like-list/${photoId}/`;
      fetch(like_url)
      .then(response => response.json())
      .then(data => {
        var likeCount = x[slideIndex-1].querySelector('.num');
        var btn = x[slideIndex-1].querySelector('.like-cover');

        if (data.liked) {

          btn.classList.add('liked');
          //likeCount.textContent = data.count + ' likes';
          likeCount.textContent = data.count ;
        } else {
          btn.classList.remove('liked');
          likeCount.textContent = data.count ;
        }
      });
    }
  }
}






const commentForm = document.querySelector('#comment-container');

commentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  let photoId;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    if(x[i].style.display == "block"){
      photoId = x[i].querySelector('input').value;
      //console.log(x[i].querySelector('input'));
    }
  }


  //const photoId = document.querySelector('input[name="photo_id"]').value; // Get the photo ID from a hidden input field
  const commentContent = document.querySelector('textarea[name="comment_content"]').value; // Get the comment content from the textarea

  const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
  xhr.open('POST', `/add-comment/${photoId}/`); // Set up the request
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Set the request header
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  xhr.setRequestHeader('X-CSRFToken', csrftoken);

  xhr.onload = function() {
    if (xhr.status === 200) {
      setTimeout(function() {
        document.querySelector('textarea[name="comment_content"]').value = '';
        const url = `/photos/${photoId}/comments/`;

        fetch(url)
          .then(response => response.json())
          .then(comments_data => {
            const container = document.querySelector('.comment-box');
            container.innerHTML = '';

            comments_data.forEach(comment => {
              const comment_card = document.createElement('div');
              const card1 = document.createElement('div');
              card1.classList.add('card1');
              const box1 = document.createElement('div');
              const box2 = document.createElement('div');
              box1.classList.add('box1');
              box2.classList.add('box2');
              box2.setAttribute('data-comment-id',`${comment.comment_id}`);
              //box2.classList.add('elipsis');

              if(comment.comment_by == comment.login_user){
                box2.classList.add('elipsis');
              }
              else{
                box2.classList.add('elipsis-X');

              }
              const ellipsis = document.createElement('i');
              ellipsis.classList.add('fa-solid');
              ellipsis.classList.add('fa-ellipsis');
              const initials = document.createElement('div');
              initials.classList.add('icon');
              initials.innerHTML =  `${comment.first_name[0]} ${comment.last_name[0]}`;
              const user_box = document.createElement('div');
              user_box.classList.add('user-box');
              const user_name = document.createElement('div');
              user_name.classList.add('name');
              user_name.innerHTML = `${comment.first_name} ${comment.last_name}`;
              const time = document.createElement('time');
              time.classList.add('time');

              const dateString = `${comment.date}`;
              const dateObject = new Date(dateString);
              const formattedDate = dateObject.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
              });
              time.innerHTML = `${formattedDate}`;
              //append
              box2.appendChild(ellipsis);
              user_box.appendChild(user_name);
              user_box.appendChild(time);
              box1.appendChild(initials);
              box1.appendChild(user_box);
              card1.appendChild(box1);
              card1.appendChild(box2);



              const card2 = document.createElement('div');
              card2.classList.add('card2');
              const text = document.createElement('div');
              text.classList.add('text');
              text.textContent= `${comment.text}`;
              card2.appendChild(text);


              const card3 = document.createElement('div');
              card3.classList.add('delete-card');
              const icon = document.createElement('div');
              icon.classList.add('icon');
              card3.setAttribute('id',`icon${comment.comment_id}`);
              card3.setAttribute('data-delete-id',`${comment.comment_id}`);
              const fa_trash = document.createElement('i');
              fa_trash.classList.add('fa-solid');
              fa_trash.classList.add('fa-trash');
              const del_text = document.createElement('div');
              del_text.classList.add('text');
              if(comment.comment_by == comment.login_user){
                del_text.innerHTML = 'Delete';
              }
              else{
                del_text.innerHTML = "can't delete"
              }
              //del_text.innerHTML = 'Delete';
              //append
              icon.appendChild(fa_trash);
              card3.appendChild(icon);
              card3.appendChild(del_text);

              //append event to delete icon




              //end append





              comment_card.appendChild(card1);
              comment_card.appendChild(card2);
              comment_card.appendChild(card3);
              comment_card.classList.add('comment-card');

              container.appendChild(comment_card);
            });

            const deleteBtns = document.querySelectorAll('.elipsis');
            //let delete_box = document.getElementById(`icon${comment.comment_id}`);
            deleteBtns.forEach(btn => {
              //console.log('hhr',btn);
             btn.addEventListener('click', () => {
                const commentId = btn.getAttribute('data-comment-id');
                let parent_card = btn.closest('.comment-card').querySelector('.delete-card');
                parent_card.style.display = 'flex';
                if(parent_card.style.display == 'flex'){
                  document.getElementById('comment-modal').style.display = 'block';
                  document.getElementById('comment-modal').addEventListener('click',()=>{
                    parent_card.style.display='none';
                    document.getElementById('comment-modal').style.display = 'none';
                  });

                  //add event to delete btn
                  const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                  parent_card.addEventListener('click',()=>{
                    fetch(`/delete-comment/${commentId}/`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken,
                      },
                    })
                      .then(response => {
                        if (response.ok) {
                          // Remove the comment element from the DOM
                          //const commentEl = btn.closest('.comment');

                          //commentEl.remove();
                          btn.closest('.comment-card').remove();
                          document.getElementById('comment-modal').style.display = 'none';

                        } else {
                          throw new Error('Failed to delete comment.');
                        }
                      })
                      .catch(error => console.error(error));
                  });

                }




              });
            });

            const deleteBtns_X = document.querySelectorAll('.elipsis-X');
            //let delete_box = document.getElementById(`icon${comment.comment_id}`);
            deleteBtns_X.forEach(btn => {
              //console.log('hhr',btn);
            btn.addEventListener('click', () => {
                const commentId = btn.getAttribute('data-comment-id');
                let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

              parent_card.style.display = 'flex';
                if(parent_card.style.display == 'flex'){
                  document.getElementById('comment-modal').style.display = 'block';
                  document.getElementById('comment-modal').addEventListener('click',()=>{
                    parent_card.style.display='none';
                    document.getElementById('comment-modal').style.display = 'none';
                  });
                }
            });

          });

          });
        }, 1000);
      // Request was successful
      // Update the page with the new comment
      //const commentList = document.querySelector(`#photo-${photoId} .comment-list`);
      //const newComment = document.createElement('li');
      //newComment.textContent = commentContent;
      //commentList.appendChild(newComment);

    }
    else if(xhr.status === 500){
      window.location.href = '/login/';
    }

    else {
      // Request failed

      console.error(`Server returned status ${xhr.status}`);

    }
  };

  xhr.onerror = function() {
    console.error('Request failed');
  };

  xhr.send(`comment_content=${encodeURIComponent(commentContent)}`); // Send the request with the comment content in the request body
});






document.querySelectorAll('.fetch-comments-btn').forEach(button => {
  button.addEventListener('click', event => {
    var element  =  document.getElementById('comment-container');
    element.classList.add('show');
    const photoId = event.target.getAttribute('data-photo-id');
    const url = `/photos/${photoId}/comments/`;



    fetch(url)
      .then(response => response.json())
      .then(comments_data => {
        const container = document.querySelector('.comment-box');
        container.innerHTML = '';

        comments_data.forEach(comment => {
          const comment_card = document.createElement('div');
          const card1 = document.createElement('div');
          card1.classList.add('card1');
          const box1 = document.createElement('div');
          const box2 = document.createElement('div');
          box1.classList.add('box1');
          box2.classList.add('box2');
          box2.setAttribute('data-comment-id',`${comment.comment_id}`);
          box2.classList.add('elipsis');
          const ellipsis = document.createElement('i');
          ellipsis.classList.add('fa-solid');
          ellipsis.classList.add('fa-ellipsis');
          const initials = document.createElement('div');
          initials.classList.add('icon');
          initials.innerHTML =  `${comment.first_name[0]} ${comment.last_name[0]}`;
          const user_box = document.createElement('div');
          user_box.classList.add('user-box');
          const user_name = document.createElement('div');
          user_name.classList.add('name');
          user_name.innerHTML = `${comment.first_name} ${comment.last_name}`;
          const time = document.createElement('time');
          time.classList.add('time');

          const dateString = `${comment.date}`;
          const dateObject = new Date(dateString);
          const formattedDate = dateObject.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
          });
          time.innerHTML = `${formattedDate}`;
          //append
          box2.appendChild(ellipsis);
          user_box.appendChild(user_name);
          user_box.appendChild(time);
          box1.appendChild(initials);
          box1.appendChild(user_box);
          card1.appendChild(box1);
          card1.appendChild(box2);



          const card2 = document.createElement('div');
          card2.classList.add('card2');
          const text = document.createElement('div');
          text.classList.add('text');
          text.textContent= `${comment.text}`;
          card2.appendChild(text);


          const card3 = document.createElement('div');
          card3.classList.add('delete-card');
          const icon = document.createElement('div');
          icon.classList.add('icon');
          card3.setAttribute('id',`icon${comment.comment_id}`);
          card3.setAttribute('data-delete-id',`${comment.comment_id}`);
          const fa_trash = document.createElement('i');
          fa_trash.classList.add('fa-solid');
          fa_trash.classList.add('fa-trash');
          const del_text = document.createElement('div');
          del_text.classList.add('text');
          del_text.innerHTML = 'Delete';
          //append
          icon.appendChild(fa_trash);
          card3.appendChild(icon);
          card3.appendChild(del_text);

          //append event to delete icon




          //end append





          comment_card.appendChild(card1);
          comment_card.appendChild(card2);
          comment_card.appendChild(card3);
          comment_card.classList.add('comment-card');

          container.appendChild(comment_card);
        });

        const deleteBtns = document.querySelectorAll('.elipsis');
        //let delete_box = document.getElementById(`icon${comment.comment_id}`);
        deleteBtns.forEach(btn => {
          //console.log('hhr',btn);
         btn.addEventListener('click', () => {
            const commentId = btn.getAttribute('data-comment-id');
            let parent_card = btn.closest('.comment-card').querySelector('.delete-card');
            parent_card.style.display = 'flex';
            if(parent_card.style.display == 'flex'){
              document.getElementById('comment-modal').style.display = 'block';
              document.getElementById('comment-modal').addEventListener('click',()=>{
                parent_card.style.display='none';
                document.getElementById('comment-modal').style.display = 'none';
              });

              //add event to delete btn
              const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
              parent_card.addEventListener('click',()=>{
                fetch(`/delete-comment/${commentId}/`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                  },
                })
                  .then(response => {
                    if (response.ok) {
                      // Remove the comment element from the DOM
                      //const commentEl = btn.closest('.comment');

                      //commentEl.remove();
                      btn.closest('.comment-card').remove();
                      document.getElementById('comment-modal').style.display = 'none';

                    } else {
                      throw new Error('Failed to delete comment.');
                    }
                  })
                  .catch(error => console.error(error));
              });

            }




          });
        });

      });
  });
});









const inviteForm = document.querySelector('#invite-form');

inviteForm.addEventListener('submit', function(event) {

  event.preventDefault(); // Prevent default form submission behavior
  //const photoId = document.querySelector('input[name="photo_id"]').value; // Get the photo ID from a hidden input field
  //const commentContent = document.querySelector('textarea[name="comment_content"]').value; // Get the comment content from the textarea
  //const formData = new FormData(inviteForm);

  const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
  xhr.open('POST', '/invite-contributor/'); // Set up the request
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Set the request header
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  xhr.setRequestHeader('X-CSRFToken', csrftoken);

  xhr.onload = function() {
    if (xhr.status === 200) {
        console.log('success')
        setTimeout(function() {
          location.reload();
      }, 500);
      // Request was successful
      // Update the page with the new comment
      //const commentList = document.querySelector(`#photo-${photoId} .comment-list`);
      //const newComment = document.createElement('li');
      //newComment.textContent = commentContent;
      //commentList.appendChild(newComment);

    } else {
      // Request failed
      console.error(`Server returned status ${xhr.status}`);
    }
  };

  xhr.onerror = function() {
    console.error('Request failed');
  };
  console.log(inviteForm.memorials.value)
  //var data = encodeURI('email=' + form.email.value + '&name=' + form.name.value + '&message=' + form.message.value);
  var data = encodeURI('email=' + inviteForm.email.value  + '&name=' + inviteForm.name.value  + '&memorials=' + inviteForm.memorials.value);
  xhr.send(data); // Send the request with the comment content in the request body
});







document.querySelectorAll('.like-btn').forEach(button => {
  button.addEventListener('click',  ()=> {

    const photoId = button.getAttribute('data-photo-id');
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value
    //const url = `/photos/${photoId}/comments/`;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', `/like-photo/${photoId}/`);
    xhr.setRequestHeader('X-CSRFToken', csrftoken);
    xhr.onload = function() {
      var data = JSON.parse(xhr.responseText);
      //var likeBtn = document.getElementById('like-btn');
      var likeCount = button.querySelector('.num');
      if (data.liked) {

        button.classList.add('liked');
        //likeCount.textContent = data.count + ' likes';
        likeCount.textContent = data.count ;

        button.querySelector('.fly-icon');
        console.log(button.querySelector('.fly-icon'));
        button.querySelector('.fly-icon').style.display = 'block';
        button.querySelector('.fly-icon').style.animationPlayState = 'running';
        setTimeout(function() {
          button.querySelector('.fly-icon').style.display = 'none';
        }, 2000);
      } else {
        button.querySelector('.fly-icon').style.display = 'none';
        button.classList.remove('liked');
        likeCount.textContent = data.count ;
      }
    };
    xhr.send();
  });
});




document.querySelectorAll('.like-cover').forEach(button => {
  button.addEventListener('click',  ()=> {

    const photoId = button.getAttribute('data-photo-id');

    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value
    //const url = `/photos/${photoId}/comments/`;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', `/like-cover/${photoId}/`);
    xhr.setRequestHeader('X-CSRFToken', csrftoken);
    xhr.onload = function() {
      var data = JSON.parse(xhr.responseText);
      //var likeBtn = document.getElementById('like-btn');
      var likeCount = button.querySelector('.num');
      if (data.liked) {

        button.classList.add('liked');
        //likeCount.textContent = data.count + ' likes';
        likeCount.textContent = data.count ;
        button.querySelector('.fly-icon');
        console.log(button.querySelector('.fly-icon'));
        button.querySelector('.fly-icon').style.display = 'block';
        button.querySelector('.fly-icon').style.animationPlayState = 'running';
        setTimeout(function() {
          button.querySelector('.fly-icon').style.display = 'none';
        }, 2000);

      } else {
        button.querySelector('.fly-icon').style.display = 'none';
        button.classList.remove('liked');
        likeCount.textContent = data.count ;

      }
    };
    xhr.send();
  });
});






/*
var m_slideIndex = 1;
m_showDivs(m_slideIndex);

function m_plusDivs(n) {
m_showDivs(m_slideIndex += n);
}

function m_currentDiv(n) {
m_showDivs(m_slideIndex = n);
}

function m_showDivs(n) {
  var i;
  var x = document.getElementsByClassName("m-slides");
  if (n > x.length) {m_slideIndex = 1}
  if (n < 1) {m_slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";

  }
  x[m_slideIndex-1].style.display = "block";

  if(x[m_slideIndex-1].style.display == "block"){
    if(m_slideIndex>1 && m_slideIndex < x.length){
      var photoId = x[m_slideIndex-1].querySelector('input').value;
      const like_url = `/like-list/${photoId}/`;
      fetch(like_url)
      .then(response => response.json())
      .then(data => {
        var likeCount = x[m_slideIndex-1].querySelector('.num');
        var btn = x[m_slideIndex-1].querySelector('.like-btn');

        if (data.liked) {

          btn.classList.add('liked');
          //likeCount.textContent = data.count + ' likes';
          likeCount.textContent = data.count ;
        } else {
          btn.classList.remove('liked');
          likeCount.textContent = data.count ;
        }
      });
    }
    else{
      var photoId = x[m_slideIndex-1].querySelector('input').value;
      const like_url = `/cover-like-list/${photoId}/`;
      fetch(like_url)
      .then(response => response.json())
      .then(data => {
        var likeCount = x[m_slideIndex-1].querySelector('.num');
        var btn = x[m_slideIndex-1].querySelector('.like-cover');

        if (data.liked) {

          btn.classList.add('liked');
          //likeCount.textContent = data.count + ' likes';
          likeCount.textContent = data.count ;
        } else {
          btn.classList.remove('liked');
          likeCount.textContent = data.count ;
        }
      });
    }
  }
}
 */



//submit mobile comments

const m_commentForm = document.querySelector('#m-comment-container');

m_commentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  let photoId;
  var x = document.getElementsByClassName("m-slides");
  //for (i = 0; i < x.length; i++) {
    //if(x[i].style.display == "block"){
      //photoId = x[i].querySelector('input').value;
      //console.log(x[i].querySelector('input'));
    //}
  //}
  var currentSlide = mySwiper.activeIndex + 1;
  var totalSlides = mySwiper.slides.length;
  var element_index = mySwiper.slides[mySwiper.activeIndex];

  photoId = element_index.querySelector('input').value;
  //const photoId = document.querySelector('input[name="photo_id"]').value; // Get the photo ID from a hidden input field
  const commentContent = document.querySelector('textarea[name="m_comment_content"]').value; // Get the comment content from the textarea
  const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
  xhr.open('POST', `/add-comment/${photoId}/`); // Set up the request
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Set the request header
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  xhr.setRequestHeader('X-CSRFToken', csrftoken);

  xhr.onload = function() {
    if (xhr.status === 200) {
      setTimeout(function() {
        document.querySelector('textarea[name="m_comment_content"]').value = '';
        const url = `/photos/${photoId}/comments/`;
        fetch(url)
        .then(response => response.json())
        .then(comments_data => {

            const container = document.querySelector('.m-comment-box');
            container.innerHTML = '';
            console.log('nn',comments_data)
            comments_data.forEach(comment => {
              const comment_card = document.createElement('div');
              const card1 = document.createElement('div');
              card1.classList.add('card1');
              const box1 = document.createElement('div');
              const box2 = document.createElement('div');
              box1.classList.add('box1');
              box2.classList.add('box2');
              box2.setAttribute('data-comment-id',`${comment.comment_id}`);

              if(comment.comment_by == comment.login_user){
                box2.classList.add('elipsis');
              }
              else{
                box2.classList.add('elipsis-X');
              }

              const ellipsis = document.createElement('i');
              ellipsis.classList.add('fa-solid');
              ellipsis.classList.add('fa-ellipsis');

              const initials = document.createElement('div');
              initials.classList.add('icon');
              initials.innerHTML =  `${comment.first_name[0]} ${comment.last_name[0]}`;
              const user_box = document.createElement('div');
              user_box.classList.add('user-box');
              const user_name = document.createElement('div');
              user_name.classList.add('name');
              user_name.innerHTML = `${comment.first_name} ${comment.last_name}`;
              const time = document.createElement('time');
              time.classList.add('time');

              const dateString = `${comment.date}`;
              const dateObject = new Date(dateString);
              const formattedDate = dateObject.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
              });
              time.innerHTML = `${formattedDate}`;
              //append
              box2.appendChild(ellipsis);
              user_box.appendChild(user_name);
              user_box.appendChild(time);
              box1.appendChild(initials);
              box1.appendChild(user_box);
              card1.appendChild(box1);
              card1.appendChild(box2);



              const card2 = document.createElement('div');
              card2.classList.add('card2');
              const text = document.createElement('div');
              text.classList.add('text');
              text.textContent= `${comment.text}`;
              card2.appendChild(text);


              const card3 = document.createElement('div');
              card3.classList.add('delete-card');
              const icon = document.createElement('div');
              icon.classList.add('icon');
              card3.setAttribute('id',`icon${comment.comment_id}`);
              card3.setAttribute('data-delete-id',`${comment.comment_id}`);
              const fa_trash = document.createElement('i');
              fa_trash.classList.add('fa-solid');
              fa_trash.classList.add('fa-trash');
              const del_text = document.createElement('div');
              del_text.classList.add('text');

              if(comment.comment_by == comment.login_user){
                del_text.innerHTML = 'Delete';
              }
              else{
                del_text.innerHTML = "can't delete"
              }

              //append
              icon.appendChild(fa_trash);
              card3.appendChild(icon);
              card3.appendChild(del_text);

              //append event to delete icon




              //end append





              comment_card.appendChild(card1);
              comment_card.appendChild(card2);
              comment_card.appendChild(card3);
              comment_card.classList.add('comment-card');

              container.appendChild(comment_card);
            });

            const deleteBtns = document.querySelectorAll('.elipsis');
            //let delete_box = document.getElementById(`icon${comment.comment_id}`);
            deleteBtns.forEach(btn => {
              //console.log('hhr',btn);
            btn.addEventListener('click', () => {
                const commentId = btn.getAttribute('data-comment-id');
                let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

              parent_card.style.display = 'flex';
                if(parent_card.style.display == 'flex'){
                  document.getElementById('m-comment-modal').style.display = 'block';
                  document.getElementById('m-comment-modal').addEventListener('click',()=>{
                    parent_card.style.display='none';
                    document.getElementById('m-comment-modal').style.display = 'none';
                  });


                  //add event to delete btn
                  const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                  parent_card.addEventListener('click',()=>{
                    fetch(`/delete-comment/${commentId}/`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken,
                      },
                    })
                      .then(response => {
                        if (response.ok) {
                          // Remove the comment element from the DOM
                          //const commentEl = btn.closest('.comment');

                          //commentEl.remove();
                          btn.closest('.comment-card').remove();
                          document.getElementById('m-comment-modal').style.display = 'none';

                        } else {
                          throw new Error('Failed to delete comment.');
                        }
                      })
                      .catch(error => console.error(error));
                  });

                }




              });
            });
            const deleteBtns_X = document.querySelectorAll('.elipsis-X');
            //let delete_box = document.getElementById(`icon${comment.comment_id}`);
            deleteBtns_X.forEach(btn => {
              //console.log('hhr',btn);
            btn.addEventListener('click', () => {
                const commentId = btn.getAttribute('data-comment-id');
                let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

              parent_card.style.display = 'flex';
                if(parent_card.style.display == 'flex'){
                  document.getElementById('m-comment-modal').style.display = 'block';
                  document.getElementById('m-comment-modal').addEventListener('click',()=>{
                    parent_card.style.display='none';
                    document.getElementById('m-comment-modal').style.display = 'none';
                  });
                }
            });

          });


      });
      }, 1000);


      // Request was successful
      // Update the page with the new comment
      //const commentList = document.querySelector(`#photo-${photoId} .comment-list`);
      //const newComment = document.createElement('li');
      //newComment.textContent = commentContent;
      //commentList.appendChild(newComment);

    } else {
      // Request failed
      console.error(`Server returned status ${xhr.status}`);

    }
  };

  xhr.onerror = function() {
    console.error('Request failed');
  };

  xhr.send(`comment_content=${encodeURIComponent(commentContent)}`); // Send the request with the comment content in the request body
});





//list mobile comments


document.querySelectorAll('.m-fetch-comments-btn').forEach(button => {
  button.addEventListener('click', event => {
    var element  =  document.getElementById('m-comment-container');
    element.classList.add('show');
    const photoId = event.target.getAttribute('data-photo-id');
    const url = `/photos/${photoId}/comments/`;
    //console.log(event.target);
    //console.log(photoId)

    fetch(url)
      .then(response => response.json())
      .then(comments_data => {

          const container = document.querySelector('.m-comment-box');
          container.innerHTML = '';
          console.log('nn',comments_data)
          comments_data.forEach(comment => {
            const comment_card = document.createElement('div');
            const card1 = document.createElement('div');
            card1.classList.add('card1');
            const box1 = document.createElement('div');
            const box2 = document.createElement('div');
            box1.classList.add('box1');
            box2.classList.add('box2');
            box2.setAttribute('data-comment-id',`${comment.comment_id}`);

            if(comment.comment_by == comment.login_user){
              box2.classList.add('elipsis');
            }
            else{
              box2.classList.add('elipsis-X');
            }

            const ellipsis = document.createElement('i');
            ellipsis.classList.add('fa-solid');
            ellipsis.classList.add('fa-ellipsis');

            const initials = document.createElement('div');
            initials.classList.add('icon');
            initials.innerHTML =  `${comment.first_name[0]} ${comment.last_name[0]}`;
            const user_box = document.createElement('div');
            user_box.classList.add('user-box');
            const user_name = document.createElement('div');
            user_name.classList.add('name');
            user_name.innerHTML = `${comment.first_name} ${comment.last_name}`;
            const time = document.createElement('time');
            time.classList.add('time');

            const dateString = `${comment.date}`;
            const dateObject = new Date(dateString);
            const formattedDate = dateObject.toLocaleString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: true
            });
            time.innerHTML = `${formattedDate}`;
            //append
            box2.appendChild(ellipsis);
            user_box.appendChild(user_name);
            user_box.appendChild(time);
            box1.appendChild(initials);
            box1.appendChild(user_box);
            card1.appendChild(box1);
            card1.appendChild(box2);



            const card2 = document.createElement('div');
            card2.classList.add('card2');
            const text = document.createElement('div');
            text.classList.add('text');
            text.textContent= `${comment.text}`;
            card2.appendChild(text);


            const card3 = document.createElement('div');
            card3.classList.add('delete-card');
            const icon = document.createElement('div');
            icon.classList.add('icon');
            card3.setAttribute('id',`icon${comment.comment_id}`);
            card3.setAttribute('data-delete-id',`${comment.comment_id}`);
            const fa_trash = document.createElement('i');
            fa_trash.classList.add('fa-solid');
            fa_trash.classList.add('fa-trash');
            const del_text = document.createElement('div');
            del_text.classList.add('text');

            if(comment.comment_by == comment.login_user){
              del_text.innerHTML = 'Delete';
            }
            else{
              del_text.innerHTML = "can't delete"
            }

            //append
            icon.appendChild(fa_trash);
            card3.appendChild(icon);
            card3.appendChild(del_text);

            //append event to delete icon




            //end append





            comment_card.appendChild(card1);
            comment_card.appendChild(card2);
            comment_card.appendChild(card3);
            comment_card.classList.add('comment-card');

            container.appendChild(comment_card);
          });

          const deleteBtns = document.querySelectorAll('.elipsis');
          //let delete_box = document.getElementById(`icon${comment.comment_id}`);
          deleteBtns.forEach(btn => {
            //console.log('hhr',btn);
          btn.addEventListener('click', () => {
              const commentId = btn.getAttribute('data-comment-id');
              let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

            parent_card.style.display = 'flex';
              if(parent_card.style.display == 'flex'){
                document.getElementById('m-comment-modal').style.display = 'block';
                document.getElementById('m-comment-modal').addEventListener('click',()=>{
                  parent_card.style.display='none';
                  document.getElementById('m-comment-modal').style.display = 'none';
                });


                //add event to delete btn
                const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                parent_card.addEventListener('click',()=>{
                  fetch(`/delete-comment/${commentId}/`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'X-CSRFToken': csrfToken,
                    },
                  })
                    .then(response => {
                      if (response.ok) {
                        // Remove the comment element from the DOM
                        //const commentEl = btn.closest('.comment');

                        //commentEl.remove();
                        btn.closest('.comment-card').remove();
                        document.getElementById('m-comment-modal').style.display = 'none';

                      } else {
                        throw new Error('Failed to delete comment.');
                      }
                    })
                    .catch(error => console.error(error));
                });

              }




            });
          });
          const deleteBtns_X = document.querySelectorAll('.elipsis-X');
          //let delete_box = document.getElementById(`icon${comment.comment_id}`);
          deleteBtns_X.forEach(btn => {
            //console.log('hhr',btn);
          btn.addEventListener('click', () => {
              const commentId = btn.getAttribute('data-comment-id');
              let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

            parent_card.style.display = 'flex';
              if(parent_card.style.display == 'flex'){
                document.getElementById('m-comment-modal').style.display = 'block';
                document.getElementById('m-comment-modal').addEventListener('click',()=>{
                  parent_card.style.display='none';
                  document.getElementById('m-comment-modal').style.display = 'none';
                });
              }
          });

        });


    });
  });
});





document.getElementById('clip-board-m').addEventListener('click',()=>{
  const textToCopy = document.getElementById('copy-text-m').innerHTML;

  navigator.clipboard.writeText(textToCopy)
  .then(() => {
      console.log("Text copied to clipboard successfully");
      document.getElementById('copied-m').style.display = 'block';
      setTimeout(function() {
          document.getElementById('copied-m').style.display = 'none';
      }, 1000);
  })
  .catch((error) => {
      console.error("Error copying text to clipboard: ", error);
  });
});






/*
document.querySelectorAll('.event-container').forEach(eventForm => {
  eventForm.addEventListener('submit', event => {
    event.preventDefault(); // Prevent default form submission behavior
    const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
    xhr.open('POST', '/create-event/'); // Set up the request
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Set the request header
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    xhr.setRequestHeader('X-CSRFToken', csrftoken);
    xhr.onload = function() {
      if (xhr.status === 200) {
          console.log('success')
          setTimeout(function() {
            location.reload();
        }, 500);
      } else {
        console.error(`Server returned status ${xhr.status}`);
      }
    };
    xhr.onerror = function() {
      console.error('Request failed');
    };
    console.log(eventForm.host_image.files[0]['name']);
    //var data = encodeURI('email=' + form.email.value + '&name=' + form.name.value + '&message=' + form.message.value);
    var data = encodeURI('celebration_type=' + eventForm.celebration_type.value  + '&description=' + eventForm.description.value  + '&date=' + eventForm.date.value + '&location=' + eventForm.location.value + '&streaming_link=' + eventForm.streaming_link.value + '&user=' + eventForm.user.value + '&deceased=' + eventForm.deceased.value + '&host_image=' + eventForm.host_image.files[0]['name']);
    xhr.send(data); // Send the request with the comment content in the request body
  });
}); */

/*const eventForm = document.querySelector('#event-container');
eventForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
  xhr.open('POST', '/create-event/'); // Set up the request
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Set the request header
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  xhr.setRequestHeader('X-CSRFToken', csrftoken);
  xhr.onload = function() {
    if (xhr.status === 200) {
        console.log('success')
        setTimeout(function() {
          location.reload();
      }, 500);
    } else {
      console.error(`Server returned status ${xhr.status}`);
    }
  };
  xhr.onerror = function() {
    console.error('Request failed');
  };
  console.log(eventForm);
  //var data = encodeURI('email=' + form.email.value + '&name=' + form.name.value + '&message=' + form.message.value);
  var data = encodeURI('celebration_type=' + eventForm.celebration_type.value  + '&description=' + eventForm.description.value  + '&date=' + eventForm.date.value + '&location=' + eventForm.location.value + '&streaming_link=' + eventForm.streaming_link.value + '&user=' + eventForm.user.value + '&deceased=' + eventForm.deceased.value);
  xhr.send(data); // Send the request with the comment content in the request body
});
 */






document.querySelectorAll('.event-header').forEach(button => {
  button.addEventListener('click', event => {
    event.stopPropagation();
    button.nextElementSibling.classList.toggle('show');

    if(button.querySelector('.chevron').firstElementChild.classList.contains('fa-chevron-up')){
      button.querySelector('.chevron').firstElementChild.classList.replace('fa-chevron-up','fa-chevron-down');
    }
    else{
      button.querySelector('.chevron').firstElementChild.classList.replace('fa-chevron-down','fa-chevron-up');
    }

  });
});





document.querySelectorAll('.event-container').forEach(eventForm => {
  eventForm.addEventListener('submit', event => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(eventForm);

    // Create a new AJAX request object
    const xhr = new XMLHttpRequest();

    // Attach an event listener for the AJAX response

    xhr.addEventListener('load', () => {
      // Handle the AJAX response
      if (xhr.status === 200) {
        // Show a success notification
        setTimeout(function() {
          location.reload();
        }, 500);
      } else {
        // Show an error notification
         console.log('error');
      }
    });

    // Open the AJAX request
    xhr.open('POST', '/create-event/');
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    xhr.setRequestHeader('X-CSRFToken', csrftoken);

    // Send the form data with the AJAX request
    xhr.send(formData);
  });
});





const deleteEvent = document.querySelectorAll('.delete-event');
//let delete_box = document.getElementById(`icon${comment.comment_id}`);
deleteEvent.forEach(btn => {
  //console.log('hhr',btn);
 btn.addEventListener('click', () => {
    const eventId = btn.getAttribute('data-event-id');
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    console.log(btn.closest('.event-list'));
    fetch(`/delete-event/${eventId}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,
      },
    })
      .then(response => {
        if (response.ok) {
          // Remove the comment element from the DOM
          //const commentEl = btn.closest('.comment');
          setTimeout(function() {
            btn.closest('.event-list').remove();
            location.reload();
          }, 500);

        } else {
          throw new Error('Failed to delete comment.');
        }
      })
      .catch(error => console.error(error));
  });

});







function close_search(){
  document.getElementById('index-form').style.display = 'none';
}

function open_search(){
  document.getElementById('index-form').style.display = 'block';
}




//mobile tribute form...
const m_tributeForm = document.querySelector('#m-tribute-container');
m_tributeForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  let deceasedId = m_tributeForm.querySelector('#m-deceased-id').value;


  //const photoId = document.querySelector('input[name="photo_id"]').value; // Get the photo ID from a hidden input field
  const commentContent = document.querySelector('textarea[name="tribute-deceased"]').value; // Get the comment content from the textarea
  const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
  xhr.open('POST', `/add-tribute/${deceasedId}/`); // Set up the request
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Set the request header
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  xhr.setRequestHeader('X-CSRFToken', csrftoken);


  xhr.onload = function() {
    if (xhr.status === 200) {
      setTimeout(function() {
        document.querySelector('textarea[name="tribute-deceased"]').value = '';
        const url = `/tribute/${deceasedId}/list/`;
        fetch(url)
        .then(response => response.json())
        .then(comments_data => {

            const container = m_tributeForm.querySelector('.m-comment-box');
            container.innerHTML = '';
            comments_data.forEach(comment => {
              const comment_card = document.createElement('div');
              const card1 = document.createElement('div');
              card1.classList.add('card1');
              const box1 = document.createElement('div');
              const box2 = document.createElement('div');
              box1.classList.add('box1');
              box2.classList.add('box2');
              box2.setAttribute('data-comment-id',`${comment.comment_id}`);

              if(comment.comment_by == comment.login_user){
                box2.classList.add('elipsis');
              }
              else{
                box2.classList.add('elipsis-X');
              }

              const ellipsis = document.createElement('i');
              ellipsis.classList.add('fa-solid');
              ellipsis.classList.add('fa-ellipsis');

              const initials = document.createElement('div');
              initials.classList.add('icon');
              initials.innerHTML =  `${comment.first_name[0]} ${comment.last_name[0]}`;
              const user_box = document.createElement('div');
              user_box.classList.add('user-box');
              const user_name = document.createElement('div');
              user_name.classList.add('name');
              user_name.innerHTML = `${comment.first_name} ${comment.last_name}`;
              const time = document.createElement('time');
              time.classList.add('time');

              const dateString = `${comment.date}`;
              const dateObject = new Date(dateString);
              const formattedDate = dateObject.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
              });
              time.innerHTML = `${formattedDate}`;
              //append
              box2.appendChild(ellipsis);
              user_box.appendChild(user_name);
              user_box.appendChild(time);
              box1.appendChild(initials);
              box1.appendChild(user_box);
              card1.appendChild(box1);
              card1.appendChild(box2);



              const card2 = document.createElement('div');
              card2.classList.add('card2');
              const text = document.createElement('div');
              text.classList.add('text');
              text.textContent= `${comment.text}`;
              card2.appendChild(text);


              const card3 = document.createElement('div');
              card3.classList.add('delete-card');
              const icon = document.createElement('div');
              icon.classList.add('icon');
              card3.setAttribute('id',`icon${comment.comment_id}`);
              card3.setAttribute('data-delete-id',`${comment.comment_id}`);
              const fa_trash = document.createElement('i');
              fa_trash.classList.add('fa-solid');
              fa_trash.classList.add('fa-trash');
              const del_text = document.createElement('div');
              del_text.classList.add('text');

              if(comment.comment_by == comment.login_user){
                del_text.innerHTML = 'Delete';
              }
              else{
                del_text.innerHTML = "can't delete"
              }

              //append
              icon.appendChild(fa_trash);
              card3.appendChild(icon);
              card3.appendChild(del_text);

              //append event to delete icon




              //end append





              comment_card.appendChild(card1);
              comment_card.appendChild(card2);
              comment_card.appendChild(card3);
              comment_card.classList.add('comment-card');

              container.appendChild(comment_card);
            });

            const deleteBtns = document.querySelectorAll('.elipsis');
            //let delete_box = document.getElementById(`icon${comment.comment_id}`);
            deleteBtns.forEach(btn => {
              //console.log('hhr',btn);
            btn.addEventListener('click', () => {
                const commentId = btn.getAttribute('data-comment-id');
                let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

              parent_card.style.display = 'flex';
                if(parent_card.style.display == 'flex'){
                  document.getElementById('m-comment-modal').style.display = 'block';
                  document.getElementById('m-comment-modal').addEventListener('click',()=>{
                    parent_card.style.display='none';
                    document.getElementById('m-comment-modal').style.display = 'none';
                  });


                  //add event to delete btn
                  const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                  parent_card.addEventListener('click',()=>{
                    fetch(`/delete-comment/${commentId}/`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken,
                      },
                    })
                      .then(response => {
                        if (response.ok) {
                          // Remove the comment element from the DOM
                          //const commentEl = btn.closest('.comment');

                          //commentEl.remove();
                          btn.closest('.comment-card').remove();
                          document.getElementById('m-comment-modal').style.display = 'none';

                        } else {
                          throw new Error('Failed to delete comment.');
                        }
                      })
                      .catch(error => console.error(error));
                  });

                }




              });
            });
            const deleteBtns_X = document.querySelectorAll('.elipsis-X');
            //let delete_box = document.getElementById(`icon${comment.comment_id}`);
            deleteBtns_X.forEach(btn => {
              //console.log('hhr',btn);
            btn.addEventListener('click', () => {
                const commentId = btn.getAttribute('data-comment-id');
                let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

              parent_card.style.display = 'flex';
                if(parent_card.style.display == 'flex'){
                  document.getElementById('m-comment-modal').style.display = 'block';
                  document.getElementById('m-comment-modal').addEventListener('click',()=>{
                    parent_card.style.display='none';
                    document.getElementById('m-comment-modal').style.display = 'none';
                  });
                }
            });

          });


        });


      }, 1000);


      // Request was successful
      // Update the page with the new comment
      //const commentList = document.querySelector(`#photo-${photoId} .comment-list`);
      //const newComment = document.createElement('li');
      //newComment.textContent = commentContent;
      //commentList.appendChild(newComment);

    }
    else if(xhr.status === 500){
      window.location.href = '/login/';
    }
    else {
      // Request failed
      console.error(`Server returned status ${xhr.status}`);
    }
  };

  xhr.onerror = function() {
    console.error('Request failed');
  };

  xhr.send(`comment_content=${encodeURIComponent(commentContent)}`); // Send the request with the comment content in the request body



});



document.querySelectorAll('.fetch-tribute').forEach(button => {
  button.addEventListener('click', event => {
    var element  =  document.getElementById('m-tribute-container');
    element.classList.add('show');

    const deceasedId = button.getAttribute('data-deceased-id');
    const url = `/tribute/${deceasedId}/list/`;
    fetch(url)
      .then(response => response.json())
      .then(comments_data => {

          const container = document.querySelector('.m-tribute-box');
          container.innerHTML = '';
          comments_data.forEach(comment => {

            const comment_card = document.createElement('div');
            const card1 = document.createElement('div');
            card1.classList.add('card1');
            const box1 = document.createElement('div');
            const box2 = document.createElement('div');
            box1.classList.add('box1');
            box2.classList.add('box2');
            box2.setAttribute('data-comment-id',`${comment.comment_id}`);

            if(comment.comment_by == comment.login_user){
              box2.classList.add('elipsis');
            }
            else{
              box2.classList.add('elipsis-X');
            }

            const ellipsis = document.createElement('i');
            ellipsis.classList.add('fa-solid');
            ellipsis.classList.add('fa-ellipsis');

            const initials = document.createElement('div');
            initials.classList.add('icon');
            initials.innerHTML =  `${comment.first_name[0]} ${comment.last_name[0]}`;
            const user_box = document.createElement('div');
            user_box.classList.add('user-box');
            const user_name = document.createElement('div');
            user_name.classList.add('name');
            user_name.innerHTML = `${comment.first_name} ${comment.last_name}`;
            const time = document.createElement('time');
            time.classList.add('time');

            const dateString = `${comment.date}`;
            const dateObject = new Date(dateString);
            const formattedDate = dateObject.toLocaleString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: true
            });
            time.innerHTML = `${formattedDate}`;
            //append
            box2.appendChild(ellipsis);
            user_box.appendChild(user_name);
            user_box.appendChild(time);
            box1.appendChild(initials);
            box1.appendChild(user_box);
            card1.appendChild(box1);
            card1.appendChild(box2);



            const card2 = document.createElement('div');
            card2.classList.add('card2');
            const text = document.createElement('div');
            text.classList.add('text');
            text.textContent= `${comment.text}`;
            card2.appendChild(text);


            const card3 = document.createElement('div');
            card3.classList.add('delete-card');
            const icon = document.createElement('div');
            icon.classList.add('icon');
            card3.setAttribute('id',`icon${comment.comment_id}`);
            card3.setAttribute('data-delete-id',`${comment.comment_id}`);
            const fa_trash = document.createElement('i');
            fa_trash.classList.add('fa-solid');
            fa_trash.classList.add('fa-trash');
            const del_text = document.createElement('div');
            del_text.classList.add('text');

            if(comment.comment_by == comment.login_user){
              del_text.innerHTML = 'Delete';
            }
            else{
              del_text.innerHTML = "can't delete"
            }

            //append
            icon.appendChild(fa_trash);
            card3.appendChild(icon);
            card3.appendChild(del_text);

            //append event to delete icon




            //end append





            comment_card.appendChild(card1);
            comment_card.appendChild(card2);
            comment_card.appendChild(card3);
            comment_card.classList.add('comment-card');

            container.appendChild(comment_card);
          });

         const deleteBtns = document.querySelectorAll('.elipsis');
          //let delete_box = document.getElementById(`icon${comment.comment_id}`);
          deleteBtns.forEach(btn => {
            //console.log('hhr',btn);
          btn.addEventListener('click', () => {

              const commentId = btn.getAttribute('data-comment-id');
              let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

            parent_card.style.display = 'flex';
              if(parent_card.style.display == 'flex'){
                document.getElementById('m-tribute-modal').style.display = 'block';
                document.getElementById('m-tribute-modal').addEventListener('click',()=>{
                  parent_card.style.display='none';
                  document.getElementById('m-tribute-modal').style.display = 'none';
                });


                //add event to delete btn
                const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                parent_card.addEventListener('click',()=>{
                  fetch(`/delete-tribute/${commentId}/`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'X-CSRFToken': csrfToken,
                    },
                  })
                    .then(response => {
                      if (response.ok) {
                        // Remove the comment element from the DOM
                        //const commentEl = btn.closest('.comment');

                        //commentEl.remove();
                        btn.closest('.comment-card').remove();
                        document.getElementById('m-tribute-modal').style.display = 'none';

                      } else {
                        throw new Error('Failed to delete comment.');
                      }
                    })
                    .catch(error => console.error(error));
                });

              }




            });
          });
          const deleteBtns_X = document.querySelectorAll('.elipsis-X');
          //let delete_box = document.getElementById(`icon${comment.comment_id}`);
          deleteBtns_X.forEach(btn => {
            //console.log('hhr',btn);
          btn.addEventListener('click', () => {
              const commentId = btn.getAttribute('data-comment-id');
              let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

            parent_card.style.display = 'flex';
              if(parent_card.style.display == 'flex'){
                document.getElementById('m-tribute-modal').style.display = 'block';
                document.getElementById('m-tribute-modal').addEventListener('click',()=>{
                  parent_card.style.display='none';
                  document.getElementById('m-tribute-modal').style.display = 'none';
                });
              }
          });

        });


    });


  });
});




//larger screen tribute

const tributeForm = document.querySelector('#tribute-container');
tributeForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  let deceasedId = tributeForm.querySelector('#L-deceased-id').value;


  //const photoId = document.querySelector('input[name="photo_id"]').value; // Get the photo ID from a hidden input field
  const commentContent = document.querySelector('textarea[name="L-tribute-deceased"]').value; // Get the comment content from the textarea
  const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
  xhr.open('POST', `/add-tribute/${deceasedId}/`); // Set up the request
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Set the request header
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  xhr.setRequestHeader('X-CSRFToken', csrftoken);


  xhr.onload = function() {
    if (xhr.status === 200) {
      setTimeout(function() {
        document.querySelector('textarea[name="L-tribute-deceased"]').value = '';
        const url = `/tribute/${deceasedId}/list/`;
        fetch(url)
        .then(response => response.json())
        .then(comments_data => {

            const container = tributeForm.querySelector('.tribute-box');
            container.innerHTML = '';
            comments_data.forEach(comment => {
              const comment_card = document.createElement('div');
              const card1 = document.createElement('div');
              card1.classList.add('card1');
              const box1 = document.createElement('div');
              const box2 = document.createElement('div');
              box1.classList.add('box1');
              box2.classList.add('box2');
              box2.setAttribute('data-comment-id',`${comment.comment_id}`);

              if(comment.comment_by == comment.login_user){
                box2.classList.add('elipsis');
              }
              else{
                box2.classList.add('elipsis-X');
              }

              const ellipsis = document.createElement('i');
              ellipsis.classList.add('fa-solid');
              ellipsis.classList.add('fa-ellipsis');

              const initials = document.createElement('div');
              initials.classList.add('icon');
              initials.innerHTML =  `${comment.first_name[0]} ${comment.last_name[0]}`;
              const user_box = document.createElement('div');
              user_box.classList.add('user-box');
              const user_name = document.createElement('div');
              user_name.classList.add('name');
              user_name.innerHTML = `${comment.first_name} ${comment.last_name}`;
              const time = document.createElement('time');
              time.classList.add('time');

              const dateString = `${comment.date}`;
              const dateObject = new Date(dateString);
              const formattedDate = dateObject.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
              });
              time.innerHTML = `${formattedDate}`;
              //append
              box2.appendChild(ellipsis);
              user_box.appendChild(user_name);
              user_box.appendChild(time);
              box1.appendChild(initials);
              box1.appendChild(user_box);
              card1.appendChild(box1);
              card1.appendChild(box2);



              const card2 = document.createElement('div');
              card2.classList.add('card2');
              const text = document.createElement('div');
              text.classList.add('text');
              text.textContent= `${comment.text}`;
              card2.appendChild(text);


              const card3 = document.createElement('div');
              card3.classList.add('delete-card');
              const icon = document.createElement('div');
              icon.classList.add('icon');
              card3.setAttribute('id',`icon${comment.comment_id}`);
              card3.setAttribute('data-delete-id',`${comment.comment_id}`);
              const fa_trash = document.createElement('i');
              fa_trash.classList.add('fa-solid');
              fa_trash.classList.add('fa-trash');
              const del_text = document.createElement('div');
              del_text.classList.add('text');

              if(comment.comment_by == comment.login_user){
                del_text.innerHTML = 'Delete';
              }
              else{
                del_text.innerHTML = "can't delete"
              }

              //append
              icon.appendChild(fa_trash);
              card3.appendChild(icon);
              card3.appendChild(del_text);

              //append event to delete icon




              //end append





              comment_card.appendChild(card1);
              comment_card.appendChild(card2);
              comment_card.appendChild(card3);
              comment_card.classList.add('comment-card');

              container.appendChild(comment_card);
            });

            const deleteBtns = document.querySelectorAll('.elipsis');
            //let delete_box = document.getElementById(`icon${comment.comment_id}`);
            deleteBtns.forEach(btn => {
              //console.log('hhr',btn);
            btn.addEventListener('click', () => {
                const commentId = btn.getAttribute('data-comment-id');
                let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

              parent_card.style.display = 'flex';
                if(parent_card.style.display == 'flex'){
                  document.getElementById('tribute-modal').style.display = 'block';
                  document.getElementById('tribute-modal').addEventListener('click',()=>{
                    parent_card.style.display='none';
                    document.getElementById('tribute-modal').style.display = 'none';
                  });


                  //add event to delete btn
                  const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                  parent_card.addEventListener('click',()=>{
                    fetch(`/delete-tribute/${commentId}/`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken,
                      },
                    })
                      .then(response => {
                        if (response.ok) {
                          // Remove the comment element from the DOM
                          //const commentEl = btn.closest('.comment');

                          //commentEl.remove();
                          btn.closest('.comment-card').remove();
                          document.getElementById('tribute-modal').style.display = 'none';

                        } else {
                          throw new Error('Failed to delete comment.');
                        }
                      })
                      .catch(error => console.error(error));
                  });

                }




              });
            });
            const deleteBtns_X = document.querySelectorAll('.elipsis-X');
            //let delete_box = document.getElementById(`icon${comment.comment_id}`);
            deleteBtns_X.forEach(btn => {
              //console.log('hhr',btn);
            btn.addEventListener('click', () => {
                const commentId = btn.getAttribute('data-comment-id');
                let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

              parent_card.style.display = 'flex';
                if(parent_card.style.display == 'flex'){
                  document.getElementById('tribute-modal').style.display = 'block';
                  document.getElementById('tribute-modal').addEventListener('click',()=>{
                    parent_card.style.display='none';
                    document.getElementById('tribute-modal').style.display = 'none';
                  });
                }
            });

          });


        });


      }, 400);


      // Request was successful
      // Update the page with the new comment
      //const commentList = document.querySelector(`#photo-${photoId} .comment-list`);
      //const newComment = document.createElement('li');
      //newComment.textContent = commentContent;
      //commentList.appendChild(newComment);

    }
    else if(xhr.status === 500){
      window.location.href = '/login/';
    }
    else {
      // Request failed
      console.error(`Server returned status ${xhr.status}`);
    }
  };

  xhr.onerror = function() {
    console.error('Request failed');
  };

  xhr.send(`comment_content=${encodeURIComponent(commentContent)}`); // Send the request with the comment content in the request body



});





document.querySelectorAll('.L-fetch-tribute').forEach(button => {
  button.addEventListener('click', event => {
    var element  =  document.getElementById('tribute-container');
    element.classList.add('show');


    const deceasedId = button.getAttribute('data-deceased-id');
    const url = `/tribute/${deceasedId}/list/`;
    fetch(url)
      .then(response => response.json())
      .then(comments_data => {

          const container = document.querySelector('.tribute-box');
          container.innerHTML = '';
          comments_data.forEach(comment => {

            const comment_card = document.createElement('div');
            const card1 = document.createElement('div');
            card1.classList.add('card1');
            const box1 = document.createElement('div');
            const box2 = document.createElement('div');
            box1.classList.add('box1');
            box2.classList.add('box2');
            box2.setAttribute('data-comment-id',`${comment.comment_id}`);

            if(comment.comment_by == comment.login_user){
              box2.classList.add('elipsis');
            }
            else{
              box2.classList.add('elipsis-X');
            }

            const ellipsis = document.createElement('i');
            ellipsis.classList.add('fa-solid');
            ellipsis.classList.add('fa-ellipsis');

            const initials = document.createElement('div');
            initials.classList.add('icon');
            initials.innerHTML =  `${comment.first_name[0]} ${comment.last_name[0]}`;
            const user_box = document.createElement('div');
            user_box.classList.add('user-box');
            const user_name = document.createElement('div');
            user_name.classList.add('name');
            user_name.innerHTML = `${comment.first_name} ${comment.last_name}`;
            const time = document.createElement('time');
            time.classList.add('time');

            const dateString = `${comment.date}`;
            const dateObject = new Date(dateString);
            const formattedDate = dateObject.toLocaleString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: true
            });
            time.innerHTML = `${formattedDate}`;
            //append
            box2.appendChild(ellipsis);
            user_box.appendChild(user_name);
            user_box.appendChild(time);
            box1.appendChild(initials);
            box1.appendChild(user_box);
            card1.appendChild(box1);
            card1.appendChild(box2);



            const card2 = document.createElement('div');
            card2.classList.add('card2');
            const text = document.createElement('div');
            text.classList.add('text');
            text.textContent= `${comment.text}`;
            card2.appendChild(text);


            const card3 = document.createElement('div');
            card3.classList.add('delete-card');
            const icon = document.createElement('div');
            icon.classList.add('icon');
            card3.setAttribute('id',`icon${comment.comment_id}`);
            card3.setAttribute('data-delete-id',`${comment.comment_id}`);
            const fa_trash = document.createElement('i');
            fa_trash.classList.add('fa-solid');
            fa_trash.classList.add('fa-trash');
            const del_text = document.createElement('div');
            del_text.classList.add('text');

            if(comment.comment_by == comment.login_user){
              del_text.innerHTML = 'Delete';
            }
            else{
              del_text.innerHTML = "can't delete"
            }

            //append
            icon.appendChild(fa_trash);
            card3.appendChild(icon);
            card3.appendChild(del_text);

            //append event to delete icon




            //end append





            comment_card.appendChild(card1);
            comment_card.appendChild(card2);
            comment_card.appendChild(card3);
            comment_card.classList.add('comment-card');

            container.appendChild(comment_card);
          });

         const deleteBtns = document.querySelectorAll('.elipsis');
          //let delete_box = document.getElementById(`icon${comment.comment_id}`);
          deleteBtns.forEach(btn => {
            //console.log('hhr',btn);
          btn.addEventListener('click', () => {

              const commentId = btn.getAttribute('data-comment-id');
              let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

            parent_card.style.display = 'flex';
              if(parent_card.style.display == 'flex'){
                document.getElementById('tribute-modal').style.display = 'block';
                document.getElementById('tribute-modal').addEventListener('click',()=>{
                  parent_card.style.display='none';
                  document.getElementById('tribute-modal').style.display = 'none';
                });


                //add event to delete btn
                const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
                parent_card.addEventListener('click',()=>{
                  fetch(`/delete-tribute/${commentId}/`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'X-CSRFToken': csrfToken,
                    },
                  })
                    .then(response => {
                      if (response.ok) {
                        // Remove the comment element from the DOM
                        //const commentEl = btn.closest('.comment');

                        //commentEl.remove();
                        btn.closest('.comment-card').remove();
                        document.getElementById('tribute-modal').style.display = 'none';

                      } else {
                        throw new Error('Failed to delete comment.');
                      }
                    })
                    .catch(error => console.error(error));
                });

              }




            });
          });
          const deleteBtns_X = document.querySelectorAll('.elipsis-X');
          //let delete_box = document.getElementById(`icon${comment.comment_id}`);
          deleteBtns_X.forEach(btn => {
            //console.log('hhr',btn);
          btn.addEventListener('click', () => {
              const commentId = btn.getAttribute('data-comment-id');
              let parent_card = btn.closest('.comment-card').querySelector('.delete-card');

            parent_card.style.display = 'flex';
              if(parent_card.style.display == 'flex'){
                document.getElementById('tribute-modal').style.display = 'block';
                document.getElementById('tribute-modal').addEventListener('click',()=>{
                  parent_card.style.display='none';
                  document.getElementById('tribute-modal').style.display = 'none';
                });
              }
          });

        });


    });


  });
});



function show_sidebar(){
  var menu = document.getElementById('container1');
  var icon = document.getElementById('menu');
  menu.classList.toggle('show');
  if(menu.classList.contains('show')){
    icon.querySelector('i').classList.replace('fa-circle-xmark','fa-bars');

    icon.querySelector('i').style.color = 'white';
    document.querySelector('.image-box-wrapper').querySelector('img').style.width = '100%';

    document.querySelectorAll('.image-box-wrapper').forEach(button => {

      button.querySelector('img').style.width = 'auto';

    })

  }
  else{
    icon.querySelector('i').classList.replace('fa-bars','fa-circle-xmark');
    icon.querySelector('i').style.color = 'rgb(229, 62, 62)';
    document.querySelectorAll('.image-box-wrapper').forEach(button => {
      button.querySelector('img').style.width = '100%';
    })
  }

}


const shaderEffects = [
  'cards',
  'glide',
  'cube',
  'coverflow',
  'flip',
  'creative'
];

var mySwiper = new Swiper('.swiper-container', {
  loop:true,
  grabCursor:true,
  slidesPerView: 1,
  spaceBetween: 24,
  effect: 'cube',
  //effect: shaderEffects[Math.floor(Math.random() * shaderEffects.length)],


});
//mySwiper.setTransition(shaderEffects[Math.floor(Math.random() * shaderEffects.length)]);

mySwiper.on('slideChange', function () {
  //shaderEffects[Math.floor(Math.random() * shaderEffects.length)];
  //console.log('kk',shaderEffects[Math.floor(Math.random() * shaderEffects.length)]);
  var currentSlide = mySwiper.activeIndex + 1;
  var totalSlides = mySwiper.slides.length;
  var element_index = mySwiper.slides[mySwiper.activeIndex];


  if(element_index.classList.contains('event-photos')){
    var photoId =  element_index.querySelector('input').value;

    const like_url = `/like-list/${photoId}/`;

    fetch(like_url)
    .then(response => response.json())
    .then(data => {
      var likeCount = element_index.querySelector('.num');
      var btn = element_index.querySelector('.like-btn');

      if (data.liked) {

        btn.classList.add('liked');
        //likeCount.textContent = data.count + ' likes';
        likeCount.textContent = data.count ;
      } else {
        btn.classList.remove('liked');
        likeCount.textContent = data.count ;
      }
    });
  }
  else{
    var photoId = element_index.querySelector('input').value;


    const like_url = `/cover-like-list/${photoId}/`;
    fetch(like_url)
    .then(response => response.json())
    .then(data => {
      var likeCount = element_index.querySelector('.num');
      var btn = element_index.querySelector('.like-cover');

      if (data.liked) {

        btn.classList.add('liked');
        //likeCount.textContent = data.count + ' likes';
        likeCount.textContent = data.count ;
      } else {
        btn.classList.remove('liked');
        likeCount.textContent = data.count ;
      }
    });
  }
});



function showYear(id){
  document.querySelectorAll('.album-text').forEach(btn =>{
    if(btn.id.endsWith(`${id}`)){
      btn.classList.add('hovered');
    }
    else{
      btn.classList.remove('hovered');
    }
  });
  document.querySelectorAll('.m-slides').forEach(slide =>{
    console.log(slide);
    if(slide.id.endsWith(`${id}`)){
      event.target.classList.add('hovered');
      console.log('hello',event.target);
      console.log(slide.getAttribute('data-swiper-slide-index'));

      var slideIndex = slide.getAttribute('data-swiper-slide-index');
      slideIndex++;
      mySwiper.slideTo(slideIndex);
      //console.log('hell0');
      //slide.style.display = 'block';

      var photoId = slide.querySelector('input').value;
      const like_url = `/like-list/${photoId}/`;
      fetch(like_url)
      .then(response => response.json())
      .then(data => {
        var likeCount = slide.querySelector('.num');
        var btn = slide.querySelector('.like-btn');

        if (data.liked) {

          btn.classList.add('liked');
          //likeCount.textContent = data.count + ' likes';
          likeCount.textContent = data.count ;
        } else {
          btn.classList.remove('liked');
          likeCount.textContent = data.count ;
        }
      });
    }


  })

}


window.onload = function() {
    var photoId = document.querySelector('#m-like-cover-1').value;


    const like_url = `/cover-like-list/${photoId}/`;
    fetch(like_url)
    .then(response => response.json())
    .then(data => {
      var likeCount = document.querySelector('#num-cover');
      var btn = document.querySelector('#like-cover-btn');

      if (data.liked) {

        btn.classList.add('liked');
        //likeCount.textContent = data.count + ' likes';
        likeCount.textContent = data.count ;
      } else {
        btn.classList.remove('liked');
        likeCount.textContent = data.count ;
      }
    });
}






var form = document.getElementById('light-candle-form');
    form.addEventListener('submit', function(event) {
        console.log('ggggg');
      event.preventDefault();
      var xhr = new XMLHttpRequest();
      xhr.open('POST','/light-candle/');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
       xhr.setRequestHeader('X-CSRFToken', csrftoken);
      xhr.onload = function() {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          document.querySelector('.preloader-btn').style.display = 'block';
          //var candle = document.getElementById('candle-' + data.candle_id);
          //candle.classList.add('lit');
          setTimeout(function() {
            location.reload();
            document.querySelector('.preloader-btn').style.display = 'none';
          }, 2000);
          console.log('success');
        }
        else{
            window.location.href = '/Auth-memorial/';
        }
      };
      //console.log(form.deceased.value);
      var data = encodeURI('deceased=' + form.deceased.value)
      xhr.send(data);
    });


    //laptop







/*
function show_sidebar(){
  var menu = document.getElementById('container1');
  var icon = document.getElementById('menu');
  menu.classList.toggle('show');
  if(menu.classList.contains('show')){
    icon.querySelector('i').classList.replace('fa-bars','fa-circle-xmark');
    icon.querySelector('i').style.color = 'rgb(229, 62, 62)';
    document.querySelector('.image-box-wrapper').querySelector('img').style.width = '100%';

    document.querySelectorAll('.image-box-wrapper').forEach(button => {
      button.querySelector('img').style.width = '100%';

    })

  }
  else{
    icon.querySelector('i').classList.replace('fa-circle-xmark','fa-bars');
    icon.querySelector('i').style.color = 'white';
    document.querySelectorAll('.image-box-wrapper').forEach(button => {
      button.querySelector('img').style.width = 'auto';
    })
  }

} */