import smtplib

message = 'Sample email for you'
mail = smtplib.SMTP('smtp.gmail.com', 587)
mail.ehlo()
mail.starttls()
mail.login('karthikavijayan.sayonetech@gmail.com','sayone@96')
mail.sendmail('karthikavijayan.sayonetech@gmail.com', 'karthikavijayan9696@gmail.com', message)
mail.close()