const { Kafka } = require("kafkajs")

exports.kafka = new Kafka({
  clientId: "kafka-test001",
  brokers: ["192.168.1.15:9092"],
  
})