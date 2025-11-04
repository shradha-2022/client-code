
from flask import Flask, request, jsonify
from lambda_function import handler

app = Flask(__name__)

@app.route('/api/compile', methods=['POST'])
def compile_code():
    # Simulate the event object that AWS Lambda would create
    event = {
        'body': request.get_data(as_text=True)
    }
    # Call your existing handler
    response = handler(event, None)
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
