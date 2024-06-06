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

