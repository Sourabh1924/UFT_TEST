'Print button and winedit current property value by use of getroproperty

Set ocollection = description.Create
ocollection("micclass").value="winbutton"
Set ocollection=dialog("Login").ChildObjects(ocollection)
sou=ocollection.count
msgbox sou
For i = 0 To sou-1 
    d=ocollection(i).getroproperty("text")
    msgbox d
Next
Set ocollection = description.Create
ocollection("micclass").value="winedit"
Set ocollection=dialog("Login").ChildObjects(ocollection)
sou1=ocollection.count
msgbox sou1
For i = 0 To sou1-1 
    b=ocollection(i).getroproperty("attached text")
msgbox b
Next
