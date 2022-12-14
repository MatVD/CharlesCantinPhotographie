import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  dataset: "production",
  apiVersion: "2022-12-14",
  useCdn: false,
  token: process.env.NEXT_SANITY_TOKEN
})

export default client;