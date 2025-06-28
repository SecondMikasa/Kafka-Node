const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: "myapp", 
    brokers: ["192.168.29.234:9092"]
})

module.exports = kafka