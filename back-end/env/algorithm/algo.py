import json
from datetime import date, timedelta, datetime
import numpy

# declare variables outside of scope
topic_priority = {}
times_studied = {}
days_left_array = []
return_study_array = []
    
def create_task(test_array, weekday_list, weekend_list, day):
    
    for test in test_array:

        # updates days left array with each test's info
        
        this_day = day
        test_datetime = convert_datetime(test.get("date"))
        
        days_left = test_datetime - this_day
        days_left = days_left.days
        days_left_array.append(days_left)
        max_days_left = max(days_left_array)

        # updates the topic priority dictionary with key "<Class name> / <Topic Name>" and value topic value
        for index, topic in enumerate(list(test.get("topics"))):
            if test.get("priorities")[index].lower() == "high":
                topic_number =  8 + (days_left / max_days_left)
            elif test.get("priorities")[index].lower() == "medium":
                topic_number = 5 + (days_left / max_days_left)
            elif test.get("priorities")[index].lower() == "low":
                topic_number = 3 + (days_left / max_days_left)
            
            topic_name = "Study {} for {}".format(topic, test.get("name"))
            topic_priority[topic_name] = topic_number
            times_studied[topic_name] = 0

    # calculates time allotted on weekdays and weekends
    amt_time_weekday = calculate_time(weekday_list[0], weekday_list[1])
    amt_time_weekend = calculate_time(weekend_list[0], weekday_list[1])
    
    # loop through study depending if it's the weekend or weekday
    if this_day.weekday() >= 5:
        return_study_array.append(study(times_studied, topic_priority, amt_time_weekend, weekend_list[0], this_day))
    else:
        return_study_array.append(study(times_studied, topic_priority, amt_time_weekday, weekday_list[0], this_day))
    
    return return_study_array


# calculates difference in time in minutes
def calculate_time(start_time, end_time):
    start = (60 * int(start_time.partition(":")[0])) + int(start_time.partition(":")[2])
    end = (60 * int(end_time.partition(":")[0])) + int(end_time.partition(":")[2])

    return int(end) - int(start)

# checks if a topic needs to be studied (forcefully)
def topic_check(times_studied):
    if max(list(times_studied.values())) - max(list(times_studied.values())) > 5:
        minimum = min(times_studied.values())
        for index, values in enumerate(times_studied.values()):
            if times_studied.values()[index] == minimum:
                return times_studied.keys()[times_studied.values().index(index)]
    else:
        return
    
def convert_datetime(day):
    date_format = '%Y-%m-%d'
    datetime_object = datetime.strptime(day, date_format).date()
    return datetime_object

def convert_time(time):
    time_format = '%H:%M'
    datetime_object = datetime.strptime(time, time_format).time()
    return datetime_object

# study action, prints out stuff
def study(times_studied, topic_priority, amt_time, start, day):
    # determines which topic to study based on priority number and number of times studied
    ## may need to fix this, right now it's not random if the number is the same
    current_time = convert_time(start)
    current_time = datetime.combine(date.min, current_time) - datetime.min
    end_time = convert_time(start)
    end_time = datetime.combine(date.min, end_time) - datetime.min
    return_arr = []
    
    while amt_time > 0:
        # if type(current_time) != str:
            # current_time = current_time.strftime('%H:%M')
        
        if (topic_check(times_studied) != None):
            studied_topic = topic_check(times_studied)
        else:
            maximum = max(list(topic_priority.values()))
            for index, values in enumerate(topic_priority.values()):
                if list(topic_priority.values())[index] == maximum:
                    studied_topic = list(topic_priority.keys())[list(topic_priority.values()).index(maximum)]
        
        # different print statements depending on time
        if amt_time >= 60:
            study_time = 45
            break_time = 15
            amt_time -= 60
            end_time += timedelta(hours=1)
        elif amt_time > 45:
            study_time = 45
            break_time = amt_time - 45
            amt_time = 0
            end_time += timedelta(minutes=study_time + break_time)
        else:
            study_time = amt_time
            break_time = 0
            amt_time = 0
            end_time += timedelta(minutes=study_time)
        
        # print(f"{studied_topic} for {study_time} minutes and take a break for {break_time} minutes at {current_time} and end on {end_time} on {day}")
        the_array = [studied_topic, str(day) + " " + str(current_time), str(day) + " " + str(end_time)]
        return_arr.append(the_array)
        
        current_time = end_time
        
        topic_priority[studied_topic] -= 1
        times_studied[studied_topic] += 1
        
    return return_arr
        
# main function that calls the create_task function
def create_schedule(test_array, weekday_list, weekend_list, today):
    has_tests = True
    this_day = today
    final_arr = []
    
    while has_tests:
        for test in test_array:
            if convert_datetime(test.get("date")) <= convert_datetime(this_day.strftime('%Y-%m-%d')):
                test_array.remove(test)
                
        if len(test_array) == 0:
            has_tests = False
            break

        arr = create_task(test_array, weekday_list, weekend_list, this_day)
        this_day += timedelta(days=1)
        
    for i in arr:
            for j in i:
                final_arr.append(j)
    
    return final_arr
