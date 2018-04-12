WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").Set "john" @@ hightlight id_;_1955101456_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfEdit("password").SetSecure "5846cbba0bbb598b848d" @@ hightlight id_;_1955102176_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("OK").Click @@ hightlight id_;_1959005016_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").Select "Los Angeles" @@ hightlight id_;_1959005592_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("toCity").Select "Portland" @@ hightlight id_;_1959006600_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1955993568_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1950877456_;_script infofile_;_ZIP::ssf10.xml_;_

Cnt_col = WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").ColumnCount
Cnt_row = WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").RowCount
Flight_details = WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").GetCellData (Cnt_row-1,Cnt_col-1)
print Flight_details
wait 5

