# -*- coding: utf-8 -*-

from config import Config
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


def mail(subject, main, name, mail):
    message = MIMEMultipart()
    message["From"] = Config.FROM_ADDR
    message["To"] = mail
    message["Subject"] = subject

    main = main + "\n" + name + ", " + mail
    message.attach(MIMEText(main, "plain"))

    message = message.as_string()

    server.sendmail(Config.FROM_ADDR, "antonyprinzev@gmail.com", message)


server = smtplib.SMTP("smtp.gmail.com", 587)
server.starttls()
server.login(Config.FROM_ADDR, Config.PASSWORD)