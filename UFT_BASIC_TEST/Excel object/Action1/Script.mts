'create a excel file
Set exlo=createobject("excel.application")
exlo.Workbooks.Add
exlo.ActiveWorkbook.SaveAs"d:\di.xls"
exlo.Application.Quit
Set exlo=nothing

'create a excel file and enter some data
Set exlo=createobject("excel.application")
exlo.Workbooks.Open "d:\Book1.xls"
Set msheet=exlo.ActiveWorkbook.Worksheets("Sheet1")
msheet.cells(1,1).value="name"
msheet.cells(1,2).value="age"
msheet.cells(2,1).value="sourabh"
msheet.cells(2,2).value="25"
exlo.ActiveWorkbook.save
exlo.ActiveWorkbook.close
exlo.Application.Quit
Set exlo=nothing

'read the data from excel file
Set exlo=createobject("excel.application")
exlo.Workbooks.Open "d:\di.xls"
Set sheet=exlo.ActiveWorkbook.Worksheets("sheet1")
row=sheet.usedrange.rows.count
col=sheet.usedrange.columns.count
For i = 1 To row Step 1
	For j = 1 To col Step 1
		msgbox sheet.cells(i,j).value
	Next
Next
exlo.ActiveWorkbook.Close
exlo.Application.Quit

'Copy the date of one sheet to another sheet of another excel file.
Set exlo=nothing
Set exlo=createobject("excel.application")
exlo.Visible=true
set workbook1=exlo.Workbooks.Open("d:\Book1.xls")
workbook1.worksheets("Sheet1").usedrange.copy
set workbook2=exlo.Workbooks.Open("d:\Book2.xls")
workbook2.worksheets("Sheet1").range("A1").pastespecial
workbook1.save
workbook2.save
workbook1.close
workbook2.close
exlo.Quit
Set exlo=nothing

'print status of flight application in excel by use of array
Set exlo=createobject("excel.application")
exlo.Workbooks.Open("d:\sou.xls")
exlo.Visible=true
set sheet=exlo.ActiveWorkbook.Worksheets("sheet1")
attri=array("step","actual","expexted","time","date","status")
col=1
For i = 0 To ubound(attri) Step 1
	sheet.cells(1,col)=attri(i)
    col=col+1
next
row1=sheet.usedrange.rows.count 

Dialog("Login").WinEdit("Agent Name:").Set"sourabh"
Dialog("Login").WinEdit("Password:").Set"mercury"
Dialog("Login").WinButton("OK").Click
col=1
col1=1
If Window("Flight Reservation").Exist(2)=true then
     pas=array("Login","Login window is open","Login window have to open",date,time,"pass")
        For i = 0 To ubound(pas) Step 1
            sheet.cells(row1+1,col)=pas(i)
            col=col+1
        next
else
    fail=array("Login","Login window is open","Login window is not open",date,time,"pass")
        For i = 0 To ubound(fail) Step 1
            sheet.cells(row1+1,col1)=fail(i)
            col1=col1+1
        next
End If    

Window("Flight Reservation").ActiveX("MaskEdBox").Type "050616"                                        
Window("Flight Reservation").WinComboBox("Fly From:").Select "Frankfurt"  
Window("Flight Reservation").WinComboBox("Fly To:").Select "Denver" 
Window("Flight Reservation").WinButton("FLIGHT").Click 
Window("Flight Reservation").Dialog("Flights Table").WinList("From").Select "20122   FRA   08:00 AM   DEN   08:45 AM   SR     $163.00" 
Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click 
Window("Flight Reservation").WinEdit("Name:").Set "sou"
Window("Flight Reservation").WinButton("Insert Order").Click 

col=1
col1=1
If Window("Flight Reservation").WinButton("Insert Order").Exist=true Then
   pas=array("reservation window","flight reservation window is open","flight reservation window have to open",date,time,"pass")
   For i = o To ubound(pas) Step 1
   sheet.cells(row1+2,col)=pas(i)	
   col=col+1
   Next
else    
   fail=array("reservation window","flight reservation window is open","flight reservation window is not open",date,time,"pass")
   For i = o To ubound(fail) Step 1
   sheet.cells(row1+2,col1)=fail(i)	
   col1=col1+1
   Next
   End If  
exlo.ActiveWorkbook.Save
exlo.ActiveWorkbook.Close
Set sheet=nothing
