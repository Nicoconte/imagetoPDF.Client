import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Main from '../core/components/main';
import Footer from '../core/components/footer';
import Navbar from '../core/components/navbar';

function App() {
  return (
    <div className="app-container">
      <div className='app-view-render'>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
