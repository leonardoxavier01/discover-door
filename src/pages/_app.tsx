import { AppProps } from "../../node_modules/next/app";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
