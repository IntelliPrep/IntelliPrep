from flask_cors import CORS
from flask import Flask
from flask import request, jsonify
import sys

from algorithm import algo

api = Flask(__name__)
CORS(api)

counter = 0
@api.route('/algorithm')
def my_profile():
    global counter
    response_body = algo.hi(counter)
    counter += 1
    return response_body

@api.route('/algorithmSend', methods=['POST'])
def receive_data():
    if request.method == "POST":
        data = request.json[0]
        weekdayTime = request.json[1]
        weekendTime = request.json[2]
        print(data)
        for x in range(len(data)):
            data[x]['topics'] = data[x]['topics'].split(',')
            data[x]['priorities'] = data[x]['priorities'].split(',')
            if data[x]['name'] == '':
                data.remove(data[x])
        print(data)
        print(weekendTime)
        print(weekdayTime)
        
        return {
            "name": 'a',      
            "date" : "errorwithdatehere"
        }   
            
