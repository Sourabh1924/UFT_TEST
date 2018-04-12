''''''''''''''''''''''''''''''''''''''''''''''''''
datatable.Import "F:\Table.xls"
''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''
Path = datatable.Value("Path")
Properties = datatable.Value("Windows")
Application = datatable.Value("Application_name")
'''''''''''''''''''''''''''''''''''''''''''''''''''
'==========================================================================
'==========================================================================
'For Notepad
S_time = timer
Services.StartTransaction "launch"
systemutil.Run Path
   if Window("regexpwndtitle:= "& Properties).exist then
        Print "Notepad is luanch"  
   End if
Services.EndTransaction "launch"
E_time = timer
TT_time = E_time - S_time
Window("regexpwndtitle:= "& Properties).close

'''''''Function
call report(Application,S_time,E_time,TT_time,Date,"Open")
call fpass(Application)
'''''''''''''''   

'===========================================================================
'===========================================================================
'For Paint
datatable.SetCurrentRow(2)
S_time = timer
Services.StartTransaction "Mspaint_start"
systemutil.Run Path
   if Window("regexpwndtitle:= "& Properties).Exist then
        Print "Mspaint is luanch"  
   End if
Services.EndTransaction "Mspaint_start"
E_time = timer
TT_time = E_time - S_time
Window("regexpwndtitle:= "& Properties).close

'''''''Function
call report(Application,S_Time,E_Time,TT_Time,Date,"Open")
call fpass(Application)
'''''''''''''''      

'===========================================================================
'===========================================================================
'For Google
datatable.SetCurrentRow(3)
S_time = timer
Services.StartTransaction "Google_start"
systemutil.Run "iexplore", Path 
   If Browser("title:=Google").Page("title:=Google").WebEdit("html tag:=INPUT").Exist Then
	    Print "Google is luanch"
   End If
Services.EndTransaction "Google_start"
E_time = timer
TT_time = E_time - S_time
Browser("title:=Google").close
'''''''Function
call report(Application,S_Time,E_Time,TT_Time,Date,"Open")
call fpass(Application)
'''''''''''''''      

'===========================================================================
'===========================================================================
'For Excel
datatable.SetCurrentRow(4)
S_time = timer
Services.StartTransaction "Excel_start"
systemutil.Run Path
   if Window("regexpwndtitle:= "& Properties).Exist then
        Print "Excel is luanch"  
   End if
Services.EndTransaction "Excel_start"
E_time = timer
TT_time = E_time - S_time
Window("regexpwndtitle:= "& Properties).close

'''''''Function
call report(Application,S_Time,E_Time,TT_Time,Date,"Open")
call fpass(Application)
'''''''''''''''            

'===========================================================================
'===========================================================================
'For Word
datatable.SetCurrentRow(5)
S_time = timer
Services.StartTransaction "Word_start"
systemutil.Run Path
   if Window("regexpwndtitle:= "& Properties).Exist then
        Print "Word is luanch"  
   End if
Services.EndTransaction "Word_start"
E_time = timer
TT_time = E_time - S_time
Window("regexpwndtitle:= "& Properties).close

'''''''Function
call report(Application,S_Time,E_Time,TT_Time,Date,"Open")
call fpass(Application)
'''''''''''''''      

'===========================================================================
'===========================================================================
'For FlightGUI
datatable.SetCurrentRow(6)
S_time = timer
Services.StartTransaction "Flight_start"
systemutil.Run Path
   if Window("regexpwndtitle:= "& Properties).Exist then
        Print "Flight application is luanch"
   End if
Services.EndTransaction "Flight_start"
E_time = timer
TT_time = E_time - S_time
Window("regexpwndtitle:= "& Properties).close

'''''''Function
call report(Application,S_Time,E_Time,TT_Time,Date,"Open")
call fpass(Application)
Call calculate()
'''''''''''''''      
'===========================================================================
'=========================================================================== 


