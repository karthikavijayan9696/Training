import urllib.request
# from xml.dom import minidom
import urllib.parse
import re
link = urllib.request.urlopen('https://www.w3schools.com/xml/simple.xml')
content = link.read()
# xmldoc = minidom.parse(link)
link.close()
# content= (xmldoc.toxml())
var1 = re.findall(r'<name>(.*?)</name>', str(content))
var2 = re.findall(r'<price>(.*?)</price>', str(content))
for i in range(len(var1)):
    print(var1[i] + ':' + var2[i])