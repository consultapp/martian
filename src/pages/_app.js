// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// own css files here
import "/src/styles/martian.css";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
