const container = document.querySelector(".container")
const nav = document.querySelector('nav')
const productsList = document.querySelector('#productsList')
const generalList = document.querySelector('#generalList')

const getAndDisplayJson = async () => {
    const res = await fetch('https://dummyjson.com/products/?limit=5');
    const data = await res.json();
    // console.log(data.products[1].title)
    displayJsonTest(data)
    displayDescription(data)
}


const displayJsonTest = async (data) => {
    console.log("😁",data)  
    for (let i = 0; i < data.products.length; i++) {

        const newLi = document.createElement('li')
        const newLink = document.createElement('a')

        newLink.textContent = data.products[i].title
        newLink.setAttribute('href', 'descriptions.html')
        newLi.appendChild(newLink)
        productsList.appendChild(newLi)
        productsList.style = "color: white;"
    }
}
getAndDisplayJson()

const displayDescription = async (data) => {
    console.log('😋😋', data)
    for (let i = 0; i < data.products.length; i++){

        const newDescriptions = document.querySelector('.descriptions')
        const newH3 = document.createElement('h3')
        const newLink = document.createElement('a')
        newLink.setAttribute('href', '#')
        
        newH3.innerText = data.products[i].title
        newH3.style = "font-style: italic; font-size: 2rem;"
        
        const newParagraph = document.createElement('p')
        newParagraph.textContent = data.products[i].description


        newDescriptions.appendChild(newH3)
        
        newLink.appendChild(newH3)
        newDescriptions.appendChild(newLink)
        newDescriptions.appendChild(newParagraph)
        newDescriptions.style = "display: flex; flex-direction: column; align-items: center; width: 800px; margin: auto; font-size: 1.5rem;"
        
        const newImg = document.createElement('img')
        newImg.setAttribute('src', data.products[i].images)
        newImg.innerText = data.products[i].images
        newImg.style = "width: 200px; height: 300px;"
        newDescriptions.appendChild(newImg)

        const newPrice = document.createElement('p')
        newPrice.innerText = (data.products[i].price + "€")
        newDescriptions.appendChild(newPrice)
        newPrice.style = "width: 800px; font-size: 2rem; text-align: center; font-weight: bold; font-style: italic;"

        const newBtn = document.createElement('button')
        newBtn.style = "background-color: lightblue; height: 5rem; padding-top: 5px; box-shadow: 5px 10px #888888; border-radius: 50px 20px;"
        newBtn.appendChild(newPrice)
        newDescriptions.appendChild(newBtn)
    }
}