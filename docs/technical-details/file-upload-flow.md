---
sidebar_position: 4
---

# File Upload Flow

:::note

This documentation is based on the current implementation of the Vola. Some features may be incomplete or subject to change as development progresses. Updates will be provided accordingly.

:::

File upload in the Vola Network ensures secure and efficient management of user files across decentralized storage platforms. The process involves interactions between the User, the Vola Chain, and Gateway Nodes.

![File Upload Sequence Diagram](/diagrams/File-Upload-Sequence-Diagram.jpg)

The above sequence diagram illustrates the interaction flow between the User, the Vola Chain, and the Gateway Node during the file upload process. Each step aligns with the described actions above.

## Basic Flow

1. **Fetch Storage Parameters:**
   The user queries the Vola Chain to fetch storage parameters, including price quotes and available Gateway Nodes for processing the upload.

2. **Submit Storage Transaction:**
   The user submits a file upload transaction to the Vola Chain. This transaction contains file metadata (e.g., size and type), the selected Gateway Node, and the required storage fee. The Vola Chain locks the user's balance in escrow to secure the transaction.

3. **Process Storage Request:**
   The selected Gateway Node listens for the upload request. After the transaction is validated on-chain, the Gateway Node prepares to process and store the data.

4. **Store File:**
   The user uploads the file to the Gateway Node. The upload process includes a proof of the transaction to ensure data integrity and traceability.

5. **Commit Upload Success:**
   The Gateway Node validates the file upload and commits the success back to the Vola Chain. This step registers the successful storage operation in the blockchain, ensuring transparency and accountability.

6. **Release Escrow Funds:**
   The Vola Chain releases the escrowed funds to the Gateway Node. This payment compensates the Gateway Node for processing and storing the uploaded file.
