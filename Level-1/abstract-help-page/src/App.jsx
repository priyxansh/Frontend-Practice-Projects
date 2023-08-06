import "./styles/App.css";
import NavBar from "./components/NavBar";
import Help from "./pages/Help";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Help />
            </main>
            <Footer />
        </>
    );
}

export default App;
