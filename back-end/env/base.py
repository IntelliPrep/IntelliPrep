from flask_cors import CORS
from flask import Flask
 

api = Flask(__name__)
CORS(api)
@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Krish",
        "about" :"amogus"
    }

    return response_body
