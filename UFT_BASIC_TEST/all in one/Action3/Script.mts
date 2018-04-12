msgbox parameter("order_in")
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_1377854_;_script infofile_;_ZIP::ssf9.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set parameter("order_in") @@ hightlight id_;_1639382_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_1901650_;_script infofile_;_ZIP::ssf11.xml_;_
Window("Flight Reservation").WinEdit("Tickets:").Set "6" @@ hightlight id_;_853524_;_script infofile_;_ZIP::ssf16.xml_;_
Window("Flight Reservation").WinRadioButton("Business").Set @@ hightlight id_;_1901168_;_script infofile_;_ZIP::ssf13.xml_;_
Window("Flight Reservation").WinButton("Update Order").Click @@ hightlight id_;_853506_;_script infofile_;_ZIP::ssf14.xml_;_