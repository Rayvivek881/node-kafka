const { kafka } = require("./client.js")

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function produce() {
  const producer = kafka.producer()

  await producer.connect()

  rl.setPrompt("Enter your message: >");
  rl.prompt();

  rl.on("line", async (message) => {
    const [key, loc] = message.split(" ");
    await producer.send({
      topic: "kafka-test001-topic01",
      messages: [
        {
          partition: (loc == "south" ? 0 : 1),
          key: "location-update",
          value: `message for ${key} from partition ${loc == "south" ? 0 : 1}`,
        },
      ],
    })
    rl.prompt();
  }).on("close", async () => { await producer.disconnect() })
}

produce();