from algorithm import algo
from datetime import date, datetime

test1 = {
  "name": "1554",
<<<<<<< Updated upstream
  "date": "2023-10-30",
  "topics": ["Matrices", "Eigenvalues", "Linear independence"],
  "priorities": ["Low", "High", "Medium"]
}
=======
  "date": "2023-10-20",
  "topics": ["a", "b"],
  "priorities": ["Medium", "High"]
}


>>>>>>> Stashed changes
test2 = {
  "name": "1331",
  "date": "2023-11-29",
  "topics": ["Inheritance", "Abstract classes", "Polymorphism", "Visibility"],
  "priorities": ["Medium", "Low", "High", "Low"]
}
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

test_array = [test1, test2]

weekday_array = ["3:30", "11:49"]
weekend_array = ["9:13", "3:10"]

algo.create_schedule(test_array, weekday_array, weekend_array, date.today())