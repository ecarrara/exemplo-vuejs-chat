# -*- coding: utf-8 -*-

from flask import Flask, request, jsonify
from flask_cors import cross_origin


storage = []


def add_message(msg):
  msg['user'] = request.remote_addr
  storage.append(msg)
  return msg


def list_messages():
  return storage


app = Flask(__name__)
app.config['DEBUG'] = True


@app.route('/messages', methods=['GET', 'POST'])
@cross_origin()
def messages():
  if request.method == 'POST':
    msg = add_message(request.get_json())
    return jsonify(msg)
  messages = list_messages()
  return jsonify(dict(messages=messages))
