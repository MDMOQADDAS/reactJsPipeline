import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

function ReactPage() {
  return (
    <div>
      <p>React</p>
    </div>
  )
}


function App() {


  return (
    <Router>
      <Routes>

        <Route path="/myreact" element={<ReactPage />} />
      </Routes>
      <div>
        <div className="App">
          <h1>Jenkins Shared Library for Building React, Java, and Flutter Applications</h1>
        </div>
        <div className="box">
          <div className="div1" >
            <Link to="/myreact">click</Link>
            <h3>React Application</h3>
            <p style={{ marginLeft: "6px", marginRight: "6px", fontSize: "11px", marginTop: "30px", textAlign: "justify" }}>React shared library responsible to build and contenarized the react application.</p>
          </div>
          <div className="div2" >
            <h3>Java Application</h3>
            <p style={{ marginLeft: "6px", marginRight: "6px", fontSize: "11px", marginTop: "30px", textAlign: "justify" }}>Java shared library responsible to build and contenarized the java application.</p>
          </div>
          <div className="div3" >
            <h3>Flutter Application</h3>
            <p style={{ marginLeft: "6px", marginRight: "6px", fontSize: "11px", marginTop: "30px", textAlign: "justify" }}>Flutter shared library responsible to build and contenarized the react application.</p>
          </div>
          <div className="div4">
            <h3>Python Application</h3>
            <p style={{ marginLeft: "6px", marginRight: "6px", fontSize: "11px", marginTop: "30px", textAlign: "justify" }}>Python shared library responsible to build and contenarized the react application.</p>
          </div>
        </div>
        <div className="button">
          <button>Getting Started</button>
        </div>

      </div>


    </Router>

  )

}




function JavaPage() {
  return (
    <div>
      <p>Java</p>
    </div>
  )
}
function FlutterPage() {
  return (
    <div>
      <p>Flutter</p>
    </div>
  )
}
function PythonPage() {
  return (
    <div>
      <p>Python</p>
    </div>
  )
}

export default App