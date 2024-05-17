

document.addEventListener('DOMContentLoaded', function() {
    
    // Fetch the file contents
    fetch('subject.txt')
        .then(response => response.text())
        .then(text => {
            // Display the file contents
            console.log(text);
        })
        .catch(error => {
            console.error('Error fetching subject.txt:', error);
        });
});


function getRandomItem(list) {

    const randomIndex = Math.floor(Math.random() * list.length);

    return list[randomIndex];
  }

function createNames() {
    

    
    let randomItem = getRandomItem(textList);
    console.log(randomItem);
















    //document.getElementById("names").textContent="newtext"; 
}
