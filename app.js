const parent =  document.querySelector('.modal-parent');
const btn = document.querySelector('button');
const X = document.querySelector('.X');
const section = document.querySelector('section');
btn.addEventListener('click', appear);

function appear() {
    parent.style.display = 'block';
    section.style.filter = 'blur(10px)';
}

X.addEventListener('click', disappearX);

function disappearX() {
    parent.style.display = 'none';
    section.style.filter = 'none';
}

parent.addEventListener('click', disappearParent);

function disappearParent(e) {
    if (e.target.className == "modal-parent") {
        parent.style.display = 'none';
        section.style.filter = 'none';
    }
}