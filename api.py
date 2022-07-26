from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
from json import dumps

app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route("/data", methods=['GET', 'POST'])

def convert():

    data = request.data

    if request.method == 'POST':

        print('Request has been received!')

        data = {
            'message': 'received'
        }

        return jsonify(data)

    if request.method == 'GET':

        data = {
            'greeting': 'hello'
        }

        return jsonify(data)

if __name__ == '__main__':
    app.run(port=5000)
