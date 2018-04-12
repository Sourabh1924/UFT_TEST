'''''''''''''''''''''''''''''''''''''''''''''''''''''''Put 0 in blank space''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Window("Window").WinToolbar("User Promoted Notification").Check CheckPoint("User Promoted Notification Area") @@ hightlight id_;_656510_;_script infofile_;_ZIP::ssf10.xml_;_


Set Exl = createobject("excel.application")
Exl.Workbooks.Open "C:\Users\Admin\Desktop\Excel_automation\Book1.xlsx" 
set mysheet = Exl.ActiveWorkbook.Worksheets("Sheet1")
row = mysheet.usedrange.rows.count
colu=mysheet.usedrange.Columns.count
For i = 1 To row Step 1
	For j = 1 To colu Step 1
		pas = mysheet.cells(i,j)
		   If pas = 0 Then
		   	mysheet.cells(i,j) = 0
		   End If
	Next
Next
Set Exl = nothing
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Copy from 1 sheet of excel to another sheet
'Copy data from 1 sheet
Set Exl = createobject("excel.application")
Exl.Workbooks.Open "C:\Users\Admin\Desktop\Excel_automation\Book1.xlsx" 
set mysheet = Exl.ActiveWorkbook.Worksheets("Sheet1")
row = mysheet.usedrange.rows.count
colu=mysheet.usedrange.Columns.count
arr = array(1)
ReDim preserve arr(cint(row)*cint(colu))
a=0
For i = 1 To row Step 1
	For j = 1 To colu Step 1
		arr(a) = mysheet.cells(i,j)
		a = a +1		
	Next
Next
a=0
'Paste data in 2 sheet
set mysheet = Exl.ActiveWorkbook.Worksheets("Sheet2")
For i = 1 To row Step 1
	For j = 1 To colu Step 1
		mysheet.cells(i,j) = arr(a)
		a = a +1		
	Next
Next
Exl.ActiveWorkbook.Save
Exl.ActiveWorkbook.Close
Set Exl = nothing
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''






Window("OneDrive").Click 110,151 @@ hightlight id_;_2031866_;_script infofile_;_ZIP::ssf11.xml_;_
Window("OneDrive").Click 155,152 @@ hightlight id_;_2031866_;_script infofile_;_ZIP::ssf12.xml_;_
Window("OneDrive").Click 144,70 @@ hightlight id_;_2031866_;_script infofile_;_ZIP::ssf13.xml_;_
Window("OneDrive").Click 152,202 @@ hightlight id_;_2031866_;_script infofile_;_ZIP::ssf14.xml_;_
Window("OneDrive").Click 144,157 @@ hightlight id_;_2031866_;_script infofile_;_ZIP::ssf15.xml_;_
Window("OneDrive").Click 244,78 @@ hightlight id_;_2031866_;_script infofile_;_ZIP::ssf16.xml_;_
Window("OneDrive").Click 192,347 @@ hightlight id_;_2031866_;_script infofile_;_ZIP::ssf17.xml_;_
