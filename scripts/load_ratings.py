from apis.models import Rating
import csv

def run():
    with open('Ratings.csv') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        Rating.objects.all().delete()
        counter = 0
        for row in reader: 
            counter = counter + 1
            print(f"{counter} : {row}")
            film = Rating(counter, row[0], row[1], row[2])
            film.save()

