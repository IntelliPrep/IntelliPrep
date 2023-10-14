from flask_cors import CORS
from flask import Flask
from flask import request
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

@api.route('/receive', methods=['POST'])
def receive_date():
    if request.method == "POST":
        data = request.get_data()
        
        data = json.loads(data)
        print(data, flush=True)
        return data
        
            
