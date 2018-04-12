'Highlight all button object in the login screen and count the button object.

Set ocollection = Description.Create
ocollection("micclass").value = "WinButton"
Set ocollection=Dialog("text:=Login").ChildObjects(ocollection)
For i = 0 To ocollection.count
ocollection(i).highlight
Next
msgbox ocollection.count
