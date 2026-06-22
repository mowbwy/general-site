from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow your frontend to call the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Backend is running!"}

@app.get("/api/hello")
def hello():
    return {"message": "Hello from FastAPI!"}
