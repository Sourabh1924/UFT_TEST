'Take username and password by user and by using negative testing.

Create function
Function agent 
  a=inputbox("enter agent name")
  dialog("text:=Login").winedit("attached text:=Agent Name:").Set a    
     If len(a)<4 Then
         msgbox "agent name have to be atleast 4 charater"
         Call agent
     End If       
         Call password()
End Function

Function password()
  b=inputbox("enter passwaord")
  dialog("text:=Login").winedit("attached text:=Password:").Set b    
     If b<>"mercury" Then
        msgbox"wrong password"
        Call password
    End If
     dialog("text:=Login").winbutton("text:=OK").Click
          Call main()
End Function

Function main
  window("regexpwndtitle:=Flight Reservation").activex("progid:=MSMask\.MaskEdBox\.1").Type "022816"
  window("regexpwndtitle:=Flight Reservation").wincombobox("attached text:=Fly From:").select "london"
  window("regexpwndtitle:=Flight Reservation").wincombobox("attached text:=Fly To:").select "frankfurt"
  window("regexpwndtitle:=Flight Reservation").winbutton("text:=FLIGHT").click
  window("regexpwndtitle:=Flight Reservation").dialog("text:=Flights Table").winlist("attached text:=From","nativeclass:=ListBox").select "10341   LON   10:33 AM   FRA   11:17 AM   LH     $123.20"
  window("regexpwndtitle:=Flight Reservation").dialog("text:=Flights Table").winbutton("text:=OK").Click
  window("regexpwndtitle:=Flight Reservation").winedit("attached text:=Name:","nativeclass:=Edit","window id:=1014").set "sour"
  window("regexpwndtitle:=Flight Reservation").winradiobutton("text:=First ").Click
  window("regexpwndtitle:=Flight Reservation").winbutton("text:=&Insert Order").Click
  window("regexpwndtitle:=Flight Reservation").Close
End Function
Call function
call agent name()
