import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { PostContext } from './components/PostContext';
import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import ViewPostPage from './pages/ViewPostPage';
import EditPostPage from './pages/EditPostPage';

import './App.css';

function App() {

	const [posts, setPosts] = useState([]);

	return (
   <div className = "App">
      <div className="wrapper">
			<PostContext.Provider value={{posts, setPosts}}> 
				<Routes>
					<Route path='/' element={<Navigate to='/posts' />} />
					<Route path='/posts' element={<HomePage />} />
					<Route exact path='/posts/new' element={<NewPostPage />} />
					<Route exact path='/posts/:id' element={<ViewPostPage />} />
					<Route exact path='/posts/:id/edit' element={<EditPostPage />} />
				</Routes>
			</PostContext.Provider>
		</div>
   </div>
	);
}

export default App;
