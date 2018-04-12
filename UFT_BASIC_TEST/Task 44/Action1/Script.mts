'Put any value in excel sheet first check it exist or not then if not then create the sheet and put any value.

Set fso=createobject("scripting.filesystemobject")
Set exlo=createobject("excel.application")
If fso.FileExists("d:\book1.xls")=false Then
    exlo.Workbooks.Add
    exlo.ActiveWorkbook.SaveAs("d:\book1.xls")
    set wsheet=exlo.ActiveWorkbook.Worksheets("sheet1")
    wsheet.cells(1,1).value="sourabh"
    exlo.ActiveWorkbook.Save
    exlo.ActiveWorkbook.Close
    exlo.Quit
else
exlo.Workbooks.Open("d:\book1.xls")
set wsheet=exlo.ActiveWorkbook.Worksheets("sheet1")
wsheet.cells(1,1).value="sourabh"
exlo.ActiveWorkbook.Save
exlo.ActiveWorkbook.Close
exlo.Quit
End If
Set exlo=nothing
