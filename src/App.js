import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='myreact' element={<ReactPage />} />
        <Route path='myjava' element={<JavaPage />} />
        <Route path='myflutter' element={<FlutterPage />} />

      </Routes>
    </BrowserRouter>
  )
}



function Home() {
  return (
    <>
      <div className='myhome'>
        <div className="App">
          <h1>Jenkins Shared Library for Building React, Java, and Flutter Applications</h1>
        </div>
        <div className="box">
          <Link className='mylink' to="myreact">
            <div className="div1" >
              <h3>React Application</h3>
              <p style={{ marginLeft: "6px", marginRight: "6px", fontSize: "11px", marginTop: "30px", textAlign: "justify" }}>React shared library responsible to build and contenarized the react application.</p>

            </div>  </Link>
          <Link className='mylink' to="myjava">
            <div className="div2" >
              <h3>Java Application</h3>
              <p style={{ marginLeft: "6px", marginRight: "6px", fontSize: "11px", marginTop: "30px", textAlign: "justify" }}>Java shared library responsible to build and contenarized the java application.</p>
            </div> </Link>

          <Link className='mylink' to="myflutter">
            <div className="div3" >
              <h3>Flutter Application</h3>
              <p style={{ marginLeft: "6px", marginRight: "6px", fontSize: "11px", marginTop: "30px", textAlign: "justify" }}>Flutter shared library responsible to build and contenarized the react application.</p>
            </div></Link>

        </div>


        <Outlet />
      </div>

    </>


  )

}



function ReactPage() {
  return (
    <>
      <div className='react-div '>
        <h3>React</h3>
        <p className='mypara'>
          ✅ React is The library for web and native user interfaces, that is used to build single-page
          applications. React is a popular and widely-used open-source JavaScript library for building
          user interfaces. It was developed by Facebook in 2011 and has since been used to build
          numerous web applications.
        </p>
        <p className='mypara'>
          ✅React is based on the concept of components, which are reusable blocks of code that can
          be combined to create complex UIs. Each component represents a piece of the UI and can
          be customized with different props, which are essential properties that can be passed to the
          component.
        </p>
        <p className='mypara'>
          ✅One of the key benefits of using React is its ability to efficiently update and render compo-
          nents. React uses a virtual DOM, which is a lightweight representation of the actual DOM.
          This allows React to quickly compare the virtual DOM with the actual DOM and only update
          the parts of the UI that have changed, instead of re-rendering the entire UI.
        </p>
        <Link className='nextlink' to="/">Home</Link>
      </div>

    </>
  )
}


function JavaPage() {
  return (
    <>
      <div className='react-div'>
        <h3>Java</h3>
        <p className='mypara'>
          ✅Java is a high-level, object-oriented programming language, multiple types of applications
          we can build using java like Web Applications, Mobile Applications, Desktop GUI, and
          much more, which is the reason why java is very popular among developers.
        </p><p className='mypara'>
          ✅One of the key features of Java is its platform independence, which means that programs
          written in Java can run on different operating systems (Windows, Mac, Linux, etc.) without
          any modifications. This is made possible by the Java Virtual Machine (JVM), which is
          responsible for executing Java byte code on different platforms.
        </p><p className='mypara'>
          ✅ Java is known for its rich set of APIs (Application Programming Interfaces) that make it
          easy to develop complex applications. Some of the popular APIs include Swing (for building
          desktop GUI applications), JavaFX (for building rich multimedia applications), Servlets and
          JSP (for building web applications), and JDBC (for database connectivity).
        </p>
        <Link className='nextlink' to="/">Home</Link>
      </div>
    </>
  )
}
function FlutterPage() {
  return (
    <>
      <div className='react-div'>
        <h3>Flutter</h3>
        <p className='mypara'>
        ✅Flutter is a cross-platform framework to build cross-platform applications with a rich set of
          graphics, developed by Google in 2017, Flutter comes with unique features and is easy to
          use.
        </p>
        <p className='mypara'>
        ✅Flutter allows developers to build high-performance, native-looking applications for iOS,
          Android, and the web from a single codebase. This means that developers do not need to
          write separate code for each platform, reducing development time and cost.
          Flutter uses the Dart programming language, which was also created by Google, and has
          a wide range of customizable widgets and tools that make it easy to create beautiful, re-
          sponsive user interfaces. Additionally, Flutter’s ”hot reload” feature allows developers to
          make changes to their code and see the changes in real-time, without having to wait for the
          application to rebuild.
        </p>
        <Link className='nextlink' to="/">Home</Link>
      </div>
    </>
  )
}

export default App