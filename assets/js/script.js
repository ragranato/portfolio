let about = document.getElementById('about-article');
let aboutHeader = document.getElementById('about-header');

const reveal = (element) => {
    element.style.display = 'block';
}

aboutHeader.onclick = reveal(about);