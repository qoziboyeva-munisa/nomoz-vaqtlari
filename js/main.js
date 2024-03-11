
const navForm = document.querySelector("#navForm")
const navinput = document.querySelector("#navinput")
const navbtn = document.querySelector("#navbtn")
const navitem = document.querySelector("#navitem")
const headertext = document.querySelector("#headertext")
const errorText = document.querySelector(".error__text")
const text = document.querySelectorAll(".header__text")

const tong = document.querySelector('#tong')
const quyosh = document.querySelector('#quyosh')
const peshin = document.querySelector('#peshin')
const asr = document.querySelector('#asr')
const shom = document.querySelector('#shom')
const hufton = document.querySelector('#hufton')

navForm.addEventListener("submit", function(e){
    e.preventDefault();
    let apiKey = '6b290b6d66bdcadb91913d71c51d257e'
    fetch(`https://islomapi.uz/api/present/day?region=${navinput.value}&units=metric&appid${apiKey}`)
    .then(res => res.json())
    .then(data =>{
        errorText.style.display = "none"
        tong.innerHTML =  `${data.times.tong_saharlik}`,
        quyosh.innerHTML = `${data.times.quyosh}`,
        peshin.innerHTML = `${data.times.peshin}`,
        asr.innerHTML = `${data.times.asr}`,
        shom.innerHTML = `${data.times.shom_iftor}`,
        hufton.innerHTML = `${data.times.hufton}`
        }
        ).catch((error)=>{
            errorText.style.display = "block"
            errorText.textContent = "Shahar nomi xato!"

        })

})

navForm.addEventListener("submit", function(e){
    e.preventDefault();
    let apiKey = '7639f5cd4da89691622ae7276bc486df'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${navinput.value}&units=metric&appid=${apiKey}`)
    .then(res => res.json())    
    .then(data =>
        navitem.innerHTML = `<p class="text">Harorati: ${data.main.temp}<sup>o</sup></p>
        <p class="text">Havo holati: ${data.weather[0].description}</p>
        <p class="text">Lon: ${data.coord.lon}</p>
        <p class="text">Lat: ${data.coord.lat}</p>`
        ).catch((error)=>{
            console.log("xato")
        })
    
})
