window.addEventListener('DOMContentLoaded', (event) => {
    let citySearch = document.getElementById("citysearch")
    
    citySearch.addEventListener("click", clickButton)
    
    
    
    function clickButton(event) {
        let searchBar = event.target.previousElementSibling.value
        let node = document.createElement("list-group");                 // Create a <li> node
        let textnode = document.createTextNode("");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementsByClassName("myList").appendChild(node);
        event.preventDefault();
        
        
    }
    
});


