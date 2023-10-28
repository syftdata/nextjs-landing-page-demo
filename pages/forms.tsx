import { Box, Container, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { Heading } from "@chakra-ui/react";
import { Form, FormLayout, SubmitButton, Field } from "@saas-ui/react";
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
        </VStack>
      </Container>
    </Box>
  );
};

export default Forms;
