systemutil.Run"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\HP Software\HP Unified Functional Testing\Sample Applications\Flight GUI"
Dialog("Login").WinButton("OK").Click
Dialog("Login").WinEdit("Agent Name:").Set "dsavfve" @@ hightlight id_;_328406_;_script infofile_;_ZIP::ssf1.xml_;_
Dialog("Login").WinButton("OK").Click
Dialog("Login").WinEdit("Password:").SetSecure "56cc37bc430c61a17ed93ad24445c7342e9394ed" @@ hightlight id_;_394042_;_script infofile_;_ZIP::ssf2.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_2687836_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Flight Reservation").ActiveX("MaskEdBox").Type "060616" @@ hightlight id_;_7996712_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Flight Reservation").WinComboBox("Fly From:").Select "London" @@ hightlight id_;_3212340_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Flight Reservation").WinComboBox("Fly To:").Select "Denver" @@ hightlight id_;_2032534_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_2753372_;_script infofile_;_ZIP::ssf7.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinList("From").Select "20292   LON   12:12 AM   DEN   07:23 PM   AA     $112.20" @@ hightlight id_;_2818998_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click @@ hightlight id_;_2163682_;_script infofile_;_ZIP::ssf9.xml_;_
Window("Flight Reservation").WinEdit("Name:").Set "sss" @@ hightlight id_;_459578_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Flight Reservation").WinButton("Insert Order").Click @@ hightlight id_;_2163546_;_script infofile_;_ZIP::ssf11.xml_;_

