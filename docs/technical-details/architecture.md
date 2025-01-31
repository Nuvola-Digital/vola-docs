---
sidebar_position: 1
---

# Architecture

:::note

This architecture diagram is based on the current implementation of the Vola Network. Some features may be incomplete or subject to change as development progresses. Updates will be provided accordingly.

:::

![Vola Network Architecture](/diagrams/Vola-Network-Architecture.jpg)

## Vola Chain

### Blockchain Layer

Vola Chain is the underlying Substrate-based blockchain that powers the Vola Network. It facilitates key operations such as storage management, authentication, and transaction handling, while ensuring security and immutability of data. The blockchain is composed of several key entities, including Validator Nodes, RPC Nodes, and Offchain Workers, which ensure smooth functioning and interaction with users and the network.

### Components of Vola Chain

- **Validator Nodes:**
  Validator nodes are responsible for maintaining the consensus of the Vola Chain. They validate and finalize blocks in the blockchain and participate in governance decisions through voting. Validator nodes also secure the network by validating transactions and ensuring the integrity of the data across the entire platform.

- **RPC Nodes:**
  RPC (Remote Procedure Call) nodes serve as the interface between the Vola Chain and external applications or services. These nodes allow users, Gateway Nodes, and other entities to interact with the blockchain. They expose APIs for fetching information about the blockchain state, executing transactions, and interacting with the network.

- **Offchain Workers:**
  Offchain Workers are responsible for executing background tasks that cannot be processed on-chain, such as verifying file ownership proofs, facilitating periodic data migrations, and validating and monitoring gateway nodes. They help offload tasks from the main blockchain to maintain high efficiency and performance.

### Key Functions of Vola Chain

- **Multi-Chain Support:**
  Vola Chain facilitates interoperability across different blockchains, enabling seamless interactions with decentralized storage providers and other blockchain networks.

- **File Ownership Proofs:**
  The blockchain stores cryptographic proofs of file ownership, allowing users to verify that they retain permanent, immutable control over their files, even when aggregated across different storage solutions.

- **OAuth & ZKP Authentication:**
  User authentication using Web 2.0 OAuth services is tracked and validated on-chain with Zero-Knowledge Proofs (ZKP) to ensure privacy and security of users' identities.

- **Data Migration & Aggregation:**
  Vola Chain handles the periodic data migration of files across different storage providers and ensures that these actions are recorded securely on the blockchain.

- **Validator Commitments:**
  Validator nodes commit to the integrity of OAuth tokens, file storage proofs and periodically validate their validity, ensuring the network's security.

## Aggregator(/Gateway) Node

### Aggregation Layer

The Aggregator Node (also known as the Gateway Node) acts as a bridge between users and the underlying decentralized storage solutions. These nodes manage and aggregate users' files across different storage providers, ensuring seamless interactions and synchronization across multiple platforms. Aggregator Nodes are responsible for handling users’ upload requests, ensuring that files are securely stored, and ensuring the blockchain is updated with the latest changes.

### Components of Aggregator Node

- **File Upload Interface:**
  Aggregator Nodes receive and process file upload requests from users. They aggregate the files across multiple decentralized storage platforms, ensuring the files are stored across the most appropriate solutions based on redundancy, speed, cost, and availability.

- **Synchronization & Aggregation Logic:**
  Once files are uploaded, the Aggregator Nodes synchronize data across storage platforms and perform periodic data migrations to ensure redundancy and availability. These nodes are tasked with keeping track of file locations, availability, and synchronization between decentralized and centralized providers.

- **Blockchain Interaction & Updates:**
  Aggregator Nodes actively listen to and commit updates to the Vola Chain. They register on the chain as valid nodes and provide metadata about user uploads. Updates to the blockchain may include file ownership proofs, metadata changes, or transactions related to storage services.

### Key Functions of Aggregator Node

- **File Aggregation Across Platforms:**
  The Aggregator Node aggregates users' files from decentralized storage solutions like IPFS, Iagon etc., providing a single unified platform for file management.

- **User Data Privacy and Security:**
  Aggregator Nodes must operate in compliance with Vola Network's privacy standards, including encrypting data before it is uploaded to storage platforms and ensuring that ownership proofs are correctly handled.

- **Cross-Chain File Management:**
  Since Vola Network supports multi-chain interoperability, the Aggregator Nodes must be capable of interacting with different blockchains to manage file storage and transactions across various blockchain ecosystems.
