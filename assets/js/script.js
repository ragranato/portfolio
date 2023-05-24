
const toggle = (element) => {
    const about = document.getElementById(element);
    if (about.style.display === 'none') {
        about.style.display = 'flex';
    } else {
        about.style.display = 'none';
    }
}

const navBar = () => {
    let x = document.getElementById("nav-list");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}



