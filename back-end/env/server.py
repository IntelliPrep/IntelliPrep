from flask_cors import CORS
from flask import Flask
from flask import request

api = Flask(__name__)
CORS(api)
@api.route('/algorithm')
def my_profile():
    response_body = {
        "name": "Krish",
        "about" :"amogus"
    }

    return response_body

@api.route('/receive', methods=['POST'])
def receive_date():
    if request.method == "POST":
        data = request.get_data()
        
        data = json.loads(data)
        print(data, flush=True)
        return data
        
            
