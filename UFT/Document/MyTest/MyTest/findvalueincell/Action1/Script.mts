filepath="C:\Documents and Settings\yogesh\Desktop\MyTest\test.xls"
matchdata="Passed"

'1) Create a Excel application object'
Set appExcel = CreateObject("Excel.Application")
appExcel.visible=false

'2) Open Excel file'
 Set objWorkBook = appExcel.Workbooks.Open (filepath)'opens the sheet
appExcel.DisplayAlerts = False
 '3) Select sheet

 Set objSheet = appExcel.Sheets("Sheet1")' To select particular sheet
With objSheet.UsedRange ' select the used range in particular sheet
'4) Find the matching value'
            Set finddata = .Find (matchdata)' data to find 
        For each excelcell in objSheet.UsedRange' Loop through the used range
                     If finddata=matchdata then' compare with the expected data
                     '5) change cell color to Gray'
                                excelcell.Interior.ColorIndex = 40' make the gary color if it finds the data
                    End If
                    Set excelcell = .FindNext(excelcell)' next search
              
        next
End With

'6) Save the sheet
'
objWorkBook.save

'7) close the Excel file'
objWorkBook.close
set appExcel=nothing



