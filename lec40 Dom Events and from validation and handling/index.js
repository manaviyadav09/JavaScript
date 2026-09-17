

// // let div = document.querySelector("#reveal-gift")
// // let h1 = document.querySelector("#gift")
// // let btn = document.querySelector("btn")
// // function revealGift (event){
// //     console.log(event);
// //     console.log(event.type);
// //     console.log("target", event.taget);
// //     console.log("currentTarget", event.currentTarget);
// // h1.classList.remove("hidden")
// // h1.classList.remove("visible")
// // }


// // btn.addEventListener('click', () => {
// //     console.log("hellooo hello mic checkkk");
// // })

// // div.addEventListener('click' , revealGift)

// // btn.addEventListener('click', (e) =>  {
// //     console.log(e);
// //     // console.log(e.key);
// //     // console.log(e.clientX);
// //     // console.log(e.clientY);
// // })




// let outter = document.querySelector("#outter")
// let inner = document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")
// let body = document.querySelector("body")


// body.addEventListener('click',(e) =>{
//     e.stopPropagation()
//     console.log("body");
// } )


// outter.addEventListener('click',(e) =>{
//      e.stopPropagation()
//     console.log("outter");
//  })


// inner.addEventListener('click',(e) =>{
//      e.stopPropagation()
//     console.log("inner");
// })


// btn2.addEventListener('click',(e) =>{
//      e.stopPropagation()
//     console.log("btn2");
// })



let body = document.querySelector("body")

// // body.appendChild(div)
// // body.appendChild(div2)

// body.append(div , div2)  // insert in last of body
// // body.prepend(div , div2)  // insert in start of body

let products = [
    {
        name: "Iphone 20",
        price: 12342,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "Samsung 15",
        price: 62324,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "MI 23",
        price: 35354,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "Poco 10",
        price: 43534,
        imgUrl: "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "Lava 12",
        price: 53422,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
]


let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");

    // const upperDiv = document.createElement("div")
    // const lowerDiv = document.createElement("div")

    // const img = document.createElement("img")

    // img.setAttribute("src" , "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg")

    // upperDiv.append(img)

    // card.append(upperDiv)

    // productList.append(card)       


    const dltBtn = document.createElement("button")
    dltBtn.textContent = "Remove product btn"

    dltBtn.addEventListener("click", (e) => {
        card.remove()
    })



    card.innerHTML = `<div>
       <img src=${product.imgUrl} alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>`


    card.append(dltBtn)

    productList.append(card)

})

