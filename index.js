
const inputEl = document.getElementById("input-el");
const inputSaveBtn = document.getElementById("input-btn");
let myLeads = [];

inputSaveBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})


for(let i = 0; i < myLeads.length; i++){
    console.log(myLeads[i]);
}