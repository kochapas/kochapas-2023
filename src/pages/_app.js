import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.css";
import {
  Navbar,
  FloatMenu
} from "@/components";
// Since fontawesome css is imported above. Stop it from importing again.
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const MyProviders = ({ children }) => {
  return (
    <>
      <Navbar>
        <FloatMenu>
          {children}
        </FloatMenu>
      </Navbar>
    </>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <MyProviders>
        <Component {...pageProps} />
      </MyProviders>
    </>
  );
}
