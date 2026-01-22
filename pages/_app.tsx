
import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  const { announcement, header, footer } = pageProps;
  if (Component.getLayout) {
    return Component.getLayout(
      <Component {...pageProps} />,
      announcement,
      header,
      footer
    );
  }

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
