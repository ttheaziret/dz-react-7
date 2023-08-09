import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostPage from './pages/postPage/PostPage';
// import CreatePostsPage from './pages/createPostsPage/CreatePostsPage';


function App() {
  return (
    <div className='App'>
      {/* <CreatePostsPage /> */}
      <PostPage />
    </div>
  );
}

export default App;