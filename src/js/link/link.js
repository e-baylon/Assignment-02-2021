import makeElement from '../utils/makeElement'

const link =  function (label="ui-link", path='/', className="link-button"){
    const template = `<a href="${path}" class="${className}" data-path="${path}">${label}</a>`;
    //check for a valid element
    //

    const element = makeElement(template);


    return element
}

export default link