 # Blog Post Timeline

This is a dummy blog post timeline page focusing on React best practices and structure. The project is built with React, TypeScript, React Query, and Tailwind CSS.

## Table of Contents

- [Technologies](#technologies)
- [Best Practices](#best-practices)
- [Environment Setup](#environment-setup)
 
## Technologies

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **React Query**: A data-fetching library for React.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Tailwind CSS**: A utility-first CSS framework.

## Best Practices

1. **Component-Based Architecture**: Break down the UI into reusable components.
2. **TypeScript for Type Safety**: Use TypeScript to ensure type safety across the application.
3. **React Query for Data Fetching**: Manage server-state using React Query.
4. **Axios for HTTP Requests**: Use Axios for making HTTP requests.
5. **CSS in JS**: Utilize Tailwind CSS for styling, allowing for a utility-first approach.
 

## Environment Setup

1. Ensure you have the following installed:
   - [Node.js](https://nodejs.org/) (> 18.x)
   - [Yarn](https://classic.yarnpkg.com/en/docs/install) (>= 1.x)

2. Clone the repository:
   ```sh
   git@github.com:SajiburMunna/blog-posts-timeline.git

 3. Navigate to the project directory:
    ```sh
    cd blog-posts-timeline
   
4. Create .env.local file on root and add this key:
   ```sh
   VITE_BASE_URL = 
5. Install dependencies:
   ```sh
   yarn install
6. Start the development server:
   ```sh
   yarn dev
Open your browser and visit `http://localhost:5173`.

### Additional Notes

1. **.env**: Ensure you add your own environment variables and replace `https://jsonplaceholder.typicode.com` with your actual API URL.
2. **Folder Structure**: Customize the folder structure according to your project's requirements.


