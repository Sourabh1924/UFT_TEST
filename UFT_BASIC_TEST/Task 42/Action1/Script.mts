'Delete the data.

Set exlo=createobject("excel.application")
exlo.Visible=True 
set sheet=exlo.Workbooks.Open("d:\Book1.xls")
set wsheet=exlo.Worksheets.Item("Sheet1")
row1=Wsheet.usedrange.rows.count
col1=Wsheet.usedrange.columns.count
For i = 1 To row1 Step 1
For j = 1 To col1 Step 1
    Wsheet.cells(i,j).value = ""
    Next
    next
sheet.Save
sheet.Close
exlo.Quit
Set exlo=nothing
