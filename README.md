# US Senator Explorer

The **US Senator Explorer** is a React-based web application designed to provide a clear, accessible directory of United States Senators. Built using a modular component architecture, the application transforms raw JSON data into an interactive table, allowing users to quickly find legislative representatives and their direct contact information.

---

## Key Features

* **Comprehensive Directory:** Renders a full list of all 100 US Senators (based on January 2022 data).
* **Direct Contact Integration:**
    * **One-Click Dialing:** Phone numbers are formatted with the `tel:` protocol for instant calling on mobile devices.
    * **Social Media Connectivity:** Direct links to official Twitter handles for easy public engagement.
* **Clean Data Visualization:** Displays name, state affiliation, and political party (e.g., "D - WA") in a structured, Bootstrap-styled interface.
* **Modular Architecture:** Built with highly reusable React components, including a generic `TableHeader` that can be adapted for various data types.

---

## Technical Stack

* **Library:** React.js
* **Syntax:** JSX (JavaScript XML)
* **Styling:** Bootstrap 5 (Integrated via CSS classes)
* **Data Source:** JSON-based representative records

---

## Components

The application follows a strict hierarchical structure to ensure data flows efficiently via **props**:

* **`App`**: The root container that manages the primary data injection.
* **`SenatorTable`**: Responsible for the structural layout of the data grid.
* **`TableHeader`**: A reusable utility component that dynamically maps column names.
* **`SenatorRow`**: A functional component that parses individual senator objects into readable table rows.

---

## Installation & Setup

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1.  **Clone the repository** and navigate to the project folder:
    ```bash
    cd senator-explorer
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Launch the development server**:
    ```bash
    npm start
    ```

4.  **View in browser**: 
    The app will automatically open at `http://localhost:3000`.

---

## Data Attribution
The data utilized in this application represents the US Senate body as of **January 2022**. Links and contact details are sourced from public government records and official social media profiles.
