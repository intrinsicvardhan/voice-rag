# Apna Bank, Apni Bhasha: A Multilingual AI-Powered Bank Assistant Kiosk

**Apna Bank, Apni Bhasha** is a cutting-edge multilingual bank assistant kiosk designed to facilitate seamless customer interactions in various languages, powered by advanced AI technologies. This solution leverages Retrieval-Augmented Generation (RAG) architecture, integrating large language models (LLMs), Speech-to-Text (STT), Text-to-Speech (TTS) capabilities, and VectorDB for efficient data retrieval and interaction.

## Architecture Overview

### 1. **RAG Architecture**  
   - **Retrieval-Augmented Generation** (RAG) combines the power of pre-trained language models with external knowledge sources, enabling the system to answer questions based on both pre-existing knowledge and real-time data retrieval from a vector database.

### 2. **Large Language Model (LLM)**
   - The LLM used in this architecture is **gpt-4o-realtime-preview**, which powers the natural language understanding and generation for the assistant. It allows the kiosk to understand and respond to user queries in a conversational manner across multiple languages.

### 3. **Speech-to-Text (STT)**
   - **STT** functionality is used to convert the user's spoken input into text, allowing the LLM to process the query. This enables the kiosk to handle spoken interactions, making it more accessible for users who prefer verbal communication.

### 4. **Text-to-Speech (TTS)**
   - Once the LLM generates a response, **TTS** is employed to convert the text response back into speech, providing a natural conversational experience for the user. This helps in delivering responses in the user's preferred language.

### 5. **Vector Database (VectorDB)**
   - **Qdrant** is used as the **VectorDB** to store and retrieve relevant data embeddings, enhancing the RAG system's ability to fetch accurate, domain-specific information. This ensures that responses are contextually relevant based on stored data.

### 6. **Text Embedding Model**
   - The **text embedding model** used is **ADA-Small**, which converts text data into high-dimensional vectors for efficient retrieval and comparison within the VectorDB. This model supports multilingual embeddings, ensuring accurate data representation across different languages.
   - **Embedding Dimensions**: 768-dimensional vector embeddings are used for efficient storage and retrieval.

### 7. **Image Embedding Model**
   - The assistant also supports image-related queries. The **DINOv2** model is used for **image embeddings**, allowing the kiosk to process and retrieve answers related to visual data.
   - **Embedding Dimensions**: 1024-dimensional vector embeddings are used for image data.

## Local Environment Setup

### 1. **Install the Required Tools**
   - **Azure Developer CLI**
   - **Node.js**
   - **Python >= 3.11**
     - **Important**: Python and the pip package manager must be in the path in Windows for the setup scripts to work.
     - **Important**: Ensure you can run `python --version` from the console. On Ubuntu, you might need to run `sudo apt install python-is-python3` to link `python` to `python3`.
   - **Git**
   - **Powershell** - For Windows users only.

### 2. **Clone the Repository**
   - Clone the project repository using the following command:
     ```bash
     git clone https://github.com/Azure-Samples/aisearch-openai-rag-audio
     ```

### 3. **Proceed to the Next Section to Deploy the App**

---

## Development Server

You can run the **Apna Bank, Apni Bhasha** app locally using the Azure services you provisioned during deployment, or by connecting the local app to any pre-existing services.

### 1. Environment Variables Setup

- If you deployed the app using `azd up`, you should have a `.env` file located in `app/backend/.env` with the required environment variables already set.

- If you did **not** use `azd up`, you will need to manually create the `.env` file in the `app/backend/` directory with the following environment variables:

    ```bash
    AZURE_OPENAI_ENDPOINT=wss://<your-instance-name>.openai.azure.com
    AZURE_OPENAI_REALTIME_DEPLOYMENT=gpt-4o-realtime-preview
    AZURE_OPENAI_API_KEY=<your-api-key>
    AZURE_SEARCH_ENDPOINT=https://<your-service-name>.search.windows.net
    AZURE_SEARCH_INDEX=<your-index-name>
    AZURE_SEARCH_API_KEY=<your-api-key>
    ```

- **Note**: If you plan to use **Entra ID** (your user when running locally, or managed identity when deployed), you can omit the API keys. The app will automatically use your identity for authentication.

### 2. Starting the App

- To start the application, run the following command based on your operating system.

#### For Windows:

```powershell
pwsh .\scripts\start.ps1

### For Linux/Mac:

Run the following command to start the app:

```bash
./scripts/start.sh

