import { app } from 'hyperapp'
import { render } from 'hyperapp-render'

import actions from './actions'
import state from './state'
import view from './View'

test('view to match snapshot', () => {
  const tree = render(app)(state, actions, view)
  expect(tree.toString()).toMatchSnapshot()
})
