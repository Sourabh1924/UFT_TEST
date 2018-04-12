Window("Flight Reservation").ActiveX("MaskEdBox").Type parameter("date") @@ hightlight id_;_1049384_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Flight Reservation").WinComboBox("Fly From:").Select "Frankfurt" @@ hightlight id_;_590714_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Flight Reservation").WinComboBox("Fly To:").Select "Denver" @@ hightlight id_;_1180262_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_394084_;_script infofile_;_ZIP::ssf7.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinList("From").GetItem(2) @@ hightlight id_;_66432_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click @@ hightlight id_;_131964_;_script infofile_;_ZIP::ssf9.xml_;_
Window("Flight Reservation").WinEdit("Name:").Set parameter("name") @@ hightlight id_;_852466_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Flight Reservation").WinEdit("Tickets:").Set parameter("passenger")
Window("Flight Reservation").WinEdit("Total:").Output CheckPoint("Total:") @@ hightlight id_;_4391744_;_script infofile_;_ZIP::ssf12.xml_;_
