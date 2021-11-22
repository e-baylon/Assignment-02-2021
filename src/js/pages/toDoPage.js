import makeElement from "../utils/makeElement"
import toDoItem from "../components/toDoItem/toDoItem"
import toDoItems from '../../static/data/toDoItems'
import {Router} from "../routes/router"
import link from '../link/link'



const toDoPage = function() {

    const page = document.createElement('div')

    page.classList.add("to-do-container");

    

    
    

    let headerTemplate = `
        <header class="center-in-page">
           <div>
             <span></span>
             <div>
             <h1>toDoPage</h1>
            
             </div>
            </div>
        
        </header>
    `
    const pageHeader = makeElement(headerTemplate)

    page.append(pageHeader)

    fetchData()

    async function fetchData(){
        const result = toDoItems


        //each item in array makes toDoItem Element
        result.forEach((element) => {
            
            
            
            //app.appendChild(toDoItem(id="aw45f25v", category="School Category", title="Social", isCompleted="true", startDate="Wednesday Septemeber 3rd", startTime="9:00am", endDate= "Wednesday Septemeber 3rd", endTime="9:00am"))
            page.appendChild(toDoItem(element.id, element.category, element.title, element.isCompleted, element.startDate, element.startTime, element.endDate, element.endTime))

        
            
        });

    


    }

    page.append()


                page.addEventListener('click', function(e){
                const onDeleteButton = page.querySelector('#delete')
                const toDoItems = document.querySelectorAll('ul')
        
                console.log(toDoItems)
                
               


                
                
                



            })

  




    console.log('toDoPage')



        


    
  






    



    return page
}



export default toDoPage