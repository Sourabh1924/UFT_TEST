systemutil.Run environment.Value("path") 'use enviromentel variable for path


cnt=datatable.GetSheet("login").GetRowCount() 'count the number of rows in login sheet
For i=1 to cnt
    DataTable.SetCurrentRow(i) 'set the first row
    s_time=timer 'start ex_time
    Dialog("Login").Static("Agent Name:").Check CheckPoint("Agent Name:")  'use standed checkpoint on agentname @@ hightlight id_;_918580_;_script infofile_;_ZIP::ssf1.xml_;_
    Dialog("Login").WinEdit("Agent Name:").Set datatable.Value("Agent_name","login") @@ hightlight id_;_1246186_;_script infofile_;_ZIP::ssf2.xml_;_
    Dialog("Login").Static("Static").Check CheckPoint("Static")  'use bitmap checkpoint on image @@ hightlight id_;_1049412_;_script infofile_;_ZIP::ssf3.xml_;_
    Dialog("Login").WinEdit("Password:").SetSecure datatable.Value("Password","login") @@ hightlight id_;_787606_;_script infofile_;_ZIP::ssf8.xml_;_
    Dialog("Login").WinButton("OK").Click @@ hightlight id_;_656524_;_script infofile_;_ZIP::ssf5.xml_;_
    If Window("Flight Reservation").Exist(5)=false Then
          Dialog("Login").Dialog("Flight Reservations").Static("Incorrect password. Please").Output CheckPoint("Error_message") 'use standed output value in error message
          Dialog("Login").Dialog("Flight Reservations").WinButton("OK").Click	       	
    else
          e_time=timer ''end ex_time
          ex_time=e_time-s_time  'total ex_time
              If Window("Flight Reservation").Exist=true Then
	               Call exlreport("Login","Login window is open","Login window is open",date,time,"Pass",ex_time) 'function call
	          else
	               Call exlreport("Login","Login window is open","Login window is not open",date,time,"Fail",ex_time) 'function call
              End If
    End If
    
Next

 @@ hightlight id_;_263494_;_script infofile_;_ZIP::ssf7.xml_;_

 @@ hightlight id_;_329084_;_script infofile_;_ZIP::ssf33.xml_;_