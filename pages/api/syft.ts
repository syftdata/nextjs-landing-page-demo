import { NextSyftServer } from "@syftdata/next/lib/next";
import { DestinationConfig } from "@syftdata/next/lib/router";
import { type NextApiRequest, type NextApiResponse } from "next";

const destinations: DestinationConfig[] = [];
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const server = new NextSyftServer({
    destinations,
    enricher: async (event) => {
      console.log("Received event", event);
      return event;
    },
  });
  if (process && process.env.NODE_ENV === "development") {
    if (!(await server.validateSetup())) throw new Error("Invalid setup");
  }
  await server.handlePageApi(req, res);
}
