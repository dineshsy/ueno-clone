import "./App.css";
import HeroBanner from "./pages/HeroBanner/HeroBanner";
import Navbar from "./Reuseables/Navbar/Navbar";

function App() {
  return (
    <main style={{ minHeight: "100vh" }} className="p-5">
      <Navbar></Navbar>
      <HeroBanner />
    </main>
  );
}

export default App;
