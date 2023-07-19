let textBox = document.getElementById('text-box');
let colorBox = document.getElementById('color');
let text = document.getElementById('text');
let font = document.getElementById('font');
let letterSpacing = document.getElementById('ls');
let textTrans = document.getElementById('tt');
let fontSize = document.getElementById('fs');

function defaultText() {
    text.style.color = colorBox.value;
    text.style.fontSize = fontSize.value + 'px';
    text.textContent = textBox.value;
}

defaultText();

textBox.oninput = function () {
    text.textContent = textBox.value;
}

colorBox.oninput = function () {
    text.style.color = colorBox.value;
}

font.oninput = function () {
    text.style.fontFamily = font.value;
}

letterSpacing.oninput = function () {
    text.style.letterSpacing = letterSpacing.value + 'px';
}

textTrans.oninput = function () {
    text.style.textTransform = textTrans.value;
}

fontSize.oninput = function () {
    text.style.fontSize = fontSize.value + 'px';
}


// Fetch the JSON file
fetch('projects/html2canvas/assets/fonts/fonts.json')
    .then(response => response.json())
    .then(data => {
        // Iterate over the font families
        data.fontFamilies.forEach(fontFamily => {
            let fontName = document.createElement('option');
            fontName.textContent = fontFamily;
            fontName.value = fontFamily;
            font.appendChild(fontName);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });