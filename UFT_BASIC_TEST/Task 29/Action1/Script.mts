'Do the task 23 and highlight all the objects and count them.

'highlight all the object in login screen
Set ocollection = Description.Create
Set ocollection=Dialog("text:=Login").ChildObjects(ocollection)
For i = 0 To ocollection.count-1
ocollection(i).highlight
Next
msgbox ocollection.count
dialog("text:=Login").winedit("attached text:=Agent Name:").Set "sourabh"
dialog("text:=Login").winedit("attached text:=Password:").Set "mercury"
dialog("text:=Login").winbutton("text:=Help").Click
'highlight all the object in the help menu
Set ocollection = Description.Create
Set ocollection=Dialog("text:=Flight Reservations").ChildObjects(ocollection)
For i = 0 To ocollection.count-1
ocollection(i).highlight
Next
msgbox ocollection.count
dialog("text:=Flight Reservations").winbutton("text:=OK").Click
dialog("text:=Login").winbutton("text:=OK").Click

'highlight all the object in the Flight Reservations screen
Set ocollection = Description.Create
Set ocollection=window("regexpwndtitle:=Flight Reservation").ChildObjects(ocollection)
For i = 0 To ocollection.count-1
ocollection(i).highlight
Next
msgbox ocollection.count
window("regexpwndtitle:=Flight Reservation").activex("progid:=MSMask\.MaskEdBox\.1").Type "022816"
window("regexpwndtitle:=Flight Reservation").wincombobox("attached text:=Fly From:").select "london"
window("regexpwndtitle:=Flight Reservation").wincombobox("attached text:=Fly To:").select "frankfurt"
window("regexpwndtitle:=Flight Reservation").winbutton("text:=FLIGHT").click
window("regexpwndtitle:=Flight Reservation").dialog("text:=Flights Table").winlist("attached text:=From","nativeclass:=ListBox").select "10341   LON   10:33 AM   FRA   11:17 AM   LH     $123.20"
window("regexpwndtitle:=Flight Reservation").dialog("text:=Flights Table").winbutton("text:=OK").Click
window("regexpwndtitle:=Flight Reservation").winedit("attached text:=Name:","nativeclass:=Edit","window id:=1014").set "sour"
window("regexpwndtitle:=Flight Reservation").winradiobutton("text:=First ").Click
window("regexpwndtitle:=Flight Reservation").winbutton("text:=&Insert Order").Click
systemutil.Run"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\HP Software\HP Unified Functional Testing\Sample Applications\Flight GUI"
dialog("text:=Login").winedit("attached text:=Agent Name:").Set "sourabh"
dialog("text:=Login").winedit("attached text:=Password:").Set "mercury"
dialog("text:=Login").winbutton("text:=cancel").Click
