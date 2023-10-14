<<<<<<< Updated upstream
import json
from datetime import date

def hi(inputString):
    return {
        "name": inputString,      
        "date" : date.today()
    }

def create_schedule(test_array, weekday_list, weekend_list):

    # creating empty dictionaries
    topic_priority = {}
    times_studied = {}
    days_left_array = []

    # reading test array
    for test in test_array:
        days_left = test.get("date") - date.today()
        days_left_array.append(days_left)

        # creates the dictionary with key "<Class name> / <Topic Name>" and value topic value
        for index, topic in enumerate(test.get("topics")):
            if test.get("priorities")[index] == "High":
                topic_number = days_left * 10
            elif test.get("priorities")[index] == "Medium":
                topic_number = days_left * 5
            elif test.get("priorities")[index] == "Low":
                topic_number = days_left * 2
            
            topic_name = "{} / {}".format(test.get("name"), topic)
            topic_priority[topic_name] = topic_number

    return {

    }

# helper methods


    
if __name__ == "__main__" and __package__ is None: # idek if this is needed
=======
def hi(inputString, inputString2):
    return {
        "name": inputString,      
        "about" : inputString2
    }

if __name__ == "__main__" and __package__ is None: #idek if this is needed
>>>>>>> Stashed changes
    __package__ = ".code.backend.algorithm.algo"