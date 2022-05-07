import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from '../core/components/main';
import Footer from '../core/components/footer';
import Navbar from '../core/components/navbar';
import SessionManager from '../sessions/components/session-manager';
import LoadingSpinner from '../core/components/loading-spinner';
import { SessionProvider } from '../core/context';
import { TourProvider } from '@reactour/tour'

import GuideTourService from '../core/services/guideTourService';

function App() {
  return (
    <div className="app-container">
      <div className='app-view-render'>
        <SessionProvider>
          <SessionManager>
            <TourProvider steps={GuideTourService.getSteps()}>
              <LoadingSpinner />
              <Navbar />
              <Main />
              <Footer />
            </TourProvider>
          </SessionManager>
        </SessionProvider>
      </div>
    </div>
  );
}

export default App;
