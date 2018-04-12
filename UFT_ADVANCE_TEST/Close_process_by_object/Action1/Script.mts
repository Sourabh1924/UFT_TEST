'Object 1
Set exlo=createobject("excel.application")
exlo.Workbooks.Open("C:\Users\adewang\Desktop\Book1.xls")

'Object 2
Set exlo1=createobject("excel.application")
exlo1.Workbooks.Open("C:\Users\adewang\Desktop\Book1.xls")

'Object 3
Set exl1=createobject("excel.application")
exl1.Workbooks.Open("C:\Users\adewang\Desktop\Book1.xls")

'Function call
Call obj_close(exlo)

Function obj_close(obj)
	If isobject(obj) = true Then
		obj.ActiveWorkbook.Close
		Set obj = nothing
	End If
End Function


elxo1.ActiveWorkbook.Close
exl1.ActiveWorkbook.Close
set elxo1 = nothing
set exl1 = nothing