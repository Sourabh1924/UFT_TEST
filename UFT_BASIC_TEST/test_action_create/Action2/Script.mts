'update order
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_3998626_;_script infofile_;_ZIP::ssf23.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set parameter("in_order_no") @@ hightlight id_;_2556862_;_script infofile_;_ZIP::ssf24.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_4325434_;_script infofile_;_ZIP::ssf25.xml_;_
Window("Flight Reservation").WinEdit("Tickets:").Set "3" @@ hightlight id_;_2098202_;_script infofile_;_ZIP::ssf26.xml_;_
Window("Flight Reservation").WinButton("Update Order").Click @@ hightlight id_;_5899156_;_script infofile_;_ZIP::ssf29.xml_;_
