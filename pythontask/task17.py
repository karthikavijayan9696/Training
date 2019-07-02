from bs4 import BeautifulSoup

import requests



url=("http://example.webscraping.com")

r=requests.get(url)

data=r.text

soup=BeautifulSoup(data, features="html.parser")
container=soup.findAll('td')

for i in range(0, len(container)):

  print(container[i].a.text)

  print(container[i].img)