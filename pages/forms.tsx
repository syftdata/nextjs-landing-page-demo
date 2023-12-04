import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { Field, Form, FormLayout, SubmitButton } from "@saas-ui/react";
import { NextPage } from "next";
import { useEffect } from "react";

declare global {
  interface Window {
    syft: any;
  }
}

function SimpleForm() {
  return (
    <Form
      action="/testing"
      onSubmit={(values) => {
        console.log(">> ", values);
      }}
    >
      <FormLayout>
        <FormLayout>
          <Field
            name="gender"
            options={[
              { value: "Male" },
              { value: "Female" },
              { value: "Other" },
            ]}
            type="select"
            label="Gender"
            width="100px"
          />
        </FormLayout>
        <FormLayout columns={2}>
          <Field name="firstName" label="Name" />
          <Field name="lastName" label="Last name" />
        </FormLayout>
        <FormLayout templateColumns="auto 25%">
          <Field name="address" label="Address" />
          <Field name="housenumber" label="Number" />
        </FormLayout>
      </FormLayout>
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
}

function GroupedFields() {
  return (
    <Form
      onSubmit={(values) => {
        console.log(">> ", values);
      }}
    >
      {({ Field }) => (
        <FormLayout>
          <Heading size="md">Personal information</Heading>
          <FormLayout column="2">
            <Field name="firstname" label="Name" />
            <Field name="lastname" label="Last name" />
          </FormLayout>

          <Field name="email" label="Email address" />

          <Heading size="md" mt="4">
            Address
          </Heading>
          <FormLayout>
            <Field name="address" label="Address" />
            <Field name="city" label="City" />
          </FormLayout>

          <Heading size="md" mt="4">
            Billing information
          </Heading>
          <FormLayout column="2">
            <Field name="card" label="Card number" />
            <FormLayout column="2">
              <Field name="exp" label="Expiration date" />
              <Field name="cvc" label="CVC" />
            </FormLayout>
          </FormLayout>

          <SubmitButton>Complete order</SubmitButton>
        </FormLayout>
      )}
    </Form>
  );
}

function HubspotForm() {
  return (
    <form
      id="hsForm_ccd57884-a4cd-4951-91ab-ae95247af57f"
      method="POST"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      noValidate={false}
      action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/19944327/ccd57884-a4cd-4951-91ab-ae95247af57f"
      className="hs-form-private hsForm_ccd57884-a4cd-4951-91ab-ae95247af57f hs-form-ccd57884-a4cd-4951-91ab-ae95247af57f hs-form-ccd57884-a4cd-4951-91ab-ae95247af57f_722522b1-c412-42f6-884e-841149b8a26b hs-form stacked"
      target="target_iframe_ccd57884-a4cd-4951-91ab-ae95247af57f"
      data-instance-id="722522b1-c412-42f6-884e-841149b8a26b"
      data-form-id="ccd57884-a4cd-4951-91ab-ae95247af57f"
      data-portal-id="19944327"
      data-hs-cf-bound="true"
    >
      <div className="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field">
        <label
          id="label-firstname-ccd57884-a4cd-4951-91ab-ae95247af57f"
          placeholder="Enter your "
          htmlFor="firstname-ccd57884-a4cd-4951-91ab-ae95247af57f"
        >
          <span></span>
        </label>
        <legend className="hs-field-desc" style={{ display: "none" }}></legend>
        <div className="input">
          <input
            id="firstname-ccd57884-a4cd-4951-91ab-ae95247af57f"
            name="firstname"
            placeholder="First Name*"
            type="text"
            className="hs-input"
            inputMode="text"
            autoComplete="given-name"
            defaultValue="Nageswara Rao"
          />
        </div>
      </div>
      <div className="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field">
        <label
          id="label-lastname-ccd57884-a4cd-4951-91ab-ae95247af57f"
          className=""
          placeholder="Enter your "
          htmlFor="lastname-ccd57884-a4cd-4951-91ab-ae95247af57f"
        >
          <span></span>
        </label>
        <legend className="hs-field-desc" style={{ display: "none" }}></legend>
        <div className="input">
          <input
            id="lastname-ccd57884-a4cd-4951-91ab-ae95247af57f"
            name="lastname"
            placeholder="Last Name*"
            type="text"
            className="hs-input"
            inputMode="text"
            autoComplete="family-name"
            defaultValue="Mannem"
          />
        </div>
      </div>
      <div className="hs_email hs-email hs-fieldtype-text field hs-form-field">
        <label
          id="label-email-ccd57884-a4cd-4951-91ab-ae95247af57f"
          className=""
          placeholder="Enter your "
          htmlFor="email-ccd57884-a4cd-4951-91ab-ae95247af57f"
        >
          <span></span>
        </label>
        <legend className="hs-field-desc" style={{ display: "none" }}></legend>
        <div className="input">
          <input
            id="email-ccd57884-a4cd-4951-91ab-ae95247af57f"
            name="email"
            placeholder="Work Email Address*"
            type="email"
            className="hs-input"
            inputMode="email"
            autoComplete="email"
            defaultValue="testduck@gmail.com"
          />
        </div>
      </div>
      <div className="legal-consent-container">
        <div className="hs-richtext">
          <p>
            By submitting your info, you agree to Capsule
            <a
              href="https://capsule.video/privacy"
              target="_blank"
              rel="noopener"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://capsule.video/terms"
              target="_blank"
              rel="noopener"
            >
              Terms of Use
            </a>
          </p>
        </div>
      </div>
      <div className="hs_submit hs-submit">
        <div className="hs-field-desc" style={{ display: "none" }}></div>
        <div className="actions">
          <input
            type="submit"
            className="hs-button primary large"
            value="Continue"
          />
        </div>
      </div>
      <input
        name="hs_context"
        type="hidden"
        value='{"embedAtTimestamp":"1701314619525","formDefinitionUpdatedAt":"1692392668804","lang":"en","legalConsentOptions":"{\"legitimateInterestSubscriptionTypes\":[45389620,42847940,13197604,42850339],\"communicationConsentCheckboxes\":[{\"communicationTypeId\":42847940,\"label\":\"I agree to receive other communications from Capsule.\",\"required\":false}],\"legitimateInterestLegalBasis\":\"LEGITIMATE_INTEREST_PQL\",\"communicationConsentText\":\"Capsule.Video Inc.Contact Us is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:\",\"processingConsentType\":\"IMPLICIT\",\"processingConsentText\":\"In order to provide you the content requested, we need to store and process your personal data. If you consent to us storing your personal data for this purpose, please tick the checkbox below.\",\"processingConsentCheckboxLabel\":\"I agree to allow Capsule.Video Inc.Contact Us to store and process my personal data.\",\"privacyPolicyText\":\"<p>By submitting your info, you agree to Capsule&apos;s <a href=\\\"https://capsule.video/privacy\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Privacy Policy</a> and <a href=\\\"https://capsule.video/terms\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Terms of Use</a></p>\",\"isLegitimateInterest\":true}","embedType":"REGULAR","renderRawHtml":"true","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36","pageTitle":"Capsule - Sign Up","pageUrl":"https://capsule.video/sign-up/step-1","referrer":"https://admin.capsule.video/","isHubSpotCmsGeneratedPage":false,"hutk":"9cb3daec7c6997648a50b3f2bc676440","__hsfp":2492490749,"__hssc":"176237690.6.1701314484052","__hstc":"176237690.9cb3daec7c6997648a50b3f2bc676440.1701311869371.1701311869371.1701314484052.2","formTarget":"#hbspt-form-722522b1-c412-42f6-884e-841149b8a26b","rumScriptExecuteTime":776,"rumTotalRequestTime":997.6999999992549,"rumTotalRenderTime":1070.699999999255,"rumServiceResponseTime":221.69999999925494,"rumFormRenderTime":73,"locale":"en","timestamp":1701314620226,"originalEmbedContext":{"portalId":"19944327","formId":"ccd57884-a4cd-4951-91ab-ae95247af57f","region":"na1","target":"#hbspt-form-722522b1-c412-42f6-884e-841149b8a26b","isBuilder":false,"isTestPage":false,"isPreview":false,"isMobileResponsive":true},"correlationId":"722522b1-c412-42f6-884e-841149b8a26b","renderedFieldsIds":["firstname","lastname","email"],"captchaStatus":"NOT_APPLICABLE","emailResubscribeStatus":"NOT_APPLICABLE","isInsideCrossOriginFrame":false,"source":"forms-embed-1.4186","sourceName":"forms-embed","sourceVersion":"1.4186","sourceVersionMajor":"1","sourceVersionMinor":"4186","allPageIds":{},"_debug_embedLogLines":[{"clientTimestamp":1701314619578,"level":"INFO","message":"Retrieved customer callbacks used on embed context: [\"onFormSubmit\"]"},{"clientTimestamp":1701314619578,"level":"INFO","message":"Retrieved pageContext values which may be overriden by the embed context: {\"pageTitle\":\"Capsule - Sign Up\",\"pageUrl\":\"https://capsule.video/sign-up/step-1\",\"referrer\":\"https://admin.capsule.video/\",\"userAgent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36\",\"isHubSpotCmsGeneratedPage\":false}"},{"clientTimestamp":1701314619579,"level":"INFO","message":"Retrieved countryCode property from normalized embed definition response: \"US\""},{"clientTimestamp":1701314619698,"level":"INFO","message":"Retrieved analytics values from API response which may be overriden by the embed context: {\"hutk\":\"9cb3daec7c6997648a50b3f2bc676440\"}"}]}'
      />
    </form>
  );
}

const Forms: NextPage = () => {
  useEffect(() => {
    // also fire identify call.
    window.syft.identify("nageswara@syftdata.com", {
      email: "nageswara@syftdata.com",
    });
  }, []);
  return (
    <Box position="relative" overflow="hidden">
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <VStack spacing="24px">
          <SimpleForm />
          <GroupedFields />
          <HubspotForm />
        </VStack>
      </Container>
    </Box>
  );
};

export default Forms;
