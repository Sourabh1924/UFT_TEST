'Login flight GUI with different username and password from excel sheet. 

Set exlo=createobject("excel.application")
exlo.Workbooks.Open "d:\di.xls"
Set sheet=exlo.ActiveWorkbook.Worksheets("Sheet1")
row1=sheet.usedrange.rows.count
For i = 1 To row1 Step 1 
systemutil.Run"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\HP Software\HP Unified Functional Testing\Sample Applications\Flight GUI"
        username=sheet.cells(i,1).value
        password=sheet.cells(i,2).value
        dialog("text:=Login").winedit("attached text:=Agent Name:").Set username
        dialog("text:=Login").winedit("attached text:=Password:").Set password
        dialog("text:=Login").winbutton("text:=OK").Click
        window("regexpwndtitle:=Flight Reservation").Close
Next
exlo.ActiveWorkbook.Close
exlo.Application.Quit