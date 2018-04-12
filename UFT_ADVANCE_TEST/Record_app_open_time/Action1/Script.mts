''''''''''''''''''''''''''''''''''''''''''''''''''''''
'************************************************************************************
''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Application luanch by creating object
row_cnt = datatable.GetRowCount
For i = 1 To row_cnt Step 1
    datatable.SetCurrentRow(i)
	Setup =datatable.Value("Setup","Global") 
    S_time = timer
    services.StartTransaction "Start"

        Set oShell = CreateObject("WScript.Shell")
        oShell.run Setup
        Set oShell = nothing
  
    services.EndTransaction "Start",Pass
    E_time = timer
    T_time = E_time - S_time
    ftimeconsume S_time,E_time,T_time
'Application close
    systemutil.CloseDescendentProcesses
    
Next
'''''''''''''''''''''''''''''''''''''''''''''''''''''
'************************************************************************************
''''''''''''''''''''''''''''''''''''''''''''''''''''''

Function ftimeconsume(string1,string2,string3)
Set exlo=createobject("excel.application")
exlo.Workbooks.Open("E:\sou1.xls")
set sheet=exlo.ActiveWorkbook.Worksheets("sheet2")
exlo.Visible=true
col=1
J=1
A=array("Start_time","End_time","Total_time")
     For i = o To ubound(a) Step 1
         sheet.cells(1,J)=A(i)
         J=J+1
     Next
row1=sheet.usedrange.rows.count 
pas=array(string1,string2,string3)
        For i = 0 To ubound(pas) Step 1
            sheet.cells(row1+1,col)=pas(i)
            col=col+1
        next

exlo.ActiveWorkbook.Save
exlo.ActiveWorkbook.Close
set exlo=nothing
End Function
