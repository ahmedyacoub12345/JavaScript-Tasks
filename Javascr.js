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



function creation(ob,cardid) {
    const container = document.getElementById(cardid); 
    const p = document.createElement('p');
    for (let key in ob) {
        const line = document.createElement('p');
        line.innerHTML = ob[key];
        p.appendChild(line);
    }
    container.appendChild(p);
}
const Fname = document.getElementById("inp1");
const Lname = document.getElementById("inp2");
const Bdate = document.getElementById("inp3");
const email = document.getElementById("inp4");
const emailConf = document.getElementById("inp5");
const pass = document.getElementById("inp6");
const passConf = document.getElementById("inp7");
const namePat = /^[a-zA-Z]+/;
const datePat = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
const EmailPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passPat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const sp1 = document.getElementById("sp1");
const sp2 = document.getElementById("sp2");
const sp3 = document.getElementById("sp3");
const sp4 = document.getElementById("sp4");
const sp5 = document.getElementById("sp5");
const sp6 = document.getElementById("sp6");
const sp7 = document.getElementById("sp7");

Fname.addEventListener('input', function () {
    const inp_V = Fname.value.trim();
    if (!namePat.test(inp_V)) {
        sp1.innerHTML = "Numbers and Symbols are not allowed";
        sp1.style.color = "red";
    } else {
        sp1.innerHTML = "";
    }
});

Lname.addEventListener('input', function () {
    const inp_V = Lname.value.trim();
    if (!namePat.test(inp_V)) {
        sp2.innerHTML = "Numbers and Symbols are not allowed";
        sp2.style.color = "red";
    } else {
        sp2.innerHTML = "";
    }
});

Bdate.addEventListener('input', function () {
    if (!datePat.test(Bdate.value)) {
        sp3.innerHTML = "The format should be DD/MM/YY";
        sp3.style.color = "red";
    } else {
        sp3.innerHTML = "";
    }
});

email.addEventListener('input', function () {
    if (!EmailPat.test(email.value)) {
        sp4.innerHTML = "The e-mail is not valid";
        sp4.style.color = "red";
    } else {
        sp4.innerHTML = "";
    }
});

emailConf.addEventListener('input', function () {
    if (email.value !== emailConf.value) {
        sp5.innerHTML = "The e-mail not matching";
        sp5.style.color = "red";
    } else {
        sp5.innerHTML = "";
    }
});

pass.addEventListener('input', function () {
    if (!passPat.test(pass.value)) {
        sp6.innerHTML = "The passwords not valid";
        sp6.style.color = "red";
    } else {
        sp6.innerHTML = "";
    }
});

passConf.addEventListener('input', function () {
    if (pass.value !== passConf.value) {
        sp7.innerHTML = "The passwords not matching";
        sp7.style.color = "red";
    } else {
        sp7.innerHTML = "";
    }
});