import { combineEpics } from 'redux-observable'
import { ofType } from 'redux-observable'
import { AUTHORISE, UNAUTHORISE } from './actions'
import { map } from 'rxjs/operators'

export const authEpic = (action$) =>
  action$.pipe(
    ofType(AUTHORISE),
    map(action => {
      localStorage.setItem('user', action.payload)
      return { type: 'NO_OPERATION' }
    })
  )

export const unauthEpic = (action$) =>
  action$.pipe(
    ofType(UNAUTHORISE),
    map(() => {
      localStorage.removeItem('user')
      return { type: 'NO_OPERATION' }
    })
  )

export const rootEpic = combineEpics(authEpic, unauthEpic)
