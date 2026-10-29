project link : https://wanderlust-project20-1.onrender.com


# Wanderlust 🌍

Wanderlust is a full-stack travel marketplace web application inspired by Airbnb. It allows users to explore accommodations across various destinations, list their own properties with images and details, manage bookings, and leave community reviews.

---

## 🚀 Live Demo

* **Hosted Application:** [suspicious link removed] *(Update with your active deployment link)*

---

## ✨ Features

* **Authentication & Authorization:** Secure user signup, login, and session handling using Passport.js.
* **Listing Management (CRUD):**
* Browse properties with location, pricing, and descriptions.
* Create, view, edit, and delete accommodation listings.
* Granular permissions restricting edits and deletions strictly to listing owners.


* **Image Uploads & Cloud Storage:** Direct property image uploads via Cloudinary integration with Multer.
* **Reviews & Ratings:** Authenticated users can leave reviews and star ratings on listings, with deletion restricted to the author.
* **Interactive Maps & Geocoding:** Location visual mapping and coordinates integration for property exploration.
* **Form Validation & Error Handling:** Schema validations via Joi and centralized error middleware.
* **Responsive UI:** Clean, mobile-friendly interface styled with Bootstrap.

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose ODM
* **Frontend / Templating:** EJS (Embedded JavaScript templates), EJS-Mate
* **Authentication:** Passport.js, Passport-Local
* **File & Media Storage:** Cloudinary, Multer
* **Validation:** Joi
* **Styling:** Bootstrap, HTML5, CSS3

---

## 📁 Project Structure

```text
WANDERLUST-PROJECT20/
├── controllers/          # Request handlers and application logic
├── init/                 # Database initialization and seed scripts
├── models/               # Mongoose schemas (Listing, Review, User)
├── public/               # Static assets (CSS, client-side JS, images)
├── routes/               # Express route definitions
├── utils/                # Helper utilities (wrapAsync, ExpressError)
├── views/                # EJS view templates and partials
│   ├── includes/         # Navbar, footer, flash alerts
│   ├── layouts/          # Boilerplate layout wrapper
│   ├── listings/         # Listing views (index, show, new, edit)
│   └── users/            # Login and signup views
├── .env.example          # Sample environment variables
├── app.js                # Express app configuration & server entry
├── package.json          # Dependencies and scripts
└── schema.js             # Joi validation schemas

```

---

## ⚙️ Installation & Local Setup

### 1. Prerequisites

* [Node.js](https://nodejs.org/) (v16 or higher)
* [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas connection URI)
* [Cloudinary](https://cloudinary.com/) account for image uploads

### 2. Clone the Repository

```bash
git clone https://github.com/shifa455/WANDERLUST-PROJECT20.git
cd WANDERLUST-PROJECT20

```

### 3. Install Dependencies

```bash
npm install

```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
touch .env

```

Add your configuration details:

```env
PORT=8080
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_map_api_token

```

### 5. Seed the Database (Optional)

To populate the database with initial sample listings:

```bash
node init/index.js

```

### 6. Start the Server

```bash
# Production mode
node app.js

# Development mode (with auto-reload)
npx nodemon app.js

```

Open your browser and navigate to:

```
http://localhost:8080/listings

```

---

## 🔒 Security Best Practices Implemented

* Sensitive credentials managed via environment variables.
* Passwords hashed using `passport-local-mongoose` (PBKDF2).
* Server-side and client-side input validations using Joi and Bootstrap.
* Protected routes requiring authenticated user sessions.

---

## 👩‍💻 Author

* GitHub: [@shifa455](https://github.com/shifa455)
