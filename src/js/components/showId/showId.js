//make element import then use it to make branding element
import makeElement from '../../utils/makeElement'

const showId =  function (showId=null){
    const template = `
    <div class="tagline">ID:${showId}</div>
    `

   
    //check for a valid element
    //

   

    const element = makeElement(template);

    

    return element


    
}

//export brandHeader

export default showId