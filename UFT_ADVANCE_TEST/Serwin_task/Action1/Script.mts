'''''''''''''''''''''''''''''''''''For header part''''''''''''''''''''''''''''''''''''''''

Call Header("F:\serwin.xlsx","Sheet1","Ledger","Sourabh")

Function Header(Byval Filepath,Byval Sheetname,Byval Colname,Byval Colvalue)
   Set exlo = createobject("excel.application")
	col = 2
	row1 = 1
	exlo.Workbooks.Open(Filepath)
	set sheet =exlo.ActiveWorkbook.Worksheets(Sheetname)
	rowcnt = sheet.usedrange.rows.count
		For i = 1 To rowcnt Step 1
			val = sheet.cells(i,col)
	  			If val = Colname Then
	  	   			sheet.cells(i,col+4).value = Colvalue
	  			End If
		Next
exlo.ActiveWorkbook.Save
exlo.ActiveWorkbook.Close
set exlo=nothing	
End Function


Call Header1("F:\serwin.xlsx","Sheet1","Sourabh",8,6)

Function Header1(Filepath,Sheetname,Cellvalue,Rowvalue,Colvalue)
   
    Set exlo = Createobject("excel.application")
	exlo.Workbooks.Open(Filepath)
	Set sheet =exlo.ActiveWorkbook.Worksheets(Sheetname)	
	sheet.cells(cint(Rowvalue),cint(Colvalue)).value = Cellvalue
	exlo.ActiveWorkbook.Save
	exlo.ActiveWorkbook.Close
	Set exlo=nothing

End Function


'''''''''''''''''''''''''''''''''''''For body part'''''''''''''''''''''''''''''''''''''''''

Function Body(Byval Filepath,Byval Sheetname,Byval Colname,Byval Colvalue)

    Set exlo = createobject("excel.application")
	col = 2
	row1 = 1
	exlo.Workbooks.Open(Filepath)
	set sheet =exlo.ActiveWorkbook.Worksheets(Sheetname)
	pas = array("Category","Source","Currency","Budget","Period")
		For i = 1 To ubound(pas) Step 1
			val = sheet.cells(i,col)
	  			If val = Colname Then
	  	   			sheet.cells(i,col+4).value = Colvalue
	  			End If
		Next
	exlo.ActiveWorkbook.Save
	exlo.ActiveWorkbook.Close
	set exlo=nothing	
	
End Function
