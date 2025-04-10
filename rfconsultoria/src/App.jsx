import { BrowserRouter, Routes, Route } from "react-router";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RfForm from "./pages/RfForm";
import Blog from "./pages/Blog";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/rf-consultoria-page/" element={<Content />} />
          <Route path="/rf-consultoria-page/form" element={<RfForm />} />
          <Route path="/rf-consultoria-page/blog" element={<Blog />} />
          <Route path="/rf-consultoria-page/blog/:id" element={<Post />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
