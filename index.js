// Array containing suggested fields for search
let suggestedFields = [
    'Web Design Tutorials',
    'HTML',
    'CSS',
    'Github',
    'Javascript',
    'CSS Frameworks',
    'React JS',
]

// Reference to the box element in the DOM
const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('search-box');

// Event handler for keyup event on the input box
inputBox.onkeyup = function() {
    let result = []; // Array to store filtered results
    let input = inputBox.value; // Get the current value of the input box

    if(input.length){
        // Filter suggestedFields based on input
        result = suggestedFields.filter((fields)=>{
           return fields.toLowerCase().includes(input.toLowerCase()); // case-insensitive search
        })
        console.log(result); // log to the console
    }
    // call display function to update UI with filtered results
    display(result);

    // clear results box if there are no matching results
    if(!result.length) {
        resultBox.innerHTML = '';
    }
}
// function to display filtered results
function display(result){
    //generate HTML content for each filtered result
    const content = result.map((list)=>{
        // create list items with onclick event
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    // update result box with unordered list containing filtered results
    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function selectInput(list){
    inputBox.value = list.innerHTML; // set input box value to the selected result
    resultBox.innerHTML = ''; // clear result box
}
