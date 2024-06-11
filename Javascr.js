const url = "https://66681676f53957909ff67af8.mockapi.io/users/Animals";

const selector = document.getElementById("Animal");
const image = document.getElementById("image");

async function options() {
    
        const response = await fetch(url);
        const jsonData = await response.json();

        for (let i = 0; i < jsonData.length; i++) {
            const newoption = document.createElement("option");
            newoption.value = jsonData[i].id;
            newoption.textContent = jsonData[i].name; 
            selector.appendChild(newoption);
        }
        
        selector.addEventListener('change', (event) => {
            const selectId = event.target.value;
            const selectedAnimal = jsonData.find(animal => animal.id === selectId);
            if (selectedAnimal) {
                image.src = selectedAnimal.image;
            }
        });
        image.src = jsonData[0].image;

}

options();

// *******************************************************************



document.getElementById('Info').addEventListener('submit', function(event) {

    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        birthdate: document.getElementById('birthdate').value,
        image: document.getElementById('image').value,
        description: document.getElementById('description').value,
        major: document.getElementById('major').value,
        programmingLanguages: {
            html: document.getElementById('html').checked,
            css: document.getElementById('css').checked,
            js: document.getElementById('js').checked
        },
        siblingsNumber: document.getElementById('number').value,
        siblingsDescription: document.getElementById('descsibling').value
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    console.log('Form Data Saved:', formData);
});


// ***************************************************************************



function validateInputCustom(inputId, regex, errorMessage) {
    const input = document.getElementById(inputId);
    const errorSpan = document.getElementById(inputId + 's');
    if (!regex.test(input.value)) {
        errorSpan.style.visibility = 'visible';
    } else {
        errorSpan.style.visibility = 'hidden';
    }
}

function validateEmailMatchCustom() {
    const email1 = document.getElementById('email').value;
    const email2 = document.getElementById('email2').value;
    const errorSpan = document.getElementById('email2s');
    if (email1 !== email2) {
        errorSpan.style.visibility = 'visible';
    } else {
        errorSpan.style.visibility = 'hidden';
    }
}

function validatePassMatchCustom() {
    const pass1 = document.getElementById('pass').value;
    const pass2 = document.getElementById('pass2').value;
    const errorSpan = document.getElementById('pass2s');
    if (pass1 !== pass2) {
        errorSpan.style.visibility = 'visible';
    } else {
        errorSpan.style.visibility = 'hidden';
    }
}

function validateBirthDate() {
    const birthDate = document.getElementById('Bdate').value;
    const errorSpan = document.getElementById('bdates');
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!regex.test(birthDate)) {
        errorSpan.style.visibility = 'visible';
    } else {
        errorSpan.style.visibility = 'hidden';
    }
}