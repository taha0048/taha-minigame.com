const randButton = document.getElementById('rand');
const yesButton = document.querySelector('button:first-of-type');
const body = document.body;

function moveButton() {
    const maxX = window.innerWidth - randButton.offsetWidth;
    const maxY = window.innerHeight - randButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    randButton.style.left = `${randomX}px`;
    randButton.style.top = `${randomY}px`;
}

randButton.addEventListener('click', () => {
    body.style.backgroundImage = "url('FREE PFP!!.jpeg')";
    moveButton();
});

yesButton.addEventListener('click', () => {
    body.style.backgroundImage = "url('téléchargement.jpeg')";
    setTimeout(() => {
        alert('MARRY ME !!!');
    }, 100); // Delay the alert to ensure the background change is visible first
});
