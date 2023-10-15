import json
from datetime import date, timedelta, datetime, time

def hi(inputString):
    return {
        "name": inputString,      
        "date" : date.today()
    }

# declare variables outside of scope
topic_priority = {}
times_studied = {}
days_left_array = []
    
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
            if test.get("priorities")[index] == "High":
                topic_number =  8 + (days_left / max_days_left)
            elif test.get("priorities")[index] == "Medium":
                topic_number = 5 + (days_left / max_days_left)
            elif test.get("priorities")[index] == "Low":
                topic_number = 3 + (days_left / max_days_left)
            
            topic_name = "{} / {}".format(test.get("name"), topic)
            topic_priority[topic_name] = topic_number
            times_studied[topic_name] = 0

    # calculates time allotted on weekdays and weekends
    amt_time_weekday = calculate_time(weekday_list[0], weekday_list[1])
    amt_time_weekend = calculate_time(weekend_list[0], weekday_list[1])
    
    # loop through study depending if it's the weekend or weekday
    if this_day.weekday() >= 5:
        study(times_studied, topic_priority, amt_time_weekend, weekend_list[0], this_day)
    else:
        study(times_studied, topic_priority, amt_time_weekday, weekday_list[0], this_day)


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

def convert_deltatime(deltatime):
    time_format = '%H:%M:%S'
    datetime_object = datetime.strptime(deltatime, time_format).time()
    return datetime_object

# study action, prints out stuff
def study(times_studied, topic_priority, amt_time, start, day):
    # determines which topic to study based on priority number and number of times studied
    ## may need to fix this, right now it's not random if the number is the same
    current_time = start
    
    while amt_time > 0:
        if type(current_time) != str:
            current_time = current_time.strftime('%H:%M')
        
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
            current_time = str(1 + int(current_time.partition(":")[0])) + ":" + current_time.partition(":")[2] # (convert_time(current_time) + convert_deltatime(str(timedelta(hours=1)))).time()
        elif amt_time > 45:
            study_time = 45
            break_time = amt_time - 45
            amt_time = 0
            current_time = "NOT FINISHED"
            
        else:
            study_time = amt_time
            break_time = 0
            amt_time = 0
            current_time = "NOT FINISHED"
        
        print(f"Study {studied_topic} for {study_time} minutes and take a break for {break_time} minutes at {current_time} on {day}")
        topic_priority[studied_topic] -= 1
        times_studied[studied_topic] += 1
        
# main function that calls the create_task function
def create_schedule(test_array, weekday_list, weekend_list, today):
    has_tests = True
    this_day = today
    # one_day = timedelta(days=1), try to not make person cram on last day??
    
    while has_tests:
        for test in test_array:
            if convert_datetime(test.get("date")) <= convert_datetime(this_day.strftime('%Y-%m-%d')):
                test_array.remove(test)
                
        if len(test_array) == 0:
            has_tests = False
            break

        this_day += timedelta(days=1)
        create_task(test_array, weekday_list, weekend_list, this_day)