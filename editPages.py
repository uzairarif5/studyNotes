import os 

loc = "uzairarif5.github.io/src/pages/"
names = os.listdir(path = loc)
for name in names:
    if name[-3:] != ".js":
        selectedFile = os.listdir(path = loc+name)
        for jsFile in selectedFile:
            try:
                if(jsFile[-13:] == "_worksheet.js"):
                    continue
            except:
                pass
            if jsFile[-3:] == ".js":
                file = open(loc+name+"/"+jsFile,"r+", encoding="utf8")
                text = file.read()
                file.close()
                if("<li className=\"mathStuff\">" in text):
                    subTexts = text.split("<li className=\"mathStuff\">")
                    for i in range(1,len(subTexts)):
                        subTexts[i] = subTexts[i].replace("</li>", "</MathStuff>", 1)
                    file = open(loc+name+"/"+jsFile,"w", encoding="utf8")
                    file.write("<MathStuff>".join(subTexts))
                    file.close()