'For i=3 to 1 step -1
'par=string(i," ")
'print par
'For j = 1 To 4 Step 1
'Next
'var=string(j,"*")
'print var
'Next 
Set exlo=createobject("excel.application")
exlo.Visible=true
exlo.Workbooks.Open "d:\flight.xls"
Set sheet=exlo.ActiveWorkbook.Worksheets("Sheet1")
sheet.cells(row1+2,8).Interior.ColorIndex = 40
exlo.ActiveWorkbook.Close
Set exlo=nothing