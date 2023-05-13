const about = document.getElementById('about-article');
const aboutHeader = document.getElementById('about-header');

console.log(about)

const reveal = (event) => {
    event.style.display = 'flex';
}

aboutHeader.onclick = reveal(about);


