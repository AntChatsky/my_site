from flask_wtf import Form
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired


class ContactForm(Form):
    name = StringField("name", validators=[DataRequired()],
                       render_kw={"placeholder": "Ваше имя"})
    mail = StringField("mail", validators=[DataRequired()],
                       render_kw={"placeholder": "Почта"})
    subject = StringField("subject",
                          render_kw={"placeholder": "Тема"})
    main = StringField("main", render_kw={"placeholder": "Текст сообщения"})