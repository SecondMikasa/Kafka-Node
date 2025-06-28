const kafka = require("./client")

async function init() {
    // [ ]: Establishing Admin Connection
    const admin = kafka.admin
    await admin.connect()

    console.log("Admin Connection Success")

    // [ ]: Creating Topic on Kafka Server
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2
            }
        ]
    })

    console.log("Topic Created Successfully")

    // [ ]: Servering Admin Connection
    await admin.disconnect()

    console.log("Admin Disconnection Success")
}

init()