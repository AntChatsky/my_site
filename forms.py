from flask.ext.wtf import Form
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired


class ContactForm(Form):
    name = StringField("name", validators=[DataRequired()])
    mail = StringField("mail", validators=[DataRequired()])
    main = StringField("main", validators=[DataRequired()])