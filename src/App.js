// import logo from './logo.svg';
import './App.css';
import Listing from './Listing'

const data = require('./data.json');

function App() {
  return (
    <div>
     
       <Listing
       data={data}
      
      />
    
     
    </div>
  );
}

export default App;


