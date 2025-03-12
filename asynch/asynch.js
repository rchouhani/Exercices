const container = document.querySelector(".container")
const nav = document.querySelector('nav')
const productsList = document.querySelector('#productsList')
const generalList = document.querySelector('#generalList')
const newDescriptions = document.querySelector('.descriptions')

const getAndDisplayJson = async (query="") => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();
    
    displayJsonTest(data)
    displayDescription(data)
}

const displayJsonTest = async (data) => {
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


const displayDescription = async (data) => {
    newDescriptions.innerHTML = ""
    for (let i = 0; i < data.products.length; i++){
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
        
        // const newImg = document.createElement('img')
        // newImg.setAttribute('src', data.products[i].images)
        // newImg.innerText = data.products[i].images
        // newImg.style = "width: 150px; height: 150px;"
        // newDescriptions.appendChild(newImg)

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

searchBar.addEventListener('input', function(){
        const searchBar = document.querySelector('#searchBar')
        const query = searchBar.value.trim()
        getAndDisplayJson(query)    
})

checkBoxPrice.addEventListener('click', function(){
    const checkBoxPrice = document.querySelector('#checkBoxPrice')
    const sortedPrice = checkBoxPrice.checked
    sortedPrice.sort((a,b) =>(a.getAndDisplayJson(price) < b.getAndDisplayJson(price)))
    getAndDisplayJson()
})
getAndDisplayJson()