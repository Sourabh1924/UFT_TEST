'Print last record in flight table .

Dialog("Login").WinEdit("Agent Name:").Set "sour" 
Dialog("Login").WinEdit("Password:").SetSecure "56b4818da72202e9a9cfd9fde88ba6cce3bd703c"
Dialog("Login").WinButton("OK").Click 
Window("Flight Reservation").ActiveX("MaskEdBox").Type"060616" 
Window("Flight Reservation").WinComboBox("Fly From:").Select "Frankfurt" 
Window("Flight Reservation").WinComboBox("Fly To:").Select "London" 
Window("Flight Reservation").WinButton("FLIGHT").Click 
f=Window("Flight Reservation").Dialog("Flights Table").WinList("From").GetROProperty("items count")
msgbox f
For i= 0 to f-1
  sou=Window("Flight Reservation").Dialog("Flights Table").WinList("From").GetItem(i)
next
msgbox sou
