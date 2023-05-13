const dogImage = document.getElementById('dogImage');
const dogBtn = document.getElementById('dogBtn');
const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json.message)
        dogImage.innerHTML = `<img src = '${json.message}' />`
    })    
}
dogBtn.onclick = () => getNewDog();