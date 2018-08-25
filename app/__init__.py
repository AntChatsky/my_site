from flask import Flask, render_template


app = Flask(__name__, static_url_path="/static")


@app.route("/")
@app.route("/homepage")
def index_page():
    return render_template("index.html")


@app.route("/info")
def info_page():
    return render_template("info.html")


@app.route("/skills")
def skills_page():
    return render_template("skills.html")


@app.route("/work")
def work_page():
    return render_template("work.html")


@app.route("/contacts")
def contacts_page():
    return render_template("contacts.html")


@app.errorhandler(404)
def page_not_found(e):
    return render_template("error404.html"), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template("error500.html"), 500


if __name__ == "__main__":
    app.run(debug=True)