const { Kafka } = require("kafkajs")

exports.kafka = new Kafka({
  clientId: "kafka-test001",
  brokers: ["<PRIVATE_IP>:9092"],
  
})