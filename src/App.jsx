import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div class="nav">
        <ul>
          <li class="nal"><a href=""><i class="fa-solid fa-music"></i></a></li>
          <li class="nar"><a href="start-section">test</a></li>
          <li class="nar"><a href="s2">test</a></li>
          <li class="nar"><a href="s3">test</a></li>
          <li class="nar"><a href="s4">test</a></li>

        </ul>
      </div>
      <div>
        <section id="start-section">
          <div id="card-image"><img class="start-img" src="/MichaelKarte.jpg"></img></div>
          <div class="flex">
            <h3>TEST</h3>
          </div>
        </section>
        <section id="s2" class="flex"><p>Test</p></section>
        <section  id="s3" class="flex"><p>Test</p></section>
        <section id="s4" class="flex"><p>Test</p></section>
      </div>
    </>
  )
}

export default App
