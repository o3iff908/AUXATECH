import CookieConsent from "react-cookie-consent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-circular-progressbar/dist/styles.css';
import 'animate.css';

import './src/assets/css/animate.css';
import './src/assets/css/font-awesome.css';
import './src/assets/css/flaticon-set.css';

import './src/assets/css/helper.css';
import './src/assets/css/unit-test.css';
import './src/assets/css/validnavs.css';
import './src/assets/css/style.css'

import Routers from './Routers';
import Dependency from './src/components/utilities/Dependency';
import { useEffect, useState } from 'react';
import Preloader from './src/components/utilities/Preloader';

function App() {

  // Preloader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Routers />
          <Dependency />

          <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="Decline"
            enableDeclineButton
            cookieName="auxaConsent"
            style={{
              background: "#111",
              color: "#fff",
              padding: "15px"
            }}
            buttonStyle={{
              background: "#00bcd4",
              color: "#fff",
              borderRadius: "8px",
              padding: "10px 20px"
            }}
            declineButtonStyle={{
              background: "#444",
              color: "#fff",
              borderRadius: "8px",
              padding: "10px 20px"
            }}
          >
            We use cookies to improve your experience, analyze traffic, and personalize content.
          </CookieConsent>

        </>
      )}
    </>
  );
}

export default App;



