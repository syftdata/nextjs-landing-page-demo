import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { Field, Form, FormLayout, SubmitButton } from "@saas-ui/react";
import Script from "next/script";
import { useEffect, useState } from "react";

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


function SimpleFormNoAction() {
  return (
    <form>
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
          <input
            type="submit"
            className="hs-button primary large"
            value="Continue"
          />
    </form>
  );
}

function HubspotForm() {
  return (
    <>
  <Script src="https://js.hsforms.net/forms/embed/v2.js"/>
  <Script id="hs-form" async  
  dangerouslySetInnerHTML={{
    __html: `
setTimeout(function() {
  if(typeof hbspt !== 'undefined') {
    hbspt.forms.create({
      portalId: "44164713",
      formId: "4b3b6046-9ff0-4b96-a797-a14b4fb7a008"
    });
  } else {
    console.error('HubSpot-Skript cannot be loaded.');
  }
}, 400);    
    `}}/>
  </>
  );
}

function HubspotForm2() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // also fire identify call.
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);
  if (!show) {
    return null;
  }
  return (
    <iframe src="/forms2" frameBorder="0" width="100%" height="500" />
  )
}

export default function Forms() {
  // useEffect(() => {
  //   // also fire identify call.
  //   window.syft.identify("nageswara@syftdata.com", {
  //     email: "nageswara@syftdata.com",
  //   });
  // }, []);
  return (
    <Box position="relative" overflow="hidden">
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <VStack spacing="24px">
          <SimpleForm />
          <SimpleFormNoAction />
          <GroupedFields />
          <HubspotForm />
          <HubspotForm2 />
        </VStack>
      </Container>
    </Box>
  );
};
