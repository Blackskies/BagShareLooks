import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId="703266447585-oqseg2mg9ocvk0rcu8h6r2ut6mkvmmcr.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
