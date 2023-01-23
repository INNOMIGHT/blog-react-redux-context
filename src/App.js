import './App.css';
import { BlogList } from './Components/BlogList';
import { Navbar } from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddBlog } from './Components/AddBlog';
import { BlogPage } from './Components/BlogPage';
import LikeState from './Contexts/LikeState';


function App() {
  return (
    <LikeState>
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<BlogList />}></Route>
        <Route path="/add-blog" element={<AddBlog />}></Route>
        <Route path='/blogs/:blogId' element={<BlogPage />}></Route>
        <Route path='/blogs/:blogId/edit' element={<AddBlog />}></Route>
      </Routes>
    </BrowserRouter>
    </LikeState>
  );
}

export default App;
