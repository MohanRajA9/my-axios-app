import './App.css';
import DataFetcher from './Datafetcher';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';
function App() {
  return (
    <div className="App">
     <h3>Axios</h3>
     <Post/>
     <Put/>
     <DataFetcher/>
     <Delete/>
    </div>
  );
}

export default App;
