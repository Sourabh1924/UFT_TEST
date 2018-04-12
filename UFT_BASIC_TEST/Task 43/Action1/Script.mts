'Copy the date of one sheet to another sheet of another excel file.

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
