import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import MealDetails from "./pages/MealDetails";

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/:name/:id" element={<MealDetails />} />
          <Route path="/*" exact element={<h1>404: Page not found</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
