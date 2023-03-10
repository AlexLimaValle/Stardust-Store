const laptops = [
    {
        name:"HP ENVY 15-EP1065",
        descripcion:'i7 11800H - 15.6" - 32gb ram - 1tb SSD - Nvidia GeForce RTX3060 - Procesador 8 nucleos - Lector de huella - Pantalla tactil',
        marca:"hp",
        precio:430000,
        oferta:500000,
        tipo:"ofertas",
        img:"https://nl.outlet-pc.com/373636-large_default/hp-envy-15-ep0082nf-i9-10885h-32gb-2ssd-156-rtx2060-6gb-w10-touchscreen-refurbished.jpg",
    },
    {
        name:"MSI GF65 THIN 10UE-213",
        descripcion:'i5 10500H - 15.6" - 16gb ram - 512gb SSD - Nvidia GeForce RTX3060 - 144hz - Full HD',
        marca:"msi",
        precio:270000,
        oferta:300000,
        tipo:"ofertas",
        img:"https://cdn.shopify.com/s/files/1/0228/7629/1136/products/GF65TTHIN30XX-12_2000x_57c5b0e1-fde4-4601-b924-5bf32f861733_1200x.png?v=1627486137",
    },
    {
        name:"ACER NITRO 5",
        descripcion:'i9 11900H - 15.6" - 32gb ram - 512gb SSD + 1tb HDD - Nvidia GeForce RTX3060 - Procesador 8 nucleos - 144hz - Full HD',
        marca:"acer",
        precio:520000,
        oferta:560000,
        tipo:"ofertas",
        img:"https://th.bing.com/th/id/OIP.ZuqDJbCeeFgRZkokNG9Q-QHaHa?pid=ImgDet&rs=1",
    },
    {
        name:"LENOVO LEGION S7 15ACH6",
        descripcion:'Ryzen 9 5900HX - 15.6" - 32gb ram - 1tb SSD - Nvidia GeForce RTX3060 - Procesador 8 nucleos - 165hz - Full HD',
        marca:"lenovo",
        precio:493000,
        oferta:520000,
        tipo:"ofertas",
        img:"https://th.bing.com/th/id/OIP.qUn3rh4hmCVc9lCzEfGN6AHaHa?pid=ImgDet&rs=1",
    },
    {
        name:"ASUS TUF FX516PM-211",
        descripcion:'i7 11370H - 15.6" - 16gb ram - 1tb SSD - Nvidia GeForce RTX3070 - 240hz - Full HD',
        marca:"asus",
        precio:520000,
        oferta:570000,
        tipo:"ofertas",
        img:"https://mobilestore.ec/wp-content/uploads/2021/04/Asus-TUF-FX516PM-211.TF15-Mobile-Store-Ecuador-768x768.jpg",
    },
    {
        name:"LENOVO YOGA C740",
        descripcion:'i7 1165G7 - 15.6" - 16gb ram - 1 tb SSD - Pantalla IPS - Full HD - Tactil - Rotacion 360 grados - Intel Iris Plus Graphics',
        marca:"lenovo",
        precio:310000,
        oferta:350000,
        tipo:"ofertas",
        img:"https://th.bing.com/th/id/R.c5e63dff5b3fac76815dbcd99b9cafd5?rik=2604QLXkIykPOQ&pid=ImgRaw&r=0",
    },
    {
        name:"LENOVO IDEAPAD FLEX 5 15ITL05",
        descripcion:'i7 1165G7 - 15.6" - 16gb ram - 1tb SSD - Nvidia GeForce MX450 - 4K Ultra HD - Aluminio - Pantalla tactil - Rotacion 360 grados',
        marca:"lenovo",
        precio:330000,
        oferta:380000,
        tipo:"ofertas",
        img:"https://th.bing.com/th/id/R.e7d66db983cb20e7e6f7d43bea6972d9?rik=7%2br72DrsFzMgZw&pid=ImgRaw&r=0",
    },
    {
        name:"DELL INSPIRON 15 3511",
        descripcion:'i7 1165G7 - 32 GB RAM - 1 TB SSD - PANTALLA 15.6 FULL HD TECLADO ESPAÑOL - PROCESADOR 11VA GENERACION - PLACA INTEGRADA IRIS XE',
        marca:"dell",
        precio:270000,
        oferta:300000,
        tipo:"ofertas",
        img:"https://th.bing.com/th/id/R.761a58604565625ae16ebb195e476e95?rik=OSqDI5%2b99LLcFw&pid=ImgRaw&r=0",
    },

]

/* 
        name:
        descripcion:
        marca:
        precio:
        oferta
        tipo:
        img:

*/


// agregar un toggle al bar para esconder y sacar el nav

const headerBarIcon = document.querySelector(".header__barIcon");
const nav = document.querySelector(".nav");

headerBarIcon.addEventListener("click",()=>{
    nav.classList.toggle("nav__close");
})

//cerrar el nav:
const navX = document.querySelector(".nav__x");
navX.addEventListener("click",()=>{
    nav.classList.toggle("nav__close");
})
// -------------------------------------------

//carrito close and open
const headerCart = document.querySelector(".header__cart");
const headerBuy = document.querySelector(".header__buys");
const headerBuysX = document.querySelector(".header__buys-x")

headerCart.addEventListener("click",()=>{
    headerBuy.classList.toggle("header__buys-none");
})

headerBuysX.addEventListener("click",()=>{
    headerBuy.classList.toggle("header__buys-none");
})

// -------------------------------------------------

// armado de carrusel  de imagenes:

const headerSliders = document.querySelector(".header__slider");
const headerSlider = document.querySelector(".header__public");
const headerDirectionLeft = document.querySelector(".header__direction-left");
const headerDirectionRight = document.querySelector(".header__direction-right");
const headerCircle = document.querySelectorAll(".header__circle");

let sliderMaxWidth = headerSlider.clientWidth;
let ejeX = 0;
let circleColor = 0;

headerCircle[circleColor].style.color = "red";

headerDirectionRight.addEventListener("click",()=>{
    if(ejeX <= sliderMaxWidth){
        circleColor += 1;
        headerSliders.style.transform = `translateX(-${ejeX += sliderMaxWidth}px)`;
        headerCircle[circleColor-1].style.color = "black";
        headerCircle[circleColor].style.color = "red";
    }else{
        ejeX = 0;
        circleColor = 0;
        headerSliders.style.transform = `translateX(-${ejeX}px)`;
        headerCircle[circleColor].style.color = "red";
        headerCircle[headerCircle.length-1].style.color = "black";
    }
});

headerDirectionLeft.addEventListener("click",()=>{
    if(ejeX <= 0){
        headerSliders.style.transform = `translateX(-${ejeX = sliderMaxWidth*2}px)`;
        headerCircle[circleColor].style.color = "black";
        headerCircle[headerCircle.length-1].style.color = "red";
        circleColor = 2;
    }else{
        circleColor -= 1;
        headerSliders.style.transform = `translateX(-${ejeX-=sliderMaxWidth}px)`;
        headerCircle[circleColor].style.color = "red";
        headerCircle[circleColor+1].style.color = "black";
    }
})








const ofertsProduct = document.querySelector(".oferts__product");
let ofertsProductFragment = document.createDocumentFragment(); 

// esta funcion sirve para poner un letrero de oferta solo a los articulos que correspondan a la misma clasificacion mencionada
const anucioDeOfertas = (tipo,clase)=>{
    if(tipo == "ofertas"){
        return `<img src="./img/ofertas.png" class="${clase}__${tipo}-letrero" alt="ofertas"/>`
    }
}

const presentacion = (tipo,fragmento,clase)=>{
    const lista = laptops.filter(e => e.tipo == tipo);
    lista.forEach(e => {
        const {name,descripcion,marca,precio,oferta,tipo,img} = e;
        let product = document.createElement("DIV")
        product.setAttribute("class",`${clase}__${tipo}`);
        product.innerHTML = `
            <img class="${clase}__${tipo}-logo" src="./img/${marca}-icon.png" width=40px height=40px alt="${marca}"/>
            <img class="${clase}__${tipo}-img" src="${img}" width=40px height=40px alt="${name}"/>
            <h2 class="${clase}__${tipo}-h2">${name}</h2>
            <p class="${clase}__${tipo}-description">${descripcion}</p>
            <p class="${clase}__${tipo}-precio">$ ${precio}</p>
            <p class="${clase}__${tipo}-oferta">$ ${oferta}</p>
            <button class="${clase}__${tipo}-button">Comprar</button>
            ${anucioDeOfertas(tipo,clase)}
        `;
        fragmento.appendChild(product);
    })
}

presentacion("ofertas",ofertsProductFragment,"oferts");
ofertsProduct.appendChild(ofertsProductFragment);


const headerSolapa = document.querySelector(".header__solapa");

window.addEventListener("scroll",()=>{
    let scrollEjeY = window.scrollY;
    (scrollEjeY > 600)?headerSolapa.style.bottom = "0%":headerSolapa.style.bottom = "100%"
})