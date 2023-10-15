from algorithm import algo
from datetime import date

test1 = {
  "name": "1554",
  "date": "2023-10-17",
  "topics": ["a", "b", "c"],
  "priorities": ["Medium", "High", "low"]
}

test2 = {
  "name": "1331",
  "date": "2023-11-2",
  "topics": ["Inheritance", "Abstract classes", "Polymorphism", "Visibility"],
  "priorities": ["Medium", "Low", "High", "Low"]
}

test_array = [test1, test2]

weekday_array = ["16:31", "19:31"]
weekend_array = ["17:32", "22:32"]

arr = algo.create_schedule(test_array, weekday_array, weekend_array, date.today())
  
print(arr)