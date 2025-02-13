---
sidebar_position: 2
---

# Vola Aggregator Node Guide

## Setting Up the Aggregator Node

This guide will walk you through setting up and running a Aggregator node using Docker.

### System Requirement

:::note

All system requirements currently apply to the devnet phase. As we transition to testnet and mainnet, these requirements may evolve, and the document will be updated accordingly.

:::

- 8 GB Ram
- 4 Core CPU
- Storage Based-On Commitment

### Prerequisites

Before you begin, ensure you have the following installed:

- **Docker:**
  For containerization.
- **Docker Compose:**
  For orchestrating multi-container setups.
- **A Public Domain:**
  For pointing to the running node.

### Quick Start

1. **Clone the Repository:**
   Clone the Vola Aggregator Node Docker repository to your local machine:

```bash
git clone https://github.com/Nuvola-Digital/aggregator-node-docker
cd aggregator-node-docker
```

2.  **Configure Environment Variables:**

    - Copy the _.env.example_ file to _.env_:

    ```bash
    cp .env.example .env
    ```

    - Open the _.env_ file and update the following variables:

      - **LISTEN_ADDR**:
        IP address interface the node listens on. Default is `0.0.0.0`.
      - **LISTEN_PORT**:
        Port the node listens on. Default is `1331`.
      - **ACCOUNT**:
        Account address of the owner account.
      - **SURI**:
        Secret phrase for owner account.
      - **KEYSTORE_PASSWORD**:
        Password for the keystore. (Optional)
      - **CHAIN_RPC**:
        RPC for vola chain devnet.
      - **STORAGE_CAPACITY**:
        Amount of storage in GB to offer to the network.
      - **NODE_LOCATION**:
        Location where the node is running.
      - **GATEWAY_DOMAIN**:
        Public domain that points to the running aggregator node. Also need to be configured for https (SSL) support.
        The aggregator node listening at **_$LISTEN_ADDR:$LISTEN_PORT_** should be accessible through **_https://$GATEWAY_DOMAIN:$GATEWAY_PORT_** with https.
        Eg: mynode.example.com (This is just an example domain, do not use this. Use your own domain.)
      - **GATEWAY_PORT**:
        Port to use with the **_$GATEWAY_DOMAIN_** to reach the running node. SSL should be configured at this port.

    Ensure that these variables are properly configured to match your environment and security requirements.

3.  **Generate Keys:**
    If `SURI` or `ACCOUNT` is missing, the script will automatically generate them and log the details.

    - To generate the required `SURI` and `ACCOUNT`:

      ```bash
         docker run --rm -it nuvoladigital/aggregator-node key generate
      ```

    The Secret seed or Secret phrase can be passed as `SURI` and public key will be the `ACCOUNT`

4.  **Start the Node:**
    With your environment variables configured, you can start the node by running Docker Compose:

    ```bash
    docker-compose up
    ```

5.  **Register the Node:**
    Before participating on the aggregation, node should be register in the chain.

    - You would need some funds on the owner account for registering the node (for transaction fee and registration fee, which is based on storage capacity offered). You can use faucet to load test funds on your account.

    - You need to have a public domain that points to the aggregator node that you just ran. Also, You need to configure https (SSL) support for that.

    - To register the node:

          ```bash
            source .env
            docker exec -it aggregator-node /usr/local/bin/aggregator-node node register --chain-rpc $CHAIN_RPC --address $ACCOUNT --gateway $GATEWAY_DOMAIN --gateway-port $GATEWAY_PORT --capacity $STORAGE_CAPACITY --location $NODE_LOCATION
          ```

    After the registration is completed, your node can start receiving upload requests.

 
## Updating Aggregator Node Registration Information  

When updating your **Aggregator Node** registration details (such as **gateway domain, port, and location**), follow the steps below.  

### Run the Update Command  

Use the following command to update your node’s registration information:  

  ```bash
  docker exec -it aggregator-node /usr/local/bin/aggregator-node node update 
    --chain-rpc 
    --address $ACCOUNT 
    --gateway $GATEWAY_DOMAIN 
    --gateway-port $GATEWAY_PORT 
    --location $NODE_LOCATION 
    --node-id {your-node-id-here}
  ```
  :::note
  Replace \{your-node-id-here\} with your node id that was recieved during registration.
  :::

### Updating the Aggregator Node Docker Image  

If you have an older version of the aggregator node running, update the **Docker image** using the following steps:  

1. **Pull the latest image:**  

  ```bash
  docker pull nuvoladigital/aggregator-node:latest
  ```
2. **Shut down the existing container:**

  ```bash
  docker compose down
  ```
3. **Restart the container with the updated image:**

  ```bash
  docker compose up
  ```

  :::note
  Make sure you are on the same directory as aggregator node docker repo.
  :::