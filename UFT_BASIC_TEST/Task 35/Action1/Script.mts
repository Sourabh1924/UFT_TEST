'Print only the flight number from flight table and store in datatable.

Dialog("Login").WinEdit("Agent Name:").Set "sourabh" 
Dialog("Login").WinEdit("Password:").SetSecure "56b49c221cab3d56b3588aabc1443ac9da517dee"
Dialog("Login").WinButton("OK").Click 
Window("Flight Reservation").ActiveX("MaskEdBox").Type "030616" 
Window("Flight Reservation").WinComboBox("Fly From:").Select "Frankfurt"
Window("Flight Reservation").WinComboBox("Fly To:").Select "Denver" 
Window("Flight Reservation").WinButton("FLIGHT").Click 
f=Window("Flight Reservation").Dialog("Flights Table").WinList("From").GetROProperty("all items")
msgbox f
k=chr(10)
a=split(f,k)
j=1
For i= 0 to ubound(a)
var1=a(i)
var2=instr(var1," ")
var3=mid(var1,1,var2-1)
msgbox var3
datatable.GetSheet("Global").SetCurrentRow(j)
datatable.Value("number","Global")=var3        
j=j+1 
Next 
datatable.ExportSheet "d:\name.xls","Global"
Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click
Window("Flight Reservation").WinEdit("Name:").Set "sou" 
Window("Flight Reservation").WinButton("Insert Order").Click

