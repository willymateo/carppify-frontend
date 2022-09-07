import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={reduxStore}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
