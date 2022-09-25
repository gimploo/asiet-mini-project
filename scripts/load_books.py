from apis.models import Books
import csv
from tqdm import tqdm
import time

START = 87365
FINISH = 87365

def run():
    with open('Books.csv') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        Books.objects.all().delete()
        counter = 0
        for row in reader: 
            book = Books( row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7])
            book.save()
            print(row)

