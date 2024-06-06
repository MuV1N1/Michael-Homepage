import './App.css'

function App() {

//Navlist order right to left!!!

  return (
    <>
      <div className="nav">
        <ul>
          <li className="nal"><a href="start-section"><i className="fa-solid fa-music"></i></a></li>
          <li className="nar"><a href="">test</a></li>
          <li className="nar"><a href="">test</a></li>
          <li className="nar"><a href="">test</a></li>
          <li className="nar"><a href="start-section">Home</a></li>

        </ul>
      </div>
      <div>
        <section id="start-section">
          <div id="card-image"><img className="start-img" src="/MichaelKarte.jpg"></img></div>
          <div className="text-start">
            <p className="flex mg-l"><h3>Moin, oder wie man im Norden sagt</h3>ICh bin saidhaishdabdakj bksb kabkbasdk baksdba kbd akjdb kajbdk ajbdskaj bdkkabskdbakdbakdsbakdbskabdak dbakbd askbdakbd kabd kabd kdb ICh code die gesammte website für den DJ Michael deswegen uch die domain <a href="http://www.djmichap.de">Ich bin DJ Michael Pietryga auch Micha gennant</a></p>
           </div>
        </section>
        <section id="home-section" className="flex"><p>Test</p></section>
        <section id="s3" className="flex"><p>Test</p></section>
        <section id="s4" className="flex"><p>Test</p></section>
      </div>
    </>
  )
}

export default App
