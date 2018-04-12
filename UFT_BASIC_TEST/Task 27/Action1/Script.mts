'Highlight all the object in the login screen and count the object.

Set ocollection = Description.Create
Set ocollection=Dialog("text:=Login").ChildObjects(ocollection)
For i = 0 To ocollection.count
ocollection(i).highlight
Next
msgbox ocollection.count
