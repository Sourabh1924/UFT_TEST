'Login flight GUI with username and password from excel sheet. 

systemutil.Run"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\HP Software\HP Unified Functional Testing\Sample Applications\Flight GUI"
Set exlo=createobject("excel.application")
exlo.Workbooks.Open "d:\di.xls"
Set sheet=exlo.ActiveWorkbook.Worksheets("Sheet1")
username=Sheet.cells(1,1).value
password=Sheet.cells(1,2).value
dialog("text:=Login").winedit("attached text:=Agent Name:").Set username
dialog("text:=Login").winedit("attached text:=Password:").Set password
dialog("text:=Login").winbutton("text:=OK").Click
exlo.ActiveWorkbook.Close
exlo.Application.Quit
