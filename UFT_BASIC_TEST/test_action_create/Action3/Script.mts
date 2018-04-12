'delete action
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_2491392_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set parameter("in1_order_no") @@ hightlight id_;_4325950_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_4129782_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Flight Reservation").WinButton("Delete Order").Click @@ hightlight id_;_2622280_;_script infofile_;_ZIP::ssf7.xml_;_
Window("Flight Reservation").Dialog("Flight Reservations").WinButton("Yes").Click @@ hightlight id_;_3343362_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Flight Reservation").Close