from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

# Example user model
class User(BaseModel):
    id: int
    username: str
    email: str

# Fake in-memory data for now
fake_users = [
    User(id=1, username="joseph", email="joseph@example.com"),
    User(id=2, username="admin", email="admin@example.com")
]

@router.get("https://general-site-production.up.railway.app/api/users")
def get_users():
    return fake_users

@router.get("https://general-site-production.up.railway.app/api/users{user_id}")
def get_user(user_id: int):
    for user in fake_users:
        if user.id == user_id:
            return user
    return {"error": "User not found"}
