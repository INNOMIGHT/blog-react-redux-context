import './App.css';
import { BlogList } from './Components/BlogList';
import { Navbar } from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddBlog } from './Components/AddBlog';
import { BlogPage } from './Components/BlogPage';
import LikeState from './Contexts/LikeState';
import { About } from './Components/About';


function App() {
  return (
    <LikeState>
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/blog-react-redux-context" element={<BlogList />}></Route>
        <Route path="/blog-react-redux-context/add-blog" element={<AddBlog />}></Route>
        <Route path='/blog-react-redux-context/blogs/:blogId' element={<BlogPage />}></Route>
        <Route path='/blog-react-redux-context/blogs/:blogId/edit' element={<AddBlog />}></Route>
        <Route path='/blog-react-redux-context/about' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
    </LikeState>
  );
}

export default App;
