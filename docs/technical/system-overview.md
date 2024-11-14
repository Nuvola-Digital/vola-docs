---
sidebar_position: 1
---

# System Overview

<!-- ![Vola Network System Overview](./img/system-overview-diagram.png) -->

## End User

End users can be web 2 or web 3 users. Web 2 users use their gmail account (oauth service) and web 3 users use their wallet.

## Account Ownership Circuit

ZKP circuit for verification of user identity based on oauth/otp token. It can be through midnight network or any other ZKP solutions.

## Substrate Chain Network

Custom network for handling all the business logic for the system including web 2 authentication and wallet mapping, file upload and ownership management, tokenomics.

### Auth Module

Handles user authentication through identity proofs for web 2 account ownership.

### Wallet Module

Manages wallet creation and mapping for Web 2 users.

### File Upload and Ownership Module

Facilitates secure file uploads and manages file ownership.

### Tokenomics Module

Oversees the economic model and incentives within the platform.

## Storage Solutions

Storage solutions like ipfs, iagon etc as an underlying storage infrastructure backbone for the network.

## Cardano Network

Cardano blockchain for handling final financial transactions in the network.
