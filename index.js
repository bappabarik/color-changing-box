let btn = document.querySelector('button');
btn.addEventListener('click', updatecolor);
function updatecolor(){
    let content = 
document.getElementsByClassName("container");
content[0].style.backgroundColor = "red";
}