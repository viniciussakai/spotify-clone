import { useGlobalStyles } from "@/styles";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	useGlobalStyles();

	return <Component {...pageProps} />;
}
