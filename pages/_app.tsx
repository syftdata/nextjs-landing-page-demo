import type { AppProps } from "next/app";

import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";

import theme from "../theme";
import { SyftProvider } from "@syftdata/next";

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps;

  return (
    <SyftProvider
      trackPageViews
      trackOutboundLinks
      consent={false}
      autocapture={{
        schemas: [],
        tags: [],
      }}
    >
      <SaasProvider theme={theme}>
        <AuthProvider>
          <Layout
            announcementProps={announcement}
            headerProps={header}
            footerProps={footer}
          >
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </SaasProvider>
    </SyftProvider>
  );
}

export default MyApp;
