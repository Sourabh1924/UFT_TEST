''Enter status report of an application into excel without function.
'
's_time=timer
'Dialog("Login").WinEdit("Agent Name:").Set "sourabh"
'Dialog("Login").WinEdit("Password:").Set "mercury"
'Dialog("Login").WinButton("OK").Click
'e_time=timer
't_taken=e_time-s_time
'
'Set exlo=createobject("excel.application")
'exlo.Workbooks.Open("e:\sou.xls")
'exlo.Visible=true
'wait 2
'set sheet=exlo.ActiveWorkbook.Worksheets("sheet1")
'sheet.cells(1,1)="Step"
'sheet.cells(1,2)="Actual"
'sheet.cells(1,3)="Expexted"
'sheet.cells(1,4)="Time"
'sheet.cells(1,5)="Date"
'sheet.cells(1,6)="Status"
'sheet.cells(1,7)="e_time"
'row1=sheet.usedrange.rows.count 
'
'If Window("Flight Reservation").Exist=true then
'    sheet.cells(row1+1,1)="Login"
'    sheet.cells(row1+1,2)="Login window is open"
'    sheet.cells(row1+1,3)="Login window have to open"
'    sheet.cells(row1+1,4).value=date
'    sheet.cells(row1+1,5).value=time
'    sheet.cells(row1+1,6)="pass"
'    sheet.cells(row1+1,7)=t_taken
'else
'    sheet.cells(row1+1,1)="Login"
'    sheet.cells(row1+1,2)="Login window is n open"
'    sheet.cells(row1+1,3)="Login window have to open"
'    sheet.cells(row1+1,4).value=date
'    sheet.cells(row1+1,5).value=time
'    sheet.cells(row1+1,6)="fail"
'    sheet.cells(row1+1,7)=t_taken
'End If    
'
's_time=timer
'Window("Flight Reservation").ActiveX("MaskEdBox").Type "050616"                                        
'Window("Flight Reservation").WinComboBox("Fly From:").Select "Frankfurt"  
'Window("Flight Reservation").WinComboBox("Fly To:").Select "Denver" 
'Window("Flight Reservation").WinButton("FLIGHT").Click 
'Window("Flight Reservation").Dialog("Flights Table").WinList("From").Select "20122   FRA   08:00 AM   DEN   08:45 AM   SR     $163.00" 
'Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click 
'Window("Flight Reservation").WinEdit("Name:").Set "sou"
'Window("Flight Reservation").WinButton("Insert Order").Click 
'e_time=timer
't_taken=e_time-s_time
'
'If Window("Flight Reservation").WinButton("Insert Order").Exist=true Then
'    sheet.cells(row1+2,1)="reservation window"
'   sheet.cells(row1+2,2)="flight reservation window is open"
'   sheet.cells(row1+2,3)="flight reservation window have to open"
'   sheet.cells(row1+2,4).value=date
'   sheet.cells(row1+2,5).value=time
'   sheet.cells(row1+2,6)="pass"
'   sheet.cells(row1+2,7)=t_taken
'else    
'   sheet.cells(row1+2,1)="reservation window"
'   sheet.cells(row1+2,2)="flight reservation window is not open"
'   sheet.cells(row1+2,3)="flight reservation window have to open"
'   sheet.cells(row1+2,4).value=date
'   sheet.cells(row1+2,5).value=time
'   sheet.cells(row1+2,6)="fail"
'   sheet.cells(row1+2,7)=t_taken
'End If  
'exlo.ActiveWorkbook.Save
'exlo.ActiveWorkbook.Close
'Set sheet=nothing
'

''Enter status report of an application into excel withfunction.
'
''Action part

s_time=timer
dialog("Login").winedit("Agent Name:").Set datatable.Value("username","Action1")
dialog("Login").winedit("Password:").Set datatable.Value("password","Action1")
dialog("Login").winbutton("OK").Click
e_time=timer
ex_time=e_time-s_time
If Window("Flight Reservation").Exist(5)=true then
     Call excelreport("Login","Login window is open","Login window have to open",date,time,"Pass",ex_time)
else
     Call excelreport("Login","Login window is open","Login window is not open",date,time,"Fail",ex_time)
End If    

'If Window("Flight Reservation").Exist(2)=true Then
'      s_time1=timer
'      Window("Flight Reservation").ActiveX("MaskEdBox").Type "050616"                                        
'      Window("Flight Reservation").WinComboBox("Fly From:").Select "Frankfurt"  
'      Window("Flight Reservation").WinComboBox("Fly To:").Select "Denver" 
'      Window("Flight Reservation").WinButton("FLIGHT").Click 
'      Window("Flight Reservation").Dialog("Flights Table").WinList("From").Select "20122   FRA   08:00 AM   DEN   08:45 AM   SR     $163.00" 
'      Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click 
'      Window("Flight Reservation").WinEdit("Name:").Set "sou"
'      Window("Flight Reservation").WinButton("Insert Order").Click 
'      e_time1=timer
'      ex_time1=e_time1-s_time1
'      Call excelreport("Reservation window","Flight reservation window is open","Flight reservation window have to open",date,time,"Pass",ex_time1)
'else
'      Call excelreport("Reservation window","Flight reservation window is open","Flight reservation window is not open",date,time,"Fail",ex_time1)
'End If  
' 

''Enter status report of an application into excel by use of array.
'
'
'Set exlo=createobject("excel.application")
'exlo.Workbooks.Open("d:\sou.xls")
'exlo.Visible=true
'set sheet=exlo.ActiveWorkbook.Worksheets("sheet1")
'attri=array("step","actual","expexted","time","date","status")
'col=1
'For i = 0 To ubound(attri) Step 1
'    sheet.cells(row+1,col)=attri(i)
'    col=col+1
'next
'row1=sheet.usedrange.rows.count 
'    
'dialog("Login").winedit("Agent Name:").Set datatable.Value("username","Action1")
'dialog("Login").winedit("Password:").Set datatable.Value("password","Action1")
'dialog("Login").winbutton("OK").Click
'col=1
'col1=1
'If Window("Flight Reservation").Exist(2)=true then
'     pas=array("Login","Login window is open","Login window have to open",date,time,"pass")
'        For i = 0 To ubound(pas) Step 1
'            sheet.cells(row1+1,col)=pas(i)
'            col=col+1
'        next
'else
'    fal=array("Login","Login window is open","Login window is not open",date,time,"fail")
'        For i = 0 To ubound(fal) Step 1
'            sheet.cells(row1+1,col1)=fal(i)
'            col1=col1+1
'        next
'End If    
'
'
'If Window("Flight Reservation").Exist(2)=true Then
'    
'    Window("Flight Reservation").ActiveX("MaskEdBox").Type "050616"                                        
'    Window("Flight Reservation").WinComboBox("Fly From:").Select "Frankfurt"  
'    Window("Flight Reservation").WinComboBox("Fly To:").Select "Denver" 
'    Window("Flight Reservation").WinButton("FLIGHT").Click 
'    Window("Flight Reservation").Dialog("Flights Table").WinList("From").Select "20122   FRA   08:00 AM   DEN   08:45 AM   SR     $163.00" 
'    Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click 
'    Window("Flight Reservation").WinEdit("Name:").Set "sou"
'    Window("Flight Reservation").WinButton("Insert Order").Click 
'    col=1
'    col1=1
'    pas=array("reservation window","flight reservation window is open","flight reservation window have to open",date,time,"pass")
'       For i = o To ubound(pas) Step 1
'           sheet.cells(row1+2,col)=pas(i)    
'           col=col+1
'       Next
'else    
'    fal=array("reservation window","flight reservation window is open","flight reservation window is not open",date,time,"fail")
'       For i = o To ubound(fal) Step 1
'           sheet.cells(row1+2,col1)=fal(i)    
'           col1=col1+1
'       Next
'End If  
'exlo.ActiveWorkbook.Save
'exlo.ActiveWorkbook.Close
'Set sheet=nothing