s_time=timer 'start ex_time
window("regexpwndtitle:=Flight Reservation").activex("progid:=MSMask\.MaskEdBox\.1").Type "030516"
window("regexpwndtitle:=Flight Reservation").wincombobox("attached text:=Fly From:").select "london"
window("regexpwndtitle:=Flight Reservation").wincombobox("attached text:=Fly To:").select "frankfurt"
window("regexpwndtitle:=Flight Reservation").winbutton("text:=FLIGHT").click
f=Window("regexpwndtitle:=Flight Reservation").Dialog("text:=Flights Table").WinList("attached text:=From","nativeclass:=ListBox").GetROProperty("items count")
  For i= 0 to f-1
     sou=Window("regexpwndtitle:=Flight Reservation").Dialog("text:=Flights Table").WinList("attached text:=From","nativeclass:=ListBox").GetItem(i)
  next
     msgbox sou
window("regexpwndtitle:=Flight Reservation").dialog("text:=Flights Table").winbutton("text:=OK").Click
window("regexpwndtitle:=Flight Reservation").winedit("attached text:=Name:","nativeclass:=Edit","window id:=1014").set "sou"
window("regexpwndtitle:=Flight Reservation").winradiobutton("text:=First ").Click
window("regexpwndtitle:=Flight Reservation").winbutton("text:=&Insert Order").Click
e_time=timer 'end ex_time
ex_time=e_time-s_time 'total ex_time
wait 8
Window("Flight Reservation").WinEdit("Order No:").Output CheckPoint("Order No:") @@ hightlight id_;_591194_;_script infofile_;_ZIP::ssf1.xml_;_

  If Window("regexpwndtitle:=Flight Reservation").WinButton("text:=&Insert Order").Exist=true Then 
     Call exlreport("Flight Reservation","Flight Reservation window is open","Flight Reservation window is open",date,time,"Pass",ex_time) 'function call
  else
     Call exlreport("Flight Reservation","Flight Reservation window is open","Flight Reservation window is not open",date,time,"Fail",ex_time) 'function call
  end if
  