# kafka

To install dependencies:

```bash
bun install
```

To run:

```bash
docker run -p 9092:9092 `
-e KAFKA_ZOOKEEPER_CONNECT=192.168.29.234:2181 `
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.29.234:9092 `
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 `
confluentinc/cp-kafka:7.2.1
```

This project was created using `bun init` in bun v1.1.17. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
