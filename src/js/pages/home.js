import brandHeader from '../components/brandingHeader/brandHeader'
import logo from '../components/branding/logo'
import tagline from '../components/tagline/tagline'
import link from '../link/link'


const homePage = function(){
    const app = document.querySelector('#app')

    console.log(app)


    const page = document.createElement('div')
    app.innerHTML = '';
    // clean out page contents before building
    page.innerHTML = '';

    function render() {

        app.append(logo())
        app.append(brandHeader('Ultimate Tasks App'))
        app.append(tagline('When life gives you the opportunity, check it off!'))
        app.append(link("Click here to start!", "/toDoPage", "link-button"))
        console.log('rendering page...')
        




    }


    // call render function to build page + components
    render()
    return page
}


export default homePage