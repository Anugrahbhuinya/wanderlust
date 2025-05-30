# 🌍 Wanderlust

Wanderlust is a full-stack travel web application where users can explore, share, and manage travel destinations. Built with Node.js, Express, MongoDB, and EJS, it provides an interactive platform for users to create, view, and edit destination listings, complete with image uploads and user authentication.

## ✨ Features

- 🗺️ Create and manage travel destination entries
- 📸 Upload and display images for destinations
- 👥 User authentication and authorization
- 📝 Review and comment on destinations
- 🔒 Secure routes and form validation
- ☁️ Cloud-based media storage (e.g., Cloudinary)

---

## 🛠️ Tech Stack

**Frontend:**
- EJS (Embedded JavaScript Templates)
- HTML5, CSS3
- Vanilla JavaScript

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB
- Mongoose

**Other Tools:**
- Passport.js (authentication)
- Multer (file upload)
- Cloudinary (image hosting)
- Joi (validation)
- Dotenv (environment variable management)

## 📂 Project Structure

wanderlust/
├── controllers/ # Application logic (routes handlers)
├── models/ # Mongoose models and schemas
├── routes/ # Express routes
├── views/ # EJS templates
├── public/ # Static assets (CSS, JS, images)
├── uploads/ # Uploaded images (local or temp storage)
├── utils/ # Utility functions
├── middleware.js # Custom middleware
├── cloudconfig.js # Cloud storage configuration
├── schema.js # Validation schemas
├── app.js # Main application entry point
└── package.json # Project metadata and dependencies


## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Frontend**: EJS, HTML, CSS, JavaScript
- **Authentication**: Passport.js
- **Image Uploads**: Multer, Cloudinary
- **Validation**: Joi or custom schema validation

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anugrahbhuinya/wanderlust.git
   cd wanderlust
install dependencies:
npm install

DB_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
SECRET=session_secret

npm start
Visit http://localhost:3000 in your browser.

🧪 Future Enhancements
Add map integration (e.g., Mapbox or Google Maps)

Support for trip planning and itineraries

User profile pages and follower system

Admin dashboard for content moderation

🤝 Contributing
Contributions are welcome! Feel free to fork the repo, open issues, or submit pull requests.

📄 License
This project is licensed under the MIT License.

📫 Contact
Created by Anugrah Bhuinya
