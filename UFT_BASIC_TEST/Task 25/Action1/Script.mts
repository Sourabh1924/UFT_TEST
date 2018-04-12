'Count number of winbutton and use loop to click on each button  in login window in flight GUI.

Set ocollection = Description.Create
ocollection("micclass").value = "WinButton"
Set ocollection=Dialog("text:=Login").ChildObjects(ocollection)
a=ocollection.count
print a
For i = 1 to a   Step 1
     If i=1 Then
             dialog("text:=Login").winbutton("text:=Help").Click
             dialog("text:=Flight Reservations").winbutton("text:=OK").Click    
ElseIf i=2 Then
dialog("text:=Login").winbutton("text:=cancel").Click
ElseIf i=3 Then
systemutil.Run"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\HP Software\HP Unified Functional Testing\Sample Applications\Flight GUI"
dialog("text:=Login").winedit("attached text:=Agent Name:").Set "sourabh"
dialog("text:=Login").winedit("attached text:=Password:").Set "mercury"
dialog("text:=Login").winbutton("text:=OK").Click
window("regexpwndtitle:=Flight Reservation").activex("progid:=MSMask\.MaskEdBox\.1").Type "022816"
window("regexpwndtitle:=Flight Reservation").wincombobox("attached text:=Fly From:").select "london"
window("regexpwndtitle:=Flight Reservation").wincombobox("attached text:=Fly To:").select "frankfurt"
window("regexpwndtitle:=Flight Reservation").winbutton("text:=FLIGHT").click
window("regexpwndtitle:=Flight Reservation").dialog("text:=Flights Table").winlist("attached text:=From","nativeclass:=ListBox").select "10341   LON   10:33 AM   FRA   11:17 AM   LH     $123.20"
window("regexpwndtitle:=Flight Reservation").dialog("text:=Flights Table").winbutton("text:=OK").Click
window("regexpwndtitle:=Flight Reservation").winedit("attached text:=Name:","nativeclass:=Edit","window id:=1014").set "sour"
window("regexpwndtitle:=Flight Reservation").winradiobutton("text:=First ").Click
window("regexpwndtitle:=Flight Reservation").winbutton("text:=&Insert Order").Click
End If
Next
