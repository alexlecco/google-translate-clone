import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer } from 'react'
import './App.css'
import { type State, type Action } from './types.d'

// 1. Create a initial state
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Create a reducer
function reducer(state: State, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      fromText: action.payload
    }
  }

  return state
}

function App() {
  // 3. usar el hook useReducer
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>Google Translate</h1>
    </>
  )
}

export default App
