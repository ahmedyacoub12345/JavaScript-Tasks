document.getElementById("one").addEventListener("mouseover",mOver);
document.getElementById("one").addEventListener("mouseout",mOut);
function mOver(){
    document.getElementById("one").innerHTML="Can i help you ?";
}
function mOut(){
    document.getElementById("one").innerHTML="Hello World!";
}


//********************************************************************************* */

function change() {
    const imgselect = document.getElementById('Selector');
    const imageSrc = imgselect.value;
    document.getElementById('img').src = imageSrc;
}

//********************************************************************************* */

let x= document.getElementById("Fontstyle");
let p =document.getElementById("P");
x.addEventListener('change',function (){
    p.style.fontFamily=x.value;

})
let m =document.getElementById("Fontsize");
let n= document.getElementById("P")
m.addEventListener('change',function(){
    n.style.fontSize=m.value;
})

let bold=document.getElementById("bold");
bold.addEventListener('change',function(){
    if(this.checked){
        n.style.fontWeight=bold.value;
    }else{
        n.style.fontWeight='normal';

    }
});

let italic = document.getElementById("italic");
italic.addEventListener('change',function(){
    if (this.checked){
        n.style.fontStyle=italic.value;
    }
    else{
        n.style.fontStyle="normal";
    }
});

let underline = document.getElementById("underline");
underline.addEventListener('change',function(){
    if(this.checked){
        n.style.textDecoration=underline.value;
    }
    else{
        n.style.textDecoration="none";
    }
});

//********************************************************************************* */


let square = document.getElementById("square");
square.addEventListener('click',function(){
    square.style.backgroundColor= "red";
});


//********************************************************************************* */



function validateForm() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    let errorPassword1 = '';
    let errorPassword2 = '';

    // Validate first password
    if (password1.length < 6) {
        errorPassword1 = 'Password must be at least 6 characters long.';
    }

    // Validate password confirmation
    if (password2 !== password1) {
        errorPassword2 = 'Passwords must match.';
    }

    // Display error messages
    document.getElementById('errorPassword1').innerText = errorPassword1;
    document.getElementById('errorPassword2').innerText = errorPassword2;

    // Show or hide submit button based on errors
    if (errorPassword1 === '' && errorPassword2 === '') {
        document.getElementById('submitBtn').style.display = 'block';
    } else {
        document.getElementById('submitBtn').style.display = 'none';
    }
}
