import { ColorModeScript } from "@chakra-ui/react";
import theme from "../theme";
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(a) {
    const includeSyft = a.dangerousAsPath !== "/forms2";
    // ?deferred=1 loads the tag with tracking off, as sites with their own consent banner do; call syft.enable() to start it.
    const deferSyft = /[?&]deferred=1(&|$)/.test(a.dangerousAsPath ?? "");
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/manifest.json" />
          {/* Simulates Global Privacy Control only when the URL has ?gpc=1, so GPC and normal tracking can both be tested. */}
          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `if (new URLSearchParams(location.search).get("gpc") === "1") Object.defineProperty(navigator, "globalPrivacyControl", { value: true, configurable: true });`}} />
          {/* LinkedIn Insight Tag (partner ID from marketing-website's GTM container). Loaded directly
              rather than via GTM, because that container also loads the production Syft tag. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `_linkedin_partner_id = "7015244";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[];}
var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script");
b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);`,
            }}
          />
          {includeSyft &&
          <script
          id="syft-loader"
          type="text/javascript"
          async
          defer
          src="http://localhost:4173/syft.umd.js"
          data-api-key="test"
          data-enabled={deferSyft ? "false" : undefined}
          />}
          <script
          dangerouslySetInnerHTML={{
            __html: `
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_bcoaBa4uZdMp0CzXr7QhZRRpnNGgBRRZ1GStvuJVAgJ', {api_host: 'https://us.i.posthog.com', person_profiles: 'identified_only'})`
          }} />
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/43753372.js"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}
