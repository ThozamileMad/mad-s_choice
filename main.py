
from flask import Flask, render_template

# Set up flask application
app = Flask(__name__)


@app.route("/play")
def play():
    return render_template("play.html")


if __name__ == "__main__":
    app.run(debug=True)
