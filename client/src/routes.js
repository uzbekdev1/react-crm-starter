import modules from './modules';
import {flatModules} from './modules/functions'; 
import store from './store';
import App from './core/components/App';
import Home from './core/components/Home';

const getRoutes = (modules, store, App, Home, title = 'Главная') =>
  [
    {
      path: '/',
      title: title,
      component: App,

      routes: flatModules(modules)
        .map(x => {
          console.log('x',x);
          if (!x.component) {
            throw new Error('Component for module ' + x + ' is not defined')
          }

          const route = {
            path: x.path,
            title: x.title,
            component: x.component,
            onEnter: x.onEnter
              ? routeParams => {
                x.onEnter(routeParams, store.dispatch)
              }
              : null
          }

          if(x.children){
            // if(!x.children.Index || !typeof(x.children.Index.component)){
            //   throw new Error('Component for index route of "' + x.title + '" is not defined')
            // }

            // route.indexRoute = {
            //   component: x.children.Index.component
            // }

            route.routes = Object.keys(x.children).map(y => {
              const cm = x.children[y]
              if (!cm.component) {
                throw new Error('Component for module ' + x + '/' + y + ' is not defined')
              }

              return {
                path: x.path + cm.path,
                title: cm.title,
                component: cm.component,
                onEnter: cm.onEnter
                  ? routeParams => {
                    cm.onEnter(routeParams, store.dispatch)
                  }
                  : null
              }
            })
          }

          return route
        })
    }
  ]

export default getRoutes(modules, store, App, Home);