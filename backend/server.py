from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class BlogPost(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    title: str
    slug: str
    excerpt: str
    content: str
    category: str
    tags: List[str]
    image_url: str
    author: str
    published_date: str
    read_time: str

@api_router.get("/")
async def root():
    return {"message": "Tech Educator API v1.0"}

@api_router.post("/contact")
async def create_contact_message(input: ContactMessageCreate):
    try:
        message_dict = input.model_dump()
        message_obj = ContactMessage(**message_dict)
        doc = message_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        await db.contact_messages.insert_one(doc)
        return {"success": True, "message": "Your message has been received. I'll get back to you soon!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    messages = await db.contact_messages.find({}, {"_id": 0}).sort("timestamp", -1).to_list(100)
    for msg in messages:
        if isinstance(msg['timestamp'], str):
            msg['timestamp'] = datetime.fromisoformat(msg['timestamp'])
    return messages

@api_router.get("/blog", response_model=List[BlogPost])
async def get_blog_posts():
    blog_posts = [
        {
            "id": "1",
            "title": "Getting Started with Python Programming: A Beginner's Guide",
            "slug": "getting-started-with-python",
            "excerpt": "Learn the fundamentals of Python programming from scratch. Perfect for absolute beginners looking to start their coding journey.",
            "content": "Python is one of the most popular programming languages today. In this comprehensive guide, I'll walk you through the basics of Python, from installing it on your system to writing your first program. We'll cover variables, data types, control structures, and functions. By the end of this tutorial, you'll have a solid foundation to build upon.",
            "category": "Programming",
            "tags": ["Python", "Beginners", "Tutorial"],
            "image_url": "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=800",
            "author": "Adala Moses",
            "published_date": "2024-12-15",
            "read_time": "8 min"
        },
        {
            "id": "2",
            "title": "Building RESTful APIs with Django Rest Framework",
            "slug": "building-restful-apis-django",
            "excerpt": "Master the art of building scalable and secure RESTful APIs using Django and Django Rest Framework.",
            "content": "Django Rest Framework (DRF) is a powerful toolkit for building Web APIs. In this tutorial, we'll create a complete REST API from scratch, implementing authentication, serializers, viewsets, and proper HTTP methods. You'll learn best practices for API design, testing, and documentation.",
            "category": "Web Development",
            "tags": ["Django", "API", "Backend"],
            "image_url": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
            "author": "Adala Moses",
            "published_date": "2024-11-28",
            "read_time": "12 min"
        },
        {
            "id": "3",
            "title": "Cybersecurity Fundamentals: Protecting Your Digital Life",
            "slug": "cybersecurity-fundamentals",
            "excerpt": "Essential cybersecurity practices every computer user should know to stay safe online.",
            "content": "In today's digital age, understanding cybersecurity is crucial. This article covers the fundamentals of cybersecurity, including password management, recognizing phishing attempts, securing your network, and protecting personal data. Learn practical tips to safeguard your digital presence.",
            "category": "Cybersecurity",
            "tags": ["Security", "Best Practices", "Privacy"],
            "image_url": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
            "author": "Adala Moses",
            "published_date": "2024-11-10",
            "read_time": "10 min"
        },
        {
            "id": "4",
            "title": "Modern Web Development: HTML, CSS, and JavaScript Essentials",
            "slug": "modern-web-development-essentials",
            "excerpt": "A comprehensive guide to building responsive and interactive websites using the core web technologies.",
            "content": "Web development starts with three core technologies: HTML for structure, CSS for styling, and JavaScript for interactivity. This guide covers modern best practices, responsive design principles, and practical examples to help you build professional websites. Perfect for aspiring web developers.",
            "category": "Web Development",
            "tags": ["HTML", "CSS", "JavaScript"],
            "image_url": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800",
            "author": "Adala Moses",
            "published_date": "2024-10-22",
            "read_time": "15 min"
        }
    ]
    return blog_posts

@api_router.get("/blog/{slug}", response_model=BlogPost)
async def get_blog_post(slug: str):
    posts = await get_blog_posts()
    post = next((p for p in posts if p["slug"] == slug), None)
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return post

@api_router.get("/resume/download")
async def download_resume():
    resume_path = ROOT_DIR / "static" / "cv.pdf"
    if not resume_path.exists():
        raise HTTPException(status_code=404, detail="Resume not found")
    return FileResponse(
        path=resume_path,
        filename="Adala_Moses_Resume.pdf",
        media_type="application/pdf"
    )

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()