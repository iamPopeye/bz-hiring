import './App.css';
import Movies from './components/movies';
import Search from './components/search';
function App() {

  return (
    <div className='App bg-gradient-to-r from-pink-400 to-blue-500 bg-opacity-75'>
      <Search />
      <Movies />
    </div>
  );
}




export default App;
