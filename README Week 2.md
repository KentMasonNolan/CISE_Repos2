## CISE_Repos

# ENSE701 - Week 2 - Lab Evidence

**This markdown will answer the following questions:**

1.	Discuss how you deployed the backend APIs at “localhost:5000/api/articles/3” on your local browser.  A screenshot(s) to support your answer may be suitable.
2.	Show your knowledge of the jest testing framework, and how it supports testing, through discussing an example of one test passing and one test failing when you run the tests locally for the React frontend.  A screenshot(s) to support your answer may be suitable.
3.	What is an API endpoint?
4.	What CLI command would install all the packages that are dependencies listed in the package.json file? 
5.	What was the purpose of the “.env” file?
6.	What is the purpose of the .gitignore file?
7.	What is a single-page application?
8.	Show an example of a CI/CD workflow with automated testing and a workflow enabled by GitHub actions.  A screenshot(s) to support your answer may be suitable.
9.	You may choose to select another aspect of the worksheet to evidence (e.g. the use of Postman), with a screenshot(s) to support your answer

### Questions

## 1.	Discuss how you deployed the backend APIs at “localhost:5000/api/articles/3” on your local browser.

To deploy the backend APIs at localhost:5000/api/articles/3, we have followed these steps:

- Set up the server: Use Nest.js to create and start a server. Make sure that your server is running locally on port 5000.
- Define API endpoints: Create the necessary API routes in your app.controller.ts file to handle requests. The endpoint /api/articles/:id would be designed to fetch an article by its ID.
- Access the API: Once the server is running, open a web browser and navigate to http://localhost:5000/api/articles/3 to view the data for the article with ID 3.


## 2. Show your knowledge of the jest testing framework, and how it supports testing, through discussing an example of one test passing and one test failing when you run the tests locally for the React frontend.

**I mean, you gave us the code to write this**

Jest is a testing framework that allows you to write and run tests for your React components. For example:

Passing Test: A simple test might check if a component renders without crashing.

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

Failing Test: You could intentionally create a test that fails by changing the expected output, such as:

it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(5);  // This will fail
});


## 3. What is an API endpoint?

An API endpoint is a specific URL route in a web server that handles requests from clients. It is a point of interaction where the client can send requests to retrieve, update, or delete data. For example, http://localhost:5000/api/articles/3 is an endpoint that might return the data of an article with the ID 3.

Just like we did before

## 4. What CLI command would install all the packages that are dependencies listed in the package.json file? 

The CLI command to install all the packages listed as dependencies in the package.json file is:

npm install

This command will download and install all the required packages, ensuring your project has all the necessary libraries to run.

## 5. Purpose of the .env File

The .env file is used to store environment variables, such as configuration settings and sensitive data like API keys. For instance, it might contain the port number for your server:

makefile

PORT=5000

Using a .env file helps keep configuration values separate from your code, making your application more secure and easier to manage.

## 6. Purpose of the .gitignore File

The .gitignore file specifies which files and directories should be ignored by Git, preventing them from being tracked in your version control system. This typically includes files like node_modules/ and configuration files containing sensitive information, like .env. This ensures that unnecessary or sensitive files aren't accidentally committed to your repository.

## 7. What is a Single-Page Application?

A Single-Page Application (sometimes called SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app, without requiring a full page reload. SPAs offer a smoother user experience by reducing load times and avoiding interruptions caused by page refreshes.