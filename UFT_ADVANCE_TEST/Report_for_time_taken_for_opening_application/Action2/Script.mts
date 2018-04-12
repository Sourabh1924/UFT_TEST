'''''''''''''''''''''''''''''''''''''''''''''
datatable.Import "F:\Table.xls"
'''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''
Dim Path         'Save the Path
Dim Properties   'Save the properties
Dim Application  'Save the application name
'''''''''''''''''''''''''''''''''''''''''''''

Path = datatable.Value("Path","Action2")
Browser = datatable.Value("Browser","Action2")
Application = datatable.Value("Application_name","Action2")

'==========================================================================
'==========================================================================
row_cnt = datatable.GetSheet("Action2").GetRowCount
For i = 1 To row_cnt Step 1
datatable.SetCurrentRow(i)	
Application_name = Application
If Ucase((mid(Path,1,3))) = Ucase("www") Then
   
   'For web application
   URL = Browser 
   S_time = timer
   Services.StartTransaction Application_name&"_start"
   systemutil.Run "chrome", datatable.Value("Path","Action2") 
   
      If Browser("title:="&URL).Page("title:="&URL).Exist Then
           call notepad_open(Application_name) 
      End If
      
   Services.EndTransaction  Application_name&"_start"
   E_time = timer
   TT_time = E_time - S_time
   Browser("title:="&URL).Close
   
   Call notepad_close(Application_name)
   
            '''''''Function
            call report(Application_name,S_Time,E_Time,TT_Time,Date,"Open")
            call fpass(Application_name)
            '''''''''''''''      	
            
else

    'For window application
    datatable.SetCurrentRow(i)
    S_time = timer
    Services.StartTransaction "launch"
    systemutil.Run Path
    
       if Window("regexpwndtitle:= "& Browser).exist then
            call notepad_open(Application_name) 
       End if
       
    Services.EndTransaction "launch"
    E_time = timer
    TT_time = E_time - S_time
    Window("regexpwndtitle:= "& Browser).close
    
    Call notepad_close(Application_name)
    
           '''''''Function
           call report(Application,S_time,E_time,TT_time,Date,"Open")
           call fpass(Application)
           '''''''''''''''   

End If

next
call calculate()
'==========================================================================
'==========================================================================
