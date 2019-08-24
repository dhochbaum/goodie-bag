import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import { HashRouter, Route } from 'react-router-dom'

import store from './store'
import Root from './components/root'
import Test from './components/test'
import {Candies} from './components/candies'
import {DisconnectedCandies} from './components/candies'

console.log(Candies)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path='/' component={Root} />
        <Route exact path='/test' component={Test} />
        <Route exact path='/candies' component={Candies} />
      </div>

      

    </HashRouter>
    
  </Provider>,
  document.getElementById('main')
)
