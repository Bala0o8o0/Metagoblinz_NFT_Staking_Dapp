import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Audiowide } from '@next/font/google';

const cyber = Audiowide({
  subsets: ['latin'],
  weight: ['400'],
});



const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}  >
      <main className={`${cyber.className} overflow-hidden  `} >
        <Component {...pageProps} />
      </main>
    </ThirdwebProvider>
  );
}

export default MyApp;
