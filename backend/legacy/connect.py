from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['mydb']

@app.route('/api/users', methods=['POST'])
def add_user():
    data = request.json
    db.users.insert_one(data)
    return jsonify(data)
