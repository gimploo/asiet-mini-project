from apis.models import userdata
import csv
from tqdm import tqdm
import time

START = 87365
FINISH = 87365

def run():
    with open('Users.csv') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        userdata.objects.all().delete()
        counter = 0
        for row in reader: 
            counter = counter + 1
            # if (counter == START):
            #     # print(f"Complete. @ {FINISH}")
            #     break
            film = userdata( row[0], row[1], row[2], row[3], row[4])
            film.save()
            print(counter)

