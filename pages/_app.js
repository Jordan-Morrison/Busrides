import Router from 'next/router';
import Bowser from 'bowser';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import BrowserWarning from '../openCall/components/BrowserWarning';
import "../components/stylesheets/styles.css";

// Hide the default spinner to just use the progress bar
NProgress.configure({ showSpinner: false });

// Add the event handlers so the progress bar works with next router
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

    function validateBrowser() {
        if (pageProps.userAgent){
            let browser = Bowser.getParser(pageProps.userAgent);
            if (browser.getBrowserName() === "Internet Explorer"){
                pageProps.browserName = browser.getBrowserName();
                return false;
            }
        }
        return true;
    }

    return validateBrowser() ? <Component {...pageProps} /> : <BrowserWarning {...pageProps}/>;
}