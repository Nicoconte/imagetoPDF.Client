import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Main from '../core/components/main';
import Footer from '../core/components/footer';
import Navbar from '../core/components/navbar';
import SessionManager from '../sessions/components/session-manager';
import { SessionProvider } from '../core/context';

function App() {
  return (
    <div className="app-container">
      <div className='app-view-render'>
        <SessionProvider>
          <SessionManager>
            <Navbar />
            <Main />
            <Footer />
          </SessionManager>
        </SessionProvider>
      </div>
    </div>
  );
}

export default App;
