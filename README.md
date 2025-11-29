```markdown
# Jokes Apart

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-brightgreen)](https://jokes-apart-app.netlify.app/)
![Build Status](https://img.shields.io/github/workflow/status/your-github-org/jokes-apart/CI/main?style=flat-square&label=Build)
![License](https://img.shields.io/github/license/your-github-org/jokes-apart?style=flat-square)

## What the project does

**Jokes Apart** is a personalized humor web application designed to deliver tech-related jokes tailored to each user's interests. It offers a fast, simple, and highly customizable experience by leveraging modern web technologies and automation.

Users can register, select up to five technologies they love (e.g., React, Python, AI, DevOps), and instantly receive a curated feed of jokes matched to their chosen tech stack. It's an innovative approach to building dynamic web applications without a traditional backend server, powered by n8n workflows and Google Sheets.

## Why the project is useful

Jokes Apart offers a unique blend of personalization, simplicity, and ease of maintenance, making it useful for users and developers alike:

*   **Personalized Humor:** Enjoy a stream of jokes relevant to your specific tech interests, making your experience more engaging.
*   **No Traditional Backend:** The project showcases how powerful automation tools like [n8n](https://n8n.io/) can serve as a robust, API-like backend, simplifying deployment and reducing operational overhead.
*   **Easy Content Management:** All jokes and their associated tags are stored in a simple [Google Sheet](https://www.google.com/sheets/about/), allowing for quick and easy content updates without any code changes or redeployments.
*   **Rapid Development & Deployment:** Built with React.js and deployed serverlessly on Netlify, the application is fast, responsive, and easy to scale.
*   **Showcase for Serverless Architectures:** Provides a practical example of combining a modern frontend (React), workflow automation (n8n), and a flexible data store (Google Sheets) to create a fully functional web application.

### Key Features

*   **User Registration:** Simple and intuitive flow to get started.
*   **Tech Preference Selection:** Users choose up to 5 favorite technologies to personalize their joke feed.
*   **Personalized Jokes Feed:** Dynamically fetched jokes, filtered to match the user's selected tech stack.
*   **n8n Workflow Integration:** Acts as the "backend automation engine" for fetching, filtering, and serving jokes.
*   **Google Sheets Database:** A lightweight, easy-to-manage database for all joke content.

## How users can get started

This section guides you through setting up and running the Jokes Apart application locally.

### Technology Stack

*   **Frontend:** React JS, React Router, Fetch/Axios, TailwindCSS (or custom CSS)
*   **Backend / Automation:** n8n Workflow Automation (HTTP Trigger, Google Sheets Node, Function Node, HTTP Response)
*   **Database:** Google Sheets

### Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
*   An [n8n instance](https://n8n.io/getting-started/): This can be a local desktop app, a self-hosted instance, or n8n cloud.
*   A Google Account with access to Google Sheets.

### 1. Frontend Setup

The frontend is a standard React application.

```bash
# Clone the repository
git clone https://github.com/your-github-org/jokes-apart.git
cd jokes-apart/frontend # Assuming your React app is in a 'frontend' directory

# Install dependencies
npm install
# or
yarn install
```

### 2. Google Sheets Database Setup

Create a new Google Sheet to store your jokes.

1.  Create a new Google Sheet (e.g., `Jokes Apart Database`).
2.  Name the first sheet (tab) to `Jokes`.
3.  Set up the following columns in the first row:
    *   `id` (Unique identifier for each joke)
    *   `joke` (The actual joke text)
    *   `tags` (Comma-separated tech tags, e.g., `React,JavaScript,Frontend`)

    **Example Sheet Structure:**
    | id  | joke                                           | tags                      |
    | --- | ---------------------------------------------- | ------------------------- |
    | 1   | Why do Java developers wear glasses?           | Java                      |
    | 2   | Why was the JavaScript developer sad?          | JavaScript,Frontend       |
    | 3   | What do you call a Python who only writes one? | Python,AI                 |

### 3. n8n Workflow Setup

This is the core "backend" of the application. You will create a workflow in n8n that reads from your Google Sheet, filters jokes, and serves them to the React app.

1.  **Open your n8n instance.**
2.  **Create a New Workflow.**
3.  **Add an HTTP Trigger node:**
    *   Set **HTTP Method** to `GET`.
    *   Note down the **Webhook URL**; you'll need this for the frontend.
4.  **Add a Google Sheets node:**
    *   Connect your Google Account credentials.
    *   Select the **Operation** as `Read All`.
    *   Choose your `Jokes Apart Database` spreadsheet.
    *   Select the `Jokes` sheet.
5.  **Add a Function node:**
    *   This node will filter the jokes based on the tech tags received from the frontend via the HTTP Trigger.
    *   The frontend will send `technologies` as a query parameter (e.g., `?technologies=React,Python`).
    *   Example Function Code (adjust as needed based on your `tags` column name):

    ```javascript
    const requestedTechnologies = $json.query.technologies ? $json.query.technologies.split(',') : [];
    const jokes = $nodes["Google Sheets"].json; // Assuming "Google Sheets" is the name of your Google Sheets node

    if (requestedTechnologies.length === 0) {
      return [{json: jokes}]; // Return all jokes if no technologies are specified
    }

    const filteredJokes = jokes.filter(joke => {
      if (!joke.tags) return false;
      const jokeTags = joke.tags.split(',').map(tag => tag.trim());
      return requestedTechnologies.some(tech => jokeTags.includes(tech));
    });

    return [{json: filteredJokes}];
    ```

6.  **Add an HTTP Response node:**
    *   Set **Response Body** to `Expression`.
    *   Use the expression: `{{ JSON.stringify($nodes["Function"].json) }}` (Assuming "Function" is the name of your Function node).
    *   Set **Response Code** to `200`.
7.  **Activate the n8n workflow.**

### 4. Connect Frontend to n8n

1.  In your React app's directory (`jokes-apart/frontend`), create a `.env` file or modify `src/config.js` (if it exists).
2.  Add your n8n Webhook URL:

    ```ini
    # .env
    REACT_APP_N8N_API_ENDPOINT=YOUR_N8N_WEBHOOK_URL_HERE
    ```
    Replace `YOUR_N8N_WEBHOOK_URL_HERE` with the URL copied from your HTTP Trigger node in n8n.
3.  Restart your React development server if you made changes to `.env`.

### 5. Run the Application

```bash
# In your 'frontend' directory
npm start
# or
yarn start
```

The application should now be running locally, typically at `http://localhost:3000`. Open it in your browser, register, select your favorite technologies, and enjoy the personalized jokes!

## Where users can get help

We're here to help! If you encounter any issues, have questions, or want to suggest new features, please use the following resources:

*   **GitHub Issues:** For bug reports, feature requests, or general questions, please open an issue on our [GitHub Issues page](https://github.com/your-github-org/jokes-apart/issues).
*   **Documentation:** Check the `docs/` folder for additional guides and explanations (e.g., `docs/faq.md`). (Placeholder, create these files if needed).

## Who maintains and contributes

### Maintainers

This project is currently maintained by the **Jokes Apart Team**.

### Contributing

We welcome contributions of all kinds! Whether you're fixing a bug, adding a new feature, improving documentation, or suggesting an enhancement, your help is valuable.

Please refer to our [CONTRIBUTING.md](CONTRIBUTING.md) guide for detailed information on how to get started, set up your development environment, and submit your contributions.

### Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```