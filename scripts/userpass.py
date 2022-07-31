#!/bin/python3
import random
import string
import os
from csv import writer, reader

MAX_ENTRIES = 278858

FIELDS = ['User-ID','Location','Age','username','password']

USERNAMES = []
PASSWORDS = []


def read_usernames():
    counter = 0
    with open('usernames.txt', 'r') as file:
        for line in file:
            USERNAMES.append(line.rstrip())
            if (counter == MAX_ENTRIES):
                break
            counter = counter + 1

def read_passwords():
    counter = 0
    with open('passwords.txt', 'r') as file:
        for line in file:
            PASSWORDS.append(line.rstrip())
            if (counter == MAX_ENTRIES):
                break
            counter = counter + 1

def create_new_csv_with_usernames_and_password():
    with open('Users.csv', 'r') as oldcsv , open('NewUser.csv', 'w') as newcsv:
        csv_writer = writer(newcsv)
        csv_reader = reader(oldcsv)
        counter = 0
        for row in csv_reader:
            if (counter == 0):
                csv_writer.writerow(FIELDS)
                counter = counter + 1
                continue

            row.append(USERNAMES[counter - 1])
            row.append(PASSWORDS[counter - 1])
            csv_writer.writerow(row)
            counter = counter + 1


def main():
    read_usernames()
    read_passwords()
    create_new_csv_with_usernames_and_password()





if __name__ == "__main__":
    main()
