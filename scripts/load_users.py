from apis.models import userdata
import csv


def run():
    with open('Users.csv') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        userdata.objects.all().delete()
        counter = 0

        for row in reader:
            print(row)
            if (counter == 200):
                break 

            film = userdata( row[0], row[1], row[2], row[3], row[4])
            film.save()
            counter = counter + 1

