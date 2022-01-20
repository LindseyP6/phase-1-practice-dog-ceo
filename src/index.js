// document.addEventListener("DOMContentLoaded", fetchDogImages)
// document.addEventListener("DOMContentLoaded", fetchBreeds)
//URLs
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetchBreeds();
fetchDogImages();

//CHALLENGE 1: Fetch dog images from API
function fetchDogImages () {
    fetch(imgUrl)
    .then(response => response.json())
    .then(dogObj => {
        displayDogImages(dogObj.message);
    });
}

//for each to display images to dogContainer
const dogContainer = document.querySelector("#dog-image-container")
function displayDogImages(dogImgArray) {
    dogImgArray.forEach(image => {
        const imgDisplay = document.createElement("img")
        imgDisplay.src = image
        imgDisplay.style.width = "200px"
        imgDisplay.style.height = "200px"
        
        dogContainer.append(imgDisplay)
    })
}

//CHALLENGE 2: Fetch dog breeds from API
const dogBreedUl = document.querySelector("#dog-breeds")

function fetchBreeds() {    
    fetch(breedUrl)
    .then(response => response.json())
    .then(dogBreedObj => {
        displayDogBreeds(Object.keys(dogBreedObj.message));
        //this turns the Object of message into an array of its keys!!!
    });
}

function displayDogBreeds(breedArray) {
    breedArray.forEach(breed => {
        const li = document.createElement("li")
        li.innerText = breed
        li.addEventListener("click", changeLiColor)
        
        dogBreedUl.append(li)
    })
}

function changeLiColor(event) {
    event.target.style.color = "#a3d9c9"
    event.target.style.backgroundColor = "#448f99"
    event.target.style.fontSize = "25px"
}

