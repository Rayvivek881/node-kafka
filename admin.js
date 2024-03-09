
const { kafka } = require("./client.js") 
async function init() {
  const admin = kafka.admin()

  await admin.connect()
  await admin.createTopics({
    topics: [
      {
        topic: "kafka-test001-topic01",
        numPartitions: 2,
      },
    ],
  })
  await admin.disconnect()
  console.log("Topics created successfully");
}

init();
