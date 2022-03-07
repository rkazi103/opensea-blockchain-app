import { createClient } from "next-sanity";
import { config } from "./config";

if (!config.projectId)
  throw Error("The Project ID is not set. Check your environment variables.");

if (!config.token)
  throw Error("The API token is not set. Check your environment variables.");

const client = createClient(config);

export default client;
