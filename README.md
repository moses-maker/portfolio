# Adala Moses - Professional Portfolio Website

🚀 Modern professional website for an ICT & Engineering Lecturer, Backend Developer, and Technology Trainer showcasing online and on-site teaching services.

## 🌟 Live Demo

- **Website:** [View Live Site](https://tech-educator-pro.preview.emergentagent.com)
- **LinkedIn:** [moses-omoto-adala](https://linkedin.com/in/moses-omoto-adala)
- **GitHub:** [mosese-maker](https://github.com/mosese-maker)

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek design with cyan/purple tech accents
- 📚 **Teaching Services** - Showcase both online webinars and on-site training
- 💼 **Project Portfolio** - Display backend development projects
- 📝 **Blog System** - Educational content with category filtering
- 📬 **Contact Form** - Integrated with MongoDB storage
- 🎓 **Certifications** - Display professional credentials
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- ⚡ **Fast Performance** - Optimized with smooth animations

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Axios** - API requests

### Backend
- **FastAPI** - Python web framework
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation
- **Python 3.10+**

### Database
- **MongoDB** - NoSQL database

## 📦 Project Structure

```
├── frontend/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Skills.js
│   │   │   ├── Teaching.js
│   │   │   ├── Projects.js
│   │   │   ├── Leadership.js
│   │   │   ├── Certifications.js
│   │   │   ├── Blog.js
│   │   │   ├── Contact.js
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/                # FastAPI backend
│   ├── static/            # Static files (resume PDF)
│   ├── server.py          # Main API server
│   ├── requirements.txt
│   └── .env.example
│
├── design_guidelines.json  # Design system specifications
├── FREE_HOSTING_GUIDE.md  # Deployment instructions
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and Yarn
- Python 3.10+
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

2. **Setup Backend**
```bash
cd backend
pip install -r requirements.txt

# Copy .env.example to .env and configure
cp .env.example .env
# Edit .env with your MongoDB connection string
```

3. **Setup Frontend**
```bash
cd frontend
yarn install

# Copy .env.example to .env and configure
cp .env.example .env
# Edit .env with your backend URL
```

### Running Locally

1. **Start Backend** (Terminal 1)
```bash
cd backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

2. **Start Frontend** (Terminal 2)
```bash
cd frontend
yarn start
```

3. **Open Browser**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8001/api

## 🌐 Deployment

See [FREE_HOSTING_GUIDE.md](./FREE_HOSTING_GUIDE.md) for detailed deployment instructions including:

- **Vercel** (Frontend hosting)
- **Render** (Backend hosting)
- **Netlify** (Alternative frontend)
- **Railway** (Alternative backend)
- **MongoDB Atlas** (Database hosting)

### Quick Deploy

**Frontend to Vercel:**
```bash
npm i -g vercel
cd frontend
vercel
```

**Backend to Render:**
1. Connect GitHub repository
2. Create new Web Service
3. Configure build and start commands
4. Add environment variables

## 📧 Contact Form Setup

The contact form stores submissions in MongoDB. To view submissions:

```bash
# Using curl
curl https://your-backend-url.com/api/contact

# Or access MongoDB directly
```

## 🎨 Design System

- **Colors:**
  - Primary: Deep Navy (#0f172a)
  - Accent Cyan: #06b6d4
  - Accent Purple: #7c3aed
  
- **Fonts:**
  - Headings: Outfit
  - Body: DM Sans
  - Code: JetBrains Mono

- **Components:** Pre-built Shadcn UI components in `/frontend/src/components/ui/`

## 📝 Blog Management

Blog posts are currently static in `server.py`. To add new posts:

1. Edit `/backend/server.py`
2. Add post object to `blog_posts` list in `get_blog_posts()` function
3. Restart backend server

For dynamic blog management, consider integrating:
- Contentful
- Strapi
- Ghost CMS

## 🔧 Environment Variables

### Frontend (.env)
```env
REACT_APP_BACKEND_URL=your_backend_url
```

### Backend (.env)
```env
MONGO_URL=your_mongodb_connection_string
DB_NAME=portfolio_db
CORS_ORIGINS=your_frontend_url
```

## 📊 API Endpoints

### Public Endpoints
- `GET /api/` - API status
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/{slug}` - Get single blog post
- `POST /api/contact` - Submit contact form
- `GET /api/resume/download` - Download resume PDF

### Admin Endpoints (Future)
- `GET /api/contact` - View all contact submissions

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 About

**Adala Omoto Moses**
- 🎓 ICT & Engineering Lecturer
- 💻 Backend Developer (Django, FastAPI, PostgreSQL)
- 📚 Technology Trainer
- 📍 Available for Remote & On-Site Training

### Connect
- **Email:**
- **Phone:** 
- **LinkedIn:** [moses-omoto-adala](https://linkedin.com/in/moses-omoto-adala)
- **GitHub:** [mosese-maker](https://github.com/mosese-maker)

---

**Ready to launch your online teaching services!** 🚀

For deployment help, see [FREE_HOSTING_GUIDE.md](./FREE_HOSTING_GUIDE.md)
