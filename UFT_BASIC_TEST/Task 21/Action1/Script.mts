'Open flight GUI and book a flight by Descriptive Programming. 

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
window("regexpwndtitle:=Flight Reservation").winbutton("text:=&Insert Order").Click
