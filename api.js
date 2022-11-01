import { Client } from "@gadget-client/product-quiz-tutorial-docs-test";

export const api = new Client({
  authenticationMode: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  },
});
