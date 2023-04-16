import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import EditPostPage from './pages/EditPostPage';
import './App.css';

function App() {
  return (
    <div className = "App">
      <div className="wrapper">
			<Routes>
				<Route path='/posts' element={<HomePage />} />
				<Route exact path='/posts/new' element={<NewPostPage />} />
				<Route exact path='/posts/:id' element={<EditPostPage />} />
			</Routes>
		</div>
    </div>
  );
}

export default App;
