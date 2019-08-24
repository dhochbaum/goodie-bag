import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'
import Root from './components/root'
import Navbar from './components/navbar'
import {Candies} from './components/candies'
import {DisconnectedCandies} from './components/candies'
import {Candy} from './components/candy'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />

        <Route path='/candies/:id' component={Candy} />
        <Route exact path='/' component={Root} />
        <Route exact path='/candies' component={Candies} />
        
      </div>

      

    </BrowserRouter>
    
  </Provider>,
  document.getElementById('main')
)
