import type { AppProps } from "next/app";

import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";

import theme from "../theme";
import { SyftProvider } from "@syftdata/next";

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps;

  return (
    <SaasProvider theme={theme}>
      <AuthProvider
        onSignup={(auth) => {
          return Promise.resolve({
            id: "121",
            name: "test",
          });
        }}
        onLogin={(auth) => {
          return Promise.resolve({
            id: "123",
            name: "test2",
          });
        }}
      >
        <Layout
          announcementProps={announcement}
          headerProps={header}
          footerProps={footer}
        >
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </SaasProvider>
  );
}

export default MyApp;
