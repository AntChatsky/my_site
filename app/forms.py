# -*- coding: utf-8 -*-

from flask_wtf import Form
from wtforms import StringField, BooleanField, TextAreaField
from wtforms.validators import DataRequired


class TemplateForm(Form):
    name = StringField("name", validators=[DataRequired()],
                       render_kw={"placeholder": "Ваше имя"})
    mail = StringField("mail", validators=[DataRequired()],
                       render_kw={"placeholder": "Почта"})
    subject = StringField("subject",
                          render_kw={"placeholder": "Тема"})


class ContactForm(TemplateForm):
    main = TextAreaField("main", render_kw={"placeholder": "Текст сообщения"})


class OrderForm(TemplateForm):
    main = TextAreaField("main", render_kw={"placeholder":
                                            "Опишите ваш заказ"})
