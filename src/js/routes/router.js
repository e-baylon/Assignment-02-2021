import homePage from '../pages/home'
import notFound from "../pages/notFound";
import toDoPage from "../pages/toDoPage";
import deletePage from "../pages/delete/delete";


const routes = {
    "/": homePage,
    "/toDoPage":toDoPage,
    "/*":notFound,
    "/delete":deletePage
}


const Router = function(pathname,params=null){
    console.log(routes)
    const isValidRoute = Object.keys(routes).find(key=>key===pathname)
    const app = document.querySelector('#app')
    app.innerHTML=""
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    if (isValidRoute === undefined || isValidRoute ==="") {
        app.appendChild(notFound())
        console.log('undefined')
    } else {
        app.appendChild(routes[isValidRoute](params))
        console.log(routes)
        console.log('going')
    }

}

export {Router}