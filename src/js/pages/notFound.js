import makeElement from "../utils/makeElement"

const pageNotFound = function() {

    console.log('page not found')
    const page = document.createElement('div')

    let headerTemplate = `
        <header class="center-in-page">
           <div>
             <span></span>
             <div>
             <h1>Oops's looks like we lost that page <a href="/toDoPage">back to todo page</a> </h1>
            
             </div>
            </div>
        
        </header>
    `
    const pageHeader = makeElement(headerTemplate)



    page.append(pageHeader)

    return page
}

export default pageNotFound