import "./styles/App.css";
import NavBar from "./components/NavBar";
import Help from "./pages/Help";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Help />
      </main>
    </>
  );
}

export default App;
