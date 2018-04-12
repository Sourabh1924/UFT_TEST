'Print button current property value by use of getroproperty

Set ocollection = Description.Create
ocollection("micclass").value = "WinButton"
Set ocollection=Dialog("Login").ChildObjects(ocollection)
sou=ocollection.count
msgbox sou
For i = 0 To sou-1
c=ocollection(i).GetROProperty("text")
msgbox c
Next