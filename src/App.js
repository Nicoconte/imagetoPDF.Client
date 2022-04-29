import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Main from './core/shared/main';
import Footer from './core/shared/footer';
import Navbar from './core/shared/navbar';

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
