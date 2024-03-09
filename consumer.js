const { kafka } = require("./client.js")

const group = process.argv[2];

async function consume() {
  const consumer = kafka.consumer({ groupId: group })

  await consumer.connect()
  await consumer.subscribe({ topics: ["kafka-test001-topic01"], fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`topic: ${topic}, partition: ${partition}, message: ${message.value.toString()}`);
    },
  })
}

consume();