// Import our custom CSS
import '../sass/main.scss'

// Import components
import './components/index'

// Import javascript file as needed
// import * as bootstrap from 'bootstrap'
import Dashboard from './pages/dashboard'
import AddStory from './pages/add-story'
import Register from './pages/auth/register'

// Routing
const routes = {
  '/': Dashboard,
  '/add-story.html': AddStory,
  '/auth/register.html': Register,
}

const detectRoute = () => routes[window.location.pathname]

const initPages = () => {
  const header = document.querySelector('header')
  const main = document.querySelector('main')
  const footer = document.querySelector('footer')

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  initPages()

  const route = detectRoute()
  route.init()
})
