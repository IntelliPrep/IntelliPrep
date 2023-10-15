from flask_cors import CORS
from flask import Flask
from flask import request, jsonify
import sys
from datetime import date

from algorithm import algo

api = Flask(__name__)
CORS(api)

@api.route('/algorithmSend', methods=['POST'])
def receive_data():
    if request.method == "POST":
        data = request.json[0]
        weekdayTime = request.json[1]
        weekendTime = request.json[2]
        for x in range(len(data)):
            data[x]['topics'] = data[x]['topics'].split(',')
            data[x]['priorities'] = data[x]['priorities'].split(',')
            if data[x]['name'] == '':
                data.remove(data[x])
    returnInput = algo.create_schedule(data, weekdayTime, weekendTime, date.today())
    
    print("PRINTING DATA!")
    for x in returnInput:
        print(x)
    return returnInput
        

