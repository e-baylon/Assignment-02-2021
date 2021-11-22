//make element import then use it to make branding element
import makeElement from '../../utils/makeElement'

const tagline =  function (uiTagline="tagline"){
    const template = `
    <div class="tagline">${uiTagline}</div>
    `

   
    //check for a valid element
    //

   

    const element = makeElement(template);

    

    return element


    
}

//export brandHeader

export default tagline