
const box = document.getElementById("box");
const list_container = document.getElementById("list-container");

function AddTask(){
    if(box.value === ''){
        alert('Please enter a task!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = box.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
       
    }
    box.value = "";
    saveData();

}
list_container.addEventListener("click", function(e){
if(e.target.tagName === "LI")
{
    e.target.classList.toggle("checked");
    saveData();
}else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}
},false);
function saveData(){
    localStorage.setItem("data",list_container.innerHTML);
}
function showTask(){

    list_container.innerHTML = localStorage.getItem("data");

}
showTask();