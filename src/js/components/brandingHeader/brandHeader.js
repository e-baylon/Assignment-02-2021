//make element import then use it to make branding element
import makeElement from '../../utils/makeElement'

const brandHeader =  function (brandheader="uiTagline"){
    const template = `
    <div class="brand-header">${brandheader}</div>
    `

   
    //check for a valid element
    //

   

    const element = makeElement(template);

    

    return element


    
}

//export brandHeader

export default brandHeader