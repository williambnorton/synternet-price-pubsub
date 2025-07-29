# Synternet Price PubSub Application

A Node.js application that subscribes to real-time cryptocurrency price data from the Synternet network using the `pubsub-js` library. It connects to a Synternet broker, listens for price updates, and logs them with timestamps. This guide provides step-by-step instructions to set up and run the application.

## Prerequisites

To run this application, you need:
- **Node.js** (version 18 or higher recommended)
- **npm** (Node Package Manager, typically included with Node.js)
- A **Synternet access token** (API key) from Synternet
- A `.env` file with required environment variables (see Configuration section)

## Step-by-Step Setup Instructions

### 1. Install Node.js and npm

Node.js is required to run this application, and npm is used to manage dependencies.

- **Check if Node.js and npm are installed**:
  Run the following commands in your terminal (Command Prompt on Windows, Terminal on macOS/Linux):
  ```bash
  node --version
  npm --version
  ```
  If both commands return version numbers (e.g., `v18.20.4` for Node.js and `10.8.3` for npm), proceed to step 2. If not, continue with installation.

- **Download and Install Node.js**:
  - Visit the official Node.js website: [nodejs.org](https://nodejs.org).
  - Download the **LTS version** (recommended for most users) for your operating system (Windows, macOS, or Linux).
  - Run the installer and follow the prompts. Ensure the option to install npm is selected (it’s included by default).
  - Sample installation:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
    source ~/.bashrc
    nvm install node
    bash
    node --version
    echo expected output looks like this: v18.12.0
    npm --version
    echo expected output looks like this: 8.19.2
    ```

### 2. Clone the Repository

Clone the repository to your local machine using Git.

- **Install Git** (if not already installed):

- **Clone the repository**:
  Run the following command in your terminal:
  ```bash
  git clone https://github.com/williambnorton/synternet-price-pubsub.git
  cd synternet-price-pubsub
  ```

### 3. Install Dependencies

Install the required Node.js packages (`pubsub-js` and `dotenv`).

- Run the following command in the `synternet-price-pubsub` directory:
  ```bash
  npm install
  ```
  This installs:
  - `synternet-pubsub-js`: Synternet's library for pub/sub messaging.
  - `dotenv`: Loads environment variables from a `.env` file.

### 4. Obtain a Synternet API Key

To access the Synternet network, you need an API key (access token).

- Visit the Synternet website: https://portal.synternet.com/interact/
- Sign up / log in to your Synternet account.
- Navigate to the developer or API section (check the Synternet documentation or dashboard for specific instructions).
- Create / Access your "Project" to Reveal and copy an API key (access token) for your account.
- Copy the token securely (e.g., to a text editor or password manager). Do **not** share it publicly.

### 5. Configure the `.env` File

Create a `.env` file to store your environment variables, including the Synternet API key.

- In the `synternet-price-pubsub` directory, create a file named `.env`:
  ```bash
  touch .env
  ```
- Open the `.env` file in a text editor and add the following:
  ```env
  BROKER_URL=broker-eu-01.synternet.com
  ACCESS_TOKEN=your_synternet_access_token
  STREAM_SUBJECT=synternet.price.all
  ```
- Replace `your_synternet_access_token` with the API key you obtained from Synternet.
- Save and close the file.
- **Important**: The `.env` file contains sensitive information and is ignored by `.gitignore` to prevent it from being committed to GitHub.

### 6. Run the Application

Start the application to connect to the Synternet broker and receive price data.

- In the `synternet-price-pubsub` directory, run:
  ```bash
  npm start
  ```
  This executes the `synternet.prices.js` script, which:
  - Loads environment variables from `.env`.
  - Connects to the Synternet broker (e.g., `broker-eu-01.synternet.com`).
  - Subscribes to the specified subject (e.g., `synternet.price.all`).
  - Logs received price data with timestamps to the console.

### Sample Output

If everything is set up correctly, you should see output similar to the following:

```
[dotenv@17.2.1] injecting env (3) from .env -- tip: ⚙️  override existing env vars with { override: true }
Connecting to broker: broker-eu-01.synternet.com
***Subscribing to subject: synternet.price.all
Connected to Synternet broker
Handler registered, starting service...
[2025-07-28T16:05:05.597Z] Received data:
{
"AAVE":{"price":291.58572518316015,"volume_24h":460938042.77030003,"volume_change_24h":58.5276,"price_percent_change_24h":-1.9898234,"price_percent_change_30d":13.24814198,"market_cap":4432441682.434929,"market_cap_dominance":0.1137,"last_updated":1753718640},
"ADA":{"price":0.805242988795876,"volume_24h":1270007824.077936,"volume_change_24h":38.2976,"price_percent_change_24h":-2.13621019,"price_percent_change_30d":42.66427933,"market_cap":28512440502.81722,"market_cap_dominance":0.7315,"last_updated":1753718640},
"AKT":{"price":1.3552474173514746,"volume_24h":13408765.44784325,"volume_change_24h":55.9912,"price_percent_change_24h":-3.10248306,"price_percent_change_30d":25.90288372,"market_cap":336488681.9795699,"market_cap_dominance":0.0086,"last_updated":1753718580},
...
}
```

This output shows:
- The dotenv library loading environment variables.
- Connection to the Synternet broker.
- Subscription to the `synternet.price.all` subject.
- Real-time price data for various cryptocurrencies (e.g., AAVE, ADA, AKT) with details like price, 24-hour volume, price changes, market cap, and last updated timestamp.

### Troubleshooting
- The most common problem is ensuring that you npm install the synternet pub sub library. (npm install git+https://github.com/synternet/pubsub.git)
- **Node.js/npm not found**: Ensure Node.js is installed and added to your system’s PATH. Reinstall from [nodejs.org](https://nodejs.org) if needed.
- **Connection errors**: Verify your Synternet API key and `BROKER_URL` in the `.env` file. Check your internet connection and Synternet’s documentation for any changes to the broker URL.
- **Dependency issues**: If `npm install` fails, delete the `node_modules` folder and `package-lock.json`, then rerun `npm install`.
- **No data received**: Ensure the `STREAM_SUBJECT` is correct (e.g., `synternet.price.all`) and that your API key has access to the Synternet data stream. Contact Synternet support if issues persist.
- **Git errors**: If cloning fails, ensure Git is installed and your internet connection is stable. For authentication issues, use a Personal Access Token (PAT) or SSH key (see GitHub’s documentation).

### Project Structure

- `synternet.prices.js`: Main script that connects to the Synternet broker and processes price data.
- `.env`: Stores environment variables (not committed to GitHub).
- `.env.example`: Template for the `.env` file.
- `.gitignore`: Ignores sensitive files (e.g., `.env`, `node_modules`).
- `package.json`: Project metadata and dependencies.
- `package-lock.json`: Locks dependency versions for reproducibility.
- `LICENSE`: MIT License file.

### Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request on GitHub.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
