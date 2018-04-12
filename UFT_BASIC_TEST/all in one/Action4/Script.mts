Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_1770514_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set parameter("order_in1") @@ hightlight id_;_2425810_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_3998560_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Flight Reservation").WinButton("Delete Order").Click @@ hightlight id_;_2098550_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Flight Reservation").Dialog("Flight Reservations").WinButton("Yes").Click @@ hightlight id_;_722114_;_script infofile_;_ZIP::ssf7.xml_;_
Window("Flight Reservation").Close
 @@ hightlight id_;_1901410_;_script infofile_;_ZIP::ssf8.xml_;_