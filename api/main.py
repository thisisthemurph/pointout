import uuid
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from questions import get_questions

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://127.0.0.1",
    "http://127.0.0.1:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/refresh")
def refresh():
    return dict(token=str(uuid.uuid4()))


@app.get("/questions")
def get_questions_list(offset: int = 0, count: int = 10, token: str = None):
    return get_questions(token, offset, count)
