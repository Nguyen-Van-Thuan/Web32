import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";


function App() {
  // Logic
  const name = "WEB 324"
  const age = '200'

  return (
    <div className="App">
      <Header name={name} tuoi={age}/>
      <Main/>
      <Footer/>
    </div>
  );
}


export default App;

// App component cha
// Header Component con
