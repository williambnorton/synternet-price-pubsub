# Synternet Price PubSub Application

This is a Node.js application that subscribes to real-time price data from the Synternet network using the `pubsub-js` library. It connects to a Synternet broker, subscribes to a specified subject, and logs received price data with timestamps.

## Prerequisites

To run this application, ensure you have the following installed:

- **Node.js** (version 18 or higher recommended)
- **npm** (Node Package Manager, typically bundled with Node.js)
- A Synternet **access token** (provided by Synternet)
- A `.env` file with required environment variables (see Configuration section)

## Installation

1. **Verify Node.js and npm Installation**

   Ensure Node.js and npm are installed by running:

   ```bash
   node --version
   npm --version
