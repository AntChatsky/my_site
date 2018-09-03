# -*- coding: utf-8 -*-

from flask import Flask, render_template, redirect, url_for, flash, request
from forms import ContactForm, OrderForm
from backend import mail

app = Flask(__name__, static_url_path="/static")
app.config.from_object("config")


@app.route("/")
@app.route("/homepage")
def homepage():
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


@app.route("/contacts", methods=["GET", "POST"])
def contacts_page():
    data = request.args.get("type")

    if data == "order":
        form = OrderForm()

    else:
        form = ContactForm()

    if request.method == 'POST' and form.validate():
        mail(subject=form.subject.data, main=form.main.data,
             name=form.name.data, mail=form.mail.data)

        return redirect(url_for("contacts_page"))

    return render_template("contacts.html", form=form)


@app.errorhandler(404)
def page_not_found(e):
    return render_template("error404.html"), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template("error500.html"), 500


if __name__ == "__main__":
    app.run(debug=True)
