
function profile(){
    var element = document.getElementById('profile-card');
    var modal = document.getElementById('profile-modal');
    modal.classList.toggle('show');
    element.classList.toggle('show');
   
    
}

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










/*
  if (formsetCount > 1) {
    deleteBtns.forEach(btn=>{
      const formsetId = btn.getAttribute('data-formset-id');
      if(formsetId === 'None'){
        formsetRow.remove();
        formset.querySelector('#id_biographyfacts_set-TOTAL_FORMS').value = formsetCount - 1;
        console.log(formsetId);
      }
      else{
        const url = `/delete-biography/${formsetId}/`; // Change this to the URL for deleting the formset
        fetch(url, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken // You need to set the CSRF token here
          }
      })
      .then(response => {
        if (response.ok) {
          // The formset was successfully deleted, so remove the corresponding HTML element
          formsetRow.remove();
          formset.querySelector('#id_biographyfacts_set-TOTAL_FORMS').value = formsetCount - 1;
          //window.location.href = `/create_biography/${deceased_url}/`
          //setTimeout(function() {
          //  location.reload();
        //}, 1000);
        //var edit = document.getElementById('edit-container');
        //edit.classList.add('show');
        } 
        else {
            // Handle the error if the formset wasn't deleted
            console.log('not deleted.......!');
        }
      })
      .catch(error => {
          // Handle the error if the AJAX request failed
          console.log('ajax request failed!',error);
        
      });
      }
      
    });
    //formsetRow.remove();
    //formset.querySelector('#id_form-TOTAL_FORMS').value = formsetCount - 1;
  } */











/*



function deleteFormsetRow(event) {
  const formsetRow = event.target.closest('.formset-row');
  const formsetCount = parseInt(formset.querySelector('#id_form-TOTAL_FORMS').value);
  
  //const formsetId = deleteBtns.getAttribute('data-formset-id');
  const deceased_url = document.getElementById('deceased-id').value;
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

  deleteBtns.forEach(deleteBtn => {
  const formsetId = deleteBtn.getAttribute('data-formset-id');
  const url = `/delete-biography/${formsetId}/`; // Change this to the URL for deleting the formset
    if (formsetCount > 1) {
      fetch(url, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrftoken // You need to set the CSRF token here
              }
          })
          .then(response => {
              if (response.ok) {
                  // The formset was successfully deleted, so remove the corresponding HTML element
                  formsetRow.remove();
                  formset.querySelector('#id_form-TOTAL_FORMS').value = formsetCount - 1;
                  //window.location.href = `/create_biography/${deceased_url}/`
                  setTimeout(function() {
                    location.reload();
                }, 1000);
              } else {
                  // Handle the error if the formset wasn't deleted
                  console.log('not deleted!');
              }
          })
          .catch(error => {
              // Handle the error if the AJAX request failed
              console.log('ajax request failed!');
          });
    }
  })
  
}
 */


/*

// Get the formset container and add row button
const formsetContainer = document.getElementById('formset-container');
const addRowBtn = document.getElementById('add-formset-row-btn');

// Add event listener to add row button
addRowBtn.addEventListener('click', function() {
  // Get the number of forms in the formset
  const totalForms = document.getElementById('id_form-TOTAL_FORMS').value;

  // Create a new formset row with a unique prefix
  const newFormHtml = `
    <div class="box-a formset-form">
      <div class="card1">
          <input type="hidden" name="form-${totalForms}-id" id="id_form-${totalForms}-id">
          <input type="hidden" name="form-0-user" value="{{deceased.user.id}}">
          <input type="hidden" name="form-0-deceased" value="{{deceased.id}}">
          {{ formset.empty_form.as_p }}
      </div>
      <div class="card2 remove-formset-row-btn"><i class="fa-solid fa-gear"></i></div>
    </div>
  `;

  // Append the new formset row to the formset container
  formsetContainer.insertAdjacentHTML('beforeend', newFormHtml);

  // Update the TOTAL_FORMS value
  document.getElementById('id_form-TOTAL_FORMS').value = parseInt(totalForms) + 1;

  // Add event listener to new remove button
  const removeBtns = document.getElementsByClassName('remove-formset-row-btn');
  const lastIndex = removeBtns.length - 1;
  removeBtns[lastIndex].addEventListener('click', function() {
    this.parentNode.remove();

    // Update the TOTAL_FORMS value
    document.getElementById('id_form-TOTAL_FORMS').value = parseInt(totalForms) - 1;
  });
});

// Add event listener to existing remove buttons
const removeBtns = document.getElementsByClassName('remove-formset-row-btn');
for (let i = 0; i < removeBtns.length; i++) {
  removeBtns[i].addEventListener('click', function() {
    this.parentNode.remove();

    // Get the number of forms in the formset
    const totalForms = document.getElementById('id_form-TOTAL_FORMS').value;

    // Update the TOTAL_FORMS value
    document.getElementById('id_form-TOTAL_FORMS').value = parseInt(totalForms) - 1;
  });
}

 */

/*
// add formset on click
document.getElementById('add-formset-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // get formset template and count of existing formsets
    const template = document.getElementById('formset-template');
    const formsetCount = document.querySelectorAll('.formset-container').length;
    // replace '__prefix__' placeholder in template with formset count
    const html = template.innerHTML.replace(/__prefix__/g, formsetCount);
    // create new formset and append to container
    const div = document.createElement('div');
    div.classList.add('formset-container');
    div.innerHTML = html;
    document.getElementById('formset-container').appendChild(div);
    
    // add remove-form-btn event listener to new formset
    const removeBtn = div.querySelector('.remove-form-btn');
    removeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const formsetContainer = this.closest('.formset-container');
      const formsetCount = document.querySelectorAll('.formset-container').length;
      // only allow formset to be removed if there is more than one formset
      if (formsetCount > 1) {
        formsetContainer.parentNode.removeChild(formsetContainer);
        // update formset indices
        updateIndices();
      }
    });
  });
  
  // add remove-form-btn event listener to existing formsets
  const removeBtns = document.querySelectorAll('.remove-form-btn');
  removeBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const formsetContainer = this.closest('.formset-container');
      const formsetCount = document.querySelectorAll('.formset-container').length;
      // only allow formset to be removed if there is more than one formset
      if (formsetCount > 1) {
        formsetContainer.parentNode.removeChild(formsetContainer);
        // update formset indices
        updateIndices();
      }
    });
  }); */


  



  /*
function deleteFormsetRow(event) {
  const formsetRow = event.target.closest('.formset-row');
  const formsetCount = parseInt(formset.querySelector('#id_form-TOTAL_FORMS').value);
  
  if (formsetCount > 1) {
    formsetRow.remove();
    formset.querySelector('#id_form-TOTAL_FORMS').value = formsetCount - 1;
  }
} */

/*
const removeBtns = formset.querySelectorAll('.remove-formset-row');
const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
removeBtns.forEach(removeBtn => {
  console.log('hellllllo')
    removeBtn.addEventListener('click', () => {
        const formsetId = removeBtn.getAttribute('data-formset-id');
        const deceased_url = document.getElementById('deceased-id').value;
        const url = `/delete-biography/${formsetId}/`; // Change this to the URL for deleting the formset
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken // You need to set the CSRF token here
            }
        })
        .then(response => {
            if (response.ok) {
                // The formset was successfully deleted, so remove the corresponding HTML element
                const formsetRow = removeBtn.parentElement;
                formsetRow.remove();
                //window.location.href = `/create_biography/${deceased_url}/`
                setTimeout(function() {
                  location.reload();
              }, 1000);
            } else {
                // Handle the error if the formset wasn't deleted
                console.log('not deleted!');
            }
        })
        .catch(error => {
            // Handle the error if the AJAX request failed
            console.log('ajax request failed!');
        });
    });
}); */



/*

deleteBtns.forEach((btn) => btn.addEventListener('click', (event)=>{
  const formsetRow = event.target.closest('.formset-row');
  const formsetCount = parseInt(formset.querySelector('#id_form-TOTAL_FORMS').value);
 
  
  //const formsetId = deleteBtns.getAttribute('data-formset-id');
  const deceased_url = document.getElementById('deceased-id').value;
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  const formsetId = btn.getAttribute('data-formset-id');
  
  const url = `/delete-biography/${formsetId}/`; // Change this to the URL for deleting the formset
    if (formsetCount > 1) {
      console.log(formsetId === 'None');
      if(formsetId === 'None'){
        formsetRow.remove();
        formset.querySelector('#id_form-TOTAL_FORMS').value = formsetCount - 1;
      }
      else{
        fetch(url, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken // You need to set the CSRF token here
          }
      })
      .then(response => {
        if (response.ok) {
          // The formset was successfully deleted, so remove the corresponding HTML element
          formsetRow.remove();
          formset.querySelector('#id_form-TOTAL_FORMS').value = formsetCount - 1;
          //window.location.href = `/create_biography/${deceased_url}/`
          setTimeout(function() {
            location.reload();
        }, 1000);
        } 
        else {
            // Handle the error if the formset wasn't deleted
            console.log('not deleted.......!');
        }
      })
      .catch(error => {
          // Handle the error if the AJAX request failed
          console.log('ajax request failed!',error);
        
      });
      }
     
    }
  
})); */