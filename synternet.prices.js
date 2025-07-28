import { createAppJwt, NatsService } from "pubsub-js";
import dotenv from "dotenv";

dotenv.config();

const brokerUrls = process.env.BROKER_URL || "broker-eu-01.synternet.com";
const accessToken = process.env.ACCESS_TOKEN || "";
//
const streamSubject = process.env.STREAM_SUBJECT || "synternet.price.all";

async function main() {
  console.log(`Connecting to broker: ${brokerUrls}`);
  console.log(`***Subscribing to subject: ${streamSubject}`);

  const service = new NatsService({
    url: brokerUrls,
    natsCredsFile: createAppJwt(accessToken),
  });

  await service.waitForConnection();
  console.log("Connected to Synternet broker");

  service.addHandler(streamSubject, (encoded) => {
    const data = new TextDecoder().decode(encoded);
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Received data:`, data);
  });

  console.log("Handler registered, starting service...");
  await service.serve();
}

main().catch((err) => {
  console.error("Application error:", err);
  process.exit(1);
});
