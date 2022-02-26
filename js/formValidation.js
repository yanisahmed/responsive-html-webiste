const elm = document.getElementById('btnSubmit');
elm.addEventListener('click', validateData);


function validateData(e) {
    e.preventDefault();
    console.log('form clicked')
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let error = '';
    if (!name) {
        error = "Name must not be empty";
        errorElm = document.getElementById('name-error');
        errorElm.innerText = error;
        document.getElementById('message-success').innerText = '';
    }
    else if (!email) {
        error = "Email must not be empty";
        errorElm = document.getElementById('email-error');
        errorElm.innerText = error;
        if (name) {
            document.getElementById('name-error').innerText = '';
        }
        document.getElementById('message-success').innerText = '';
    }
    else if (!message) {
        error = "message must not be empty";
        errorElm = document.getElementById('message-error');
        errorElm.innerText = error;
        if (name) {
            document.getElementById('name-error').innerText = '';
        } else if (email) {
            document.getElementById('email-error').innerText = '';
        }
    }
    else {
        success = "message has been sent successfully, Thank you.";
        successElm = document.getElementById('message-success');
        successElm.innerText = success;
        if (name && email && message) {
            document.getElementById('name-error').innerText = '';
            document.getElementById('email-error').innerText = '';
            document.getElementById('message-error').innerText = '';
        }
    }
}