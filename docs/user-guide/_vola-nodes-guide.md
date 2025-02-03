---
sidebar_position: 1
draft: true
---

# Vola Nodes Guide

## Running a Vola Chain Node

This guide will walk you through setting up and running a Vola Chain node using Docker.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Docker:**
  For containerization.
- **Docker Compose:**
  For orchestrating multi-container setups.

### Quick Start

1. **Clone the Repository:**
   Clone the Vola Node Docker repository to your local machine:

```bash
git clone https://github.com/Nuvola-Digital/vola-node-docker
cd vola-node-docker
```

2. **Configure Environment Variables:**

   - Copy the _.env.example_ file to _.env_:

   ```bash
   cp .env.example .env
   ```

   - Open the _.env_ file and update the following variables:

     - **AURA_SURI**: Specifies the SURI for generating Aura keys. This should be 32 bytes in hex format (0x-prefixed with 64 additional 0-f bytes). Eg: `0x1bbae82623cd6e7475cfd80f59da9f0e2b65597a8e681d60b7eb2a5353d64097`

     - **GRAN_SURI**: Specifies the SURI for generating Grandpa keys. This should be 32 bytes in hex format (0x-prefixed with 64 additional 0-f bytes). Can be same as _AURA_SURI_. Eg: `0x1bbae82623cd6e7475cfd80f59da9f0e2b65597a8e681d60b7eb2a5353d64097`

     - **NODE_NAME**: The name of the node. This is used to identify your node within the network.

     - **NODE_KEY**: Secret key to use for p2p networking. The value is parsed as a hex-encoded Ed25519 32 byte secret key (64 hex chars).Eg: `5c507c46d949698a3ff6ae2e5cc9808b26b3b33c0623440dc4c563c1a0d0b2be`

     - **KEYSTORE_PASSWORD**: The password used to unlock the node's keystore.

     - **PORT**: The port number used for the node's peer-to-peer network communication (default is 30333).

     - **RPC_PORT**: The port number for remote procedure calls (RPC), which is used for interacting with the node (default is 9944).

     Ensure that these variables are properly configured to match your environment and security requirements.

3. **Generate SURI and Node Key:**

   - To generate the required SURI for Aura and Grandpa keys:

   ```bash
       docker run --rm -it volanetwork/vola-node key generate
   ```

   This will output a secret seed, which is the required SURI.

   - To generate the node key:

   ```bash
   docker run --rm -it volanetwork/vola-node key generate-node-key
   ```

   This will provide the node key, which is the second value output by the command.

4. **Start the Node:**
   With your environment variables configured, you can start the node by running Docker Compose:

   ```bash
   docker-compose up
   ```

   This will bring up the Vola node and begin syncing with the network.

5. **Access the Node:**
   Once the node is up and running, you can interact with it using the RPC port (default: 9944).

## Setting Up the Aggregator Node

This guide will walk you through setting up and running a Aggregator(or Gateway) node using Docker.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Docker:**
  For containerization.
- **Docker Compose:**
  For orchestrating multi-container setups.

### Quick Start

1. **Clone the Repository:**
   Clone the Vola Aggregator Node Docker repository to your local machine:

```bash
git clone https://github.com/Nuvola-Digital/vola-aggregator-docker
cd vola-aggregator-docker
```

2. **Configure Environment Variables:**

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

   Ensure that these variables are properly configured to match your environment and security requirements.

3. **Generate Keys:**
   If `SURI` or `ACCOUNT` is missing, the script will automatically generate them and log the details.

   - To generate the required `SURI` and `ACCOUNT`:

     ```bash
        docker run --rm -it volanetwork/vola-aggregator key generate
     ```

   The Secret seed or Secret phrase can be passed as `SURI` and public key will be the `ACCOUNT`

4. **Start the Node:**
   With your environment variables configured, you can start the node by running Docker Compose:

   ```bash
   docker-compose up
   ```

5. **Register the Node:**
   Before participating on the aggregation, node should be register in the chain.

   - You would need some balance on the owner account for registering the node. You can use faucet to load balance on your account.

   - To register the node:

     ```bash
        docker run --rm -it volanetwork/vola-aggregator register --address $ACCOUNT --capacity $CAPACITY --location $LOCATION --gateway $GATEWAY_ADDR --gateway-port $GATEWAY_PORT
     ```

     Specify the variables as:

     - $ACCOUNT: Node owner account address. Should be same used while running the node.
     - $CAPACITY: Amount of upload storage in GB that you want to offer to the network.
     - $LOCATION: Location of the node.
     - $GATEWAY_ADDR: Node's public facing IP.
     - $GATEWAY_PORT: Port that was used while running the node.

     After the registration is completed, your node can start receiving upload requests.
