'Count number of winbutton in login window in flight GUI.

Set ocollection = Description.Create
ocollection("micclass").value = "WinButton"
Set ocollection=Dialog("text:=Login").ChildObjects(ocollection)
msgbox ocollection.count
