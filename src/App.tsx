import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Features from "./pages/Features";
import Home from "./pages/Home";
import TodaySpecials from "./pages/TodaySpecials";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <TodaySpecials />
      <Features />
      <About />
      <Footer />
    </>
  );
}

export default App;
