import { Box, Container, VStack } from "@chakra-ui/react";
import Script from "next/script";

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

export default function Forms2() {
  return (
    <Box position="relative" overflow="hidden">
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <VStack spacing="24px">
          <HubspotForm />
        </VStack>
      </Container>
    </Box>
  );
};

Forms2.getLayout = function getLayout(page) {
  return (
    <Box>
      {page}
    </Box>    
  );
}
