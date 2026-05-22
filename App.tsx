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
import './src/assets/css/style.css';

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
              containerClasses="cookie-container"
              contentClasses="cookie-content"
              buttonWrapperClasses="cookie-buttons"
              style={{
                background: "#050505",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                padding: "18px 25px",
              }}
              contentStyle={{
                margin: "0",
                color: "#fff",
                fontSize: "15px",
                flex: "1"
              }}
              buttonStyle={{
                background: "#00bcd4",
                color: "#fff",
                borderRadius: "10px",
                padding: "10px 22px",
                fontWeight: "600",
                border: "none"
              }}
              declineButtonStyle={{
                background: "#2a2a2a",
                color: "#fff",
                borderRadius: "10px",
                padding: "10px 22px",
                fontWeight: "600",
                border: "none"
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



