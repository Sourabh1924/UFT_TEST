'create order
Dialog("Login").WinEdit("Agent Name:").Set "sourabh" @@ hightlight id_;_8454742_;_script infofile_;_ZIP::ssf1.xml_;_
Dialog("Login").WinEdit("Password:").SetSecure "56cda10c4b26eb20dafedd9ea9f0806416a88463" @@ hightlight id_;_4981358_;_script infofile_;_ZIP::ssf2.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_3736204_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Flight Reservation").ActiveX("MaskEdBox").Type "060616" @@ hightlight id_;_2163646_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Flight Reservation").WinComboBox("Fly From:").Select "Denver" @@ hightlight id_;_4981292_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Flight Reservation").WinComboBox("Fly To:").Select "Frankfurt" @@ hightlight id_;_2555956_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_3801740_;_script infofile_;_ZIP::ssf7.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinList("From").Select "14205   DEN   12:57 PM   FRA   01:41 PM   AF     $121.20" @@ hightlight id_;_8782502_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click @@ hightlight id_;_2883632_;_script infofile_;_ZIP::ssf9.xml_;_
Window("Flight Reservation").WinEdit("Name:").Set "sam" @@ hightlight id_;_5046894_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Flight Reservation").WinButton("Insert Order").Click @@ hightlight id_;_5047164_;_script infofile_;_ZIP::ssf11.xml_;_
wait 7
Window("Flight Reservation").WinEdit("Order No:").Output CheckPoint("Order No:") @@ hightlight id_;_3277876_;_script infofile_;_ZIP::ssf12.xml_;_

