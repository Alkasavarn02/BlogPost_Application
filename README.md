### BlogPost Backend Application
Welcome to the BlogPost Application! 
This project is a full-stack web application where users can create, read, update, and delete blog posts. 

## Usage

# Create a Post:
users can create new blog posts.

# View Posts:
Users can view all blog posts on the home page.

# Like and Comment:
Users can like posts and leave comments on them.

### Posts
GET /api/v1/getPost - Get all posts.
POST /api/v1/createPost - Create a new post.

### Likes and Comments
POST /api/v1/likePost - Like a post.
POST /api/v1/commentPost - Comment on a post.

### Technologies Used

# Backend:
Node.js
Express.js
MongoDB (Mongoose)
JSON Web Tokens (JWT) for authentication

# Git
Postman for API testing

# Project structure
BlogPost_Application/
├── controllers/      # Contains the logic for handling requests and responses
├── models/           # Database schemas (Mongoose models)
├── routes/           # API routes
├── middleware/       # Middleware functions (e.g., authentication)
├── config/           # Configuration files (e.g., database connection)
├── public/           # Static files (if applicable)
├── .env              # Environment variables
├── package.json      # NPM dependencies and scripts
└── README.md         # Project documentation
