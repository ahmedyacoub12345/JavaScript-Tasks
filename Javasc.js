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

//**********************************************************************************/

document.addEventListener('DOMContentLoaded', function () {
    const fontStyleSelect = document.getElementById('font-style');
    const fontSizeSelect = document.getElementById('font-size');
    const boldCheckbox = document.getElementById('bold');
    const italicCheckbox = document.getElementById('italic');
    const underlineCheckbox = document.getElementById('underline');
    const textDiv = document.getElementById('textproperties');

    function applyStyles() {
        let fontStyle = fontStyleSelect.value;
        let fontSize = fontSizeSelect.value;
        let fontWeight = boldCheckbox.checked ? 'bold' : 'normal';
        let fontStyleCSS = italicCheckbox.checked ? 'italic' : 'normal';
        let textDecoration = underlineCheckbox.checked ? 'underline' : 'none';

        textDiv.style.fontFamily = fontStyle;
        textDiv.style.fontSize = fontSize;
        textDiv.style.fontWeight = fontWeight;
        textDiv.style.fontStyle = fontStyleCSS;
        textDiv.style.textDecoration = textDecoration;
    }

    fontStyleSelect.addEventListener('change', applyStyles);
    fontSizeSelect.addEventListener('change', applyStyles);
    boldCheckbox.addEventListener('change', applyStyles);
    italicCheckbox.addEventListener('change', applyStyles);
    underlineCheckbox.addEventListener('change', applyStyles);

    applyStyles();
});