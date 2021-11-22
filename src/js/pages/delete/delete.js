import brandHeader from '../../components/brandingHeader/brandHeader'
import logo from '../../components/branding/logo'
import showId from '../../components/showId/showId'
import link from '../../link/link'


const deletePage = function(id){
    const app = document.querySelector('#app')

    console.log(app)


    const page = document.createElement('div')
    app.innerHTML = '';
    // clean out page contents before building
    page.innerHTML = '';

    function render() {

        app.append(logo())
        app.append(brandHeader('Ultimate Tasks App Delete Page'))
        app.append(showId(id))
        app.append(link("Click here to Delete!", "/toDoPage", "link-button"))
        console.log('rendering page...')
        




    }


    // call render function to build page + components
    render()
    return page
}


export default deletePage

console.log(window.location.pathname)