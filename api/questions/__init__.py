from random import Random
from questions.questions import questions


def get_questions(token: str, offset: int, count: int):
    shuffle_questions = questions.copy()
    Random(token).shuffle(shuffle_questions)
    return shuffle_questions[offset:offset + count]
