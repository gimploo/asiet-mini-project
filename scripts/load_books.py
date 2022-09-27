from apis.models import Books
import csv
from tqdm import tqdm
import time
import re
import random

START = 87365
FINISH = 87365


def run():
    TITLE = list()
    AUTHORS = list()
    PUBLISHERS = list()
    DATES = list()
    with open('dataset/top-authors.csv') as file:
        reader = csv.reader(file)
        next(reader)
        counter = 1
        for row in reader:
            if (counter == 100):
                break
            TITLE.append(row[1].lower())
            AUTHORS.append(row[2].lower())
            PUBLISHERS.append(row[6].lower())
            DATES.append(row[7][-4:])
            counter = counter + 1

    AUTHORS = set(AUTHORS)
    DATES = set(DATES)
    PUBLISHERS = set(PUBLISHERS)

    with open('dataset/Books.csv') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header
        counter = 1
        Books.objects.all().delete()
        for row in reader:
            point = random.randint(1, 6)
            date = row[2]
            publisher = row[3].lower()

            book = Books(id=counter, ISBN=row[0], Book_title=row[1], Book_Author=row[2],
                         Year_of_Publication=row[3],
                         Publisher=row[4], img_url_S=row[5], img_url_M=row[6], img_url_L=row[7], point=int(point))
            counter = counter + 1
            book.save()
            print(row, point)
