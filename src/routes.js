import WebContainer from './components/layout/WebContainer';
import Home from './pages/home';
import About from './pages/about';
const routes = [
  {
    path: '/',
    component: WebContainer,
    indexRoute: { component: Home },
    childRoutes: [{
      path:'/about',
      component: About 
    }
    ]
  }
]

export default routes;