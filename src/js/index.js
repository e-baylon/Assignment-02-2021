 import data from '../assets/data/toDoItems.json'
 import {Router} from './routes/router'

 const app = document.querySelector("#app");

 const onAppInit = async function(e){
    console.log(window.location.pathname)
    Router(window.location.pathname)
}

window.addEventListener('load', onAppInit)


 console.log(data)