'''''''''''''''''''''Login''''''''''''''''''''
set Obj = WpfWindow("HP MyFlight Sample Application")
Obj.WpfEdit("agentName").fnset "john" @@ hightlight id_;_1889609736_;_script infofile_;_ZIP::ssf1.xml_;_
Obj.WpfEdit("password").fnset "hp" @@ hightlight id_;_1889611800_;_script infofile_;_ZIP::ssf2.xml_;_
Obj.WpfButton("OK").fnclick @@ hightlight id_;_1889612472_;_script infofile_;_ZIP::ssf3.xml_;_

''''''''''''''''''''Flight_details'''''''''''''''''''
Obj.WpfComboBox("fromCity").fnselect "Frankfurt" @@ hightlight id_;_1925532912_;_script infofile_;_ZIP::ssf5.xml_;_
Obj.WpfComboBox("toCity").fnselect "London" @@ hightlight id_;_1925533968_;_script infofile_;_ZIP::ssf7.xml_;_
Obj.WpfImage("WpfImage").fnclick
Obj.WpfCalendar("datePicker").SetDate "19-Jan-2017" @@ hightlight id_;_1925534496_;_script infofile_;_ZIP::ssf10.xml_;_
Obj.WpfComboBox("Class").fnselect "Business" @@ hightlight id_;_1925535840_;_script infofile_;_ZIP::ssf12.xml_;_
Obj.WpfComboBox("numOfTickets").fnselect "2" @@ hightlight id_;_1925536368_;_script infofile_;_ZIP::ssf14.xml_;_
Obj.WpfButton("FIND FLIGHTS").fnclick @@ hightlight id_;_1925536800_;_script infofile_;_ZIP::ssf15.xml_;_

''''''''''''''''''''Flight_select'''''''''''''''''''
Obj.WpfTable("flightsDataGrid").SelectCell 3,0 @@ hightlight id_;_1925537376_;_script infofile_;_ZIP::ssf16.xml_;_
Obj.WpfButton("SELECT FLIGHT").fnclick @@ hightlight id_;_1925537904_;_script infofile_;_ZIP::ssf17.xml_;_

''''''''''''''''''''Order_work''''''''''''''''''''''
Obj.WpfEdit("passengerName").fnset "saaa" @@ hightlight id_;_1925538144_;_script infofile_;_ZIP::ssf18.xml_;_
Obj.WpfButton("ORDER").fnclick @@ hightlight id_;_1925538816_;_script infofile_;_ZIP::ssf19.xml_;_
Obj.fnclose
