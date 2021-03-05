document.querySelector("#grandparent").addEventListener('click', (e) => {
    console.log("Grand Parent Clicked")
}, false);

document.querySelector("#parent").addEventListener('click', (e) => {
    console.log("Parent Clicked")
    e.stopPropagation();
}, false);

document.querySelector("#child").addEventListener('click', (e) => {
    console.log("Child Clicked")
}, false);