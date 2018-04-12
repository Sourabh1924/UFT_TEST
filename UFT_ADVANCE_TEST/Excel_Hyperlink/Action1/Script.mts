call fpass("step1","aaaaaaaaaa")

Function fpass(Step_name,Step_details)

    File_name = now
    File_name =Replace(File_name,":","")
    desktop.CaptureBitmap Reporter.ReportPath &"\"& File_name &".bmp",True
    reporter.ReportEvent micPass ,Step_name ,Step_details    ,Reporter.ReportPath &"\"& File_name &".bmp"     
    environment.Value("save") = Reporter.ReportPath &"\"& File_name &".bmp"

End Function

Call Hyperlink()

Function Hyperlink()
	
	Set exlo=createobject("excel.application")
	exlo.Workbooks.Open("F:\Book2.xls")
	set sheet =exlo.ActiveWorkbook.Worksheets("sheet1")
	sheet.Cells(1,3) = "memo"
	sheet.Cells(1,3).Activate      'Activating cell where to add Hyperlink                                                                                                                                                             
	Set objLink = sheet.Hyperlinks.Add(exlo.Selection, environment.Value("save"))    'Adding hyperlink t 
	
	exlo.ActiveWorkbook.Save
	exlo.ActiveWorkbook.Close
	set sheet = nothing
	Set objLink = nothing
	set exlo=nothing

End Function


Set obj=CreateObject("Excel.Application")
obj.Visible=True
Set oWorkBooks=obj.WorkBooks.Open("C:\Users\Administrator\Desktop\Book1.xlsx")
Set oWorksheet=oWorkBooks.Worksheets(1)

With oWorksheet
.Hyperlinks.Add .Range("A1"),"http://www.advancedqtp.com"
End With
