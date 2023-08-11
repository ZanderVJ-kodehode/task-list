
// getting the documents from html
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const errorMessage = document.getElementById("errorMessage");

// making the button so when i press it it will sort from a to b and if i press it again it will go from b to a.
const sortA = document.getElementById("sortA");

let ascending = true; 

sortA.addEventListener("click", () => {
    const items = Array.from(listContainer.children);
    
    if (ascending) {
        items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    } else {
        items.sort((a, b) => b.textContent.localeCompare(a.textContent));
    }
    
    ascending = !ascending; // Toggle the sorting order
    
    for (const item of items) {
        listContainer.appendChild(item);
    }
});





// making the add task

function addTask(){

    // if inputBox is emty  the alert will happen
    if (inputBox.value.length < 3) {
        errorMessage.textContent = "You need to add at least 3 characters!";
    } else
    {
        // if ther is text in the inputBox it will make a "li" 
        // the inputBox.value it will be what was in the input
        // making a span in the li wher a button happens.
        errorMessage.textContent = "";
        let li = document.createElement("li");
        // li.innerHTML = inputBox.value;
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        // inputBox.value = "";
    }

    // this will make the inputBox emty after the task. and savedata() makes it saved
    inputBox.value = "";
    saveData();
}

// making the click event.
// if target is LI it will toggle "checked" that i have changed in the css
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    // id you press the "SPAN" the target will be removed
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);




// making the locas storage for saving

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}


// making the showtask to show what had been saved
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}


// this will make is so it shows what i have saved all the time
showTask()





// onkeydown="keyPress(event)"

// function keyPress(event){
//     if (event.key === "Enter" ){
//         AddTask();
//     }
// }






// this is adding the event of the "ENTER" so when i press it the AddTask haopens.

document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        addTask()
    }
  });