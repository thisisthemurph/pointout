from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from questions import questions

app = FastAPI()

origins = [
    "http://0.0.0.0",
    "http://0.0.0.0:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/questions")
def get_questions(offset: int = 0, count: int = 10):
    return questions[offset:offset + count]
