#!/ usr/bin/node

// Function to center a paragraph element vertically and horizontally
function centerParagraph(paragraphId) {
    const paragraph = document.getElementById(paragraphId);
    paragraph.style.textAlign = 'center';
    paragraph.style.position = 'absolute';
    paragraph.style.top = '50%';
    paragraph.style.left = '50%';
    paragraph.style.transform = 'translate(-50%, -50%)';
}

// Center the paragraphs
centerParagraph('guestMessage');
centerParagraph('guestInfo');
centerParagraph('welcomeMessage');


function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const spookyButton = document.getElementById('spookyButton');
    const darkModeButton = document.getElementById('darkModeButton');
    const screamModeButton = document.getElementById('screamModeButton');

    spookyButton.addEventListener('click', spooky);
    darkModeButton.addEventListener('click', darkMode);
    screamModeButton.addEventListener('click', screamMode);
}

// Call the main function when the DOM is ready
document.addEventListener('DOMContentLoaded', main);
