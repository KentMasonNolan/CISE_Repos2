## CISE_Repos

# ENSE701 - Week 3 - Lab Evidence

**This markdown will answer the following questions:**

1.	You could explain the critical steps of the MNNN stack tutorial that creates the Book app. You could include some written notes beside chosen screenshots that explain what is being done and anything new you learned or any tricks or mistakes you made.
2.	You could discuss the application components and how they relate. A screenshot(s)  of GitHub – code for frontend and backend; screen shot of the package.json file; to support your answer may be suitable.
3.	You could discuss the data components and provide a screenshot of the MongoDB database created.
4.	What react library options are there to create each of the following:
a.	Drop down widget (such as needed to select the SE practice in the SPEED app)
b.	An input form (such as the article submission form needed for the SPEED app.
c.	A data display table (such as needed to display the evidence level and claims for the SPEED app). 
5.	You could discuss the Books app and how it relates to the development of the SPEED product, and perhaps provide a screenshot of the app running locally on a browser.
6.	Explain the purpose of the CORS command.


### Questions

## You could explain the critical steps of the MNNN stack tutorial that creates the Book app.

Backend Setup with Nest.js and MongoDB:

The first major step is setting up the backend with Nest.js, where you initialize the backend project and configure the server to listen on a specified port. The tutorial emphasizes setting up the entry point in main.ts, where the server is bootstrapped and started.
Another crucial step is connecting the backend to a MongoDB database using the @nestjs/mongoose module. This involves setting up database schemas, creating data transfer objects (DTOs), and implementing CRUD operations via RESTful APIs. During this process, the tutorial teaches you to use environment variables (stored in a .env file) to securely manage database connection strings, which is a good practice to avoid hardcoding sensitive information.

Frontend Integration with Next.js and React:
On the frontend, the tutorial guides you through setting up a Next.js project, where you build various components such as forms for adding books, tables for displaying books, and cards for viewing book details.
Integrating Bootstrap for styling within a server-side rendered (SSR) Next.js app was particularly insightful, as it required a specific setup to ensure compatibility.
The tutorial also covers routing within Next.js, showing how to create dynamic routes for editing and displaying specific books based on their IDs.

Reflection:

This tutorial was an excellent hands-on introduction to building a full-stack application with the MNNN stack. I learned how to effectively structure a project, manage state and props in React, and interact with a backend API. One surprising element was the simplicity of integrating MongoDB with Nest.js using the @nestjs/mongoose module, which abstracts many of the complexities. A particularly useful resource I consulted was the official Nest.js documentation, which provided additional clarity on dependency injection and module organization. This experience will be directly applicable to building more complex features for the SPEED app.

## 2.	You could discuss the application components and how they relate. You could put the lotion on your skin.

The application components are divided into frontend and backend parts:

- Backend Components: These include the API endpoints, controllers, services, and MongoDB connection. The backend is responsible for processing data and serving it to the frontend.
- Frontend Components: These include the React components like CreateBook, ShowBookList, BookCard, etc., which handle user interaction and display data fetched from the backend.
- Relationship: The frontend sends requests to the backend via API endpoints to perform actions like retrieving or updating book data. The backend processes these requests and interacts with the MongoDB database as needed.


## 3.	You could discuss the data components and provide a screenshot of the MongoDB database created.

The MongoDB database stores the book records, each represented by a document. Critical components include:

- Collections: Store documents, such as the collection for books.
- Documents: Individual records in MongoDB, containing fields like title, author, isbn, etc.

ADD SCREENSHOTS

## 4.	What react library options are there to create each of the following:

a.	Drop down widget (such as needed to select the SE practice in the SPEED app)

### Drop-down Widget:

    Library: react-select
    Purpose: To create a customizable and accessible dropdown menu, which can be used for selecting software engineering practices in the SPEED app.

    
b.	An input form (such as the article submission form needed for the SPEED app.

### Input Form:

    Library: formik
    Purpose: To handle form state and validation, ideal for creating an article submission form in the SPEED app.

c.	A data display table (such as needed to display the evidence level and claims for the SPEED app). 

### Data Display Table:

    Library: react-table
    Purpose: To display data in a sortable, filterable table, which is useful for showing evidence levels and claims in the SPEED app.

## 5. Discuss the Books app

Relation to SPEED Product Development:


    Data Management: Just as the Books app manages book records, the SPEED product will manage records of software engineering practices and their evidence levels. The backend will need to handle CRUD operations on this data, similar to how the Books app handles books.
    
    APIs for Interaction: The SPEED product will require a set of RESTful APIs to enable interactions between the frontend and backend, ensuring data is correctly retrieved, stored, and updated. The API design in the Books app provides a template for how these interactions can be structured.
    
    User Interface: The Books app demonstrates how to create a responsive user interface using React components like forms and tables. The SPEED product will similarly require a user interface that allows users to select software engineering practices, submit new articles, and view evidence levels, leveraging the same React-based approach.
    
    Modular Architecture: The modular structure of the Books app, with separate components for different functionalities, can be mirrored in the SPEED product to maintain clean, maintainable, and scalable code.

Learning and Application:


Component Reuse: Components such as dropdowns, forms, and data tables in the Books app can be adapted for use in the SPEED product. For instance, the dropdown used to select a book author in the Books app can be repurposed for selecting a software engineering practice in the SPEED app.

Development Practices: The Books app also illustrates best practices like separating concerns, using environment variables for configuration, and handling asynchronous data fetching—all of which are relevant to the SPEED product.

## 6.	Explain the purpose of the CORS command.

CORS (Cross-Origin Resource Sharing) command is to control how resources on a web server can be requested from another domain outside the domain from which the resource originated. By default, web browsers restrict cross-origin HTTP requests for security reasons. This restriction is meant to prevent malicious websites from accessing data on other domains without permission.

### Why CORS is Important:

Enables Secure Cross-Origin Requests: In a full-stack application, like the one you're building with the MNNN stack, the frontend (running on one domain, like localhost:3000) needs to communicate with the backend API (possibly running on another domain, like localhost:8082). CORS is required to allow this cross-origin communication.
Specifies Allowed Origins: The app.enableCors() command in your Nest.js backend allows you to specify which domains are permitted to make requests to your API. You can configure CORS to accept requests from any domain or restrict it to specific ones, adding an extra layer of security.