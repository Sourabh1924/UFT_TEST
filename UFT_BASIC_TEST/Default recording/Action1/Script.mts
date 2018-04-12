
Dialog("Login").WinEdit("Agent Name:").Set "sourabh" @@ hightlight id_;_983724_;_script infofile_;_ZIP::ssf20.xml_;_
Dialog("Login").WinEdit("Password:").SetSecure "56b77bd9915ecdfa7146600f9327148773de09ab" @@ hightlight id_;_394322_;_script infofile_;_ZIP::ssf21.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_721758_;_script infofile_;_ZIP::ssf22.xml_;_
Window("Flight Reservation").ActiveX("MaskEdBox").Type "030516" @@ hightlight id_;_394326_;_script infofile_;_ZIP::ssf23.xml_;_
Window("Flight Reservation").WinComboBox("Fly From:").Select "Denver" @@ hightlight id_;_655408_;_script infofile_;_ZIP::ssf24.xml_;_
Window("Flight Reservation").WinComboBox("Fly To:").Select "London" @@ hightlight id_;_1049106_;_script infofile_;_ZIP::ssf25.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_787294_;_script infofile_;_ZIP::ssf26.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinList("From").Activate "20259   DEN   07:12 AM   LON   02:23 PM   AA     $112.20" @@ hightlight id_;_525164_;_script infofile_;_ZIP::ssf27.xml_;_
Window("Flight Reservation").WinEdit("Name:").Set "sou" @@ hightlight id_;_459858_;_script infofile_;_ZIP::ssf28.xml_;_
Window("Flight Reservation").WinButton("Insert Order").Click @@ hightlight id_;_852982_;_script infofile_;_ZIP::ssf29.xml_;_
Window("Flight Reservation").Close