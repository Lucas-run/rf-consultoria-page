import { BrowserRouter, Routes, Route } from "react-router";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RfForm from "./pages/RfForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/rf-consultoria-page/" element={<Content />} />
          <Route path="/rf-consultoria-page/form" element={<RfForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
