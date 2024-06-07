import './App.css'

function App() {

//Navlist order right to left!!!

  return (
    <>
    <header id="card-image"><img className="start-img " src="/MichaelKarte.jpg"></img></header>

      <div className="nav">
        <ul>
          <li className="nal"><a href="start-section"><i className="fa-solid fa-music"></i></a></li>
          <li className="nar"><a href="">test</a></li>
          <li className="nar"><a href="">test</a></li>
          <li className="nar"><a href="">test</a></li>
          <li className="nar"><a href="start-section">Home</a></li>

        </ul>
      </div>
          <section id="start-section">

          <div className="container px-5">
            <div className="row gx-5 alic">
              <div className="col-lg-8">
                <div className="p-5">
                  <h2 className="display-4">TEST</h2>
                  <p>s</p>
                  <p>s</p>
                  <p>Hallo </p>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        <section id="home-section" className="flex"><p>Test</p></section>
        <section id="s3" className="flex"><p>Test</p></section>
        <section id="s4" className="flex"><p>Test</p></section>
    </>
  )
}

export default App
