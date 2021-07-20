import { AppProps } from "next/dist/next-server/lib/router/router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SiderbarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { makeServer } from "../services/mirage";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../services/queryClient";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SiderbarDrawerProvider>
          <Component {...pageProps} />
        </SiderbarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
