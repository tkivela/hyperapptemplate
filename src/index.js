import { app } from 'hyperapp'

import actions from './actions'
import state from './state'
import view from './View'

if (process.env.NODE_ENV === 'development') {
  import('hyperapp-redux-devtools').then(devtools => {
    devtools(app)(state, actions, view, document.body)
  })
} else {
  app(state, actions, view, document.body)
}
