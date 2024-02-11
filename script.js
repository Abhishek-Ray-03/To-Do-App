let list=JSON.parse(localStorage.getItem("task"))||[];
display();
const ad=document.querySelector("#add");
ad.addEventListener('click',addToDo);
function addToDo() {
   let inputElement=document.querySelector("#todo");
   let inputval=inputElement.value;
   let timeElement=document.querySelector("#time");
   let inputTime=timeElement.value;
   if(!inputval) alert("Please mention a task!");
   else if(!inputTime) alert("Please choose a time slot!");
   else{
   list.push({item:inputval,due:inputTime});
   localStorage.setItem("task",JSON.stringify(list));
   inputElement.value="";
   timeElement.value="";
   display();}
}
function display() {
    let newHTML=``;
    for(let i=0;i<list.length;i++){
       newHTML+= `<div class="grid-cont">
       <span>${list[i].item}</span>
       <span>${list[i].due}</span>
       <button onclick="list.splice(${i},1);
        display();updateStorage();
       ">Remove</button>      
       </div>`;
    }
    let container=document.querySelector(".container");
    container.innerHTML=newHTML;
}
function updateStorage(){
   localStorage.setItem("task",JSON.stringify(list));
}
