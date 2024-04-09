import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer } from 'react'
import './App.css'

// 1. Create a initial state
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Create a reducer
function reducer(state: typeof initialState, action) {
  const { type, payload } = action

  if (type === 'INTERCHANGE_LANGUAGE') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      fromText: payload
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
