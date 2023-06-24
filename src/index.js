import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import Notiflix from 'notiflix';

let select = document.getElementsByClassName('breed-select')[0]
let loader = document.getElementsByClassName('loader')[0]
let error = document.getElementsByClassName('error')[0]

window.onload = async () => {
    loader.style.display = 'block'
    let breeds = await fetchBreeds()
    loader.style.display = 'none'

    if(breeds.data == undefined) {
       Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');

        select.style.display = 'none' 
        return
    }

    breeds.data.forEach(cat => {
        let element = document.createElement('option')
        element.innerHTML = cat.name
        element.setAttribute('value', cat.id)
    
        select.appendChild(element)
    });
}


select.onchange = async () => {
    loader.style.display = 'block'
    let cat = await fetchCatByBreed(select.value)
    console.log(select.value)
    console.log(cat)
    loader.style.display = 'none'

    if (cat.data[0].breeds == undefined || cat.data[0].breeds.length == 0 || cat.data == undefined) {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
       
        select.style.display = 'none' 
        img.style.display = 'none'
        return
    }

    let img = document.getElementsByClassName('catImg')[0]
    img.setAttribute('src', cat.data[0].url)
    img.style.display = 'block'
    let h1 = document.getElementsByClassName('title')[0]
    h1.innerHTML = cat.data[0].breeds[0].name
    let description = document.getElementsByClassName('description')[0]
    description.innerHTML = cat.data[0].breeds[0].description
    let temperament = document.getElementsByClassName('temperament')[0]
    temperament.innerHTML = cat.data[0].breeds[0].temperament
}