import React, { useState } from 'react'
import Header from './componentes/Header'
import Main from './componentes/Main'
import { GlobalStyle } from './assets/css/GlobalStyle'

function App() {

  return (
    <>
    <GlobalStyle/>
      <Header />
      <Main/>
    </>
  )
}

export default App
