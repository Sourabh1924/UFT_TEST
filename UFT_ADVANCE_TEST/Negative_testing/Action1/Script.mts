
'Negative testing with different user
username()

Function username()
row_cnt = datatable.GetSheet("Global").GetRowCount
    For i = 1 To row_cnt Step 1
        datatable.SetCurrentRow(i)
           If datatable.Value("Username") = "john" Then
   	           WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").Set datatable.Value("Username")
	           password()          
           End If   
    Next   
End Function

Function password()
   If ucase(datatable.Value("Password")) = "HP" Then
   	   WpfWindow("HP MyFlight Sample Application").WpfEdit("password").SetSecure datatable.Value("Password")
   	   WpfWindow("HP MyFlight Sample Application").WpfButton("OK").Click
   End If	
End Function

'Negative testing with different user and store error message
username()

Function username()
row_cnt = datatable.GetSheet("Global").GetRowCount
    For i = 1 To row_cnt Step 1
        datatable.SetCurrentRow(i)
        WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").Set datatable.Value("Username")
        password()             
    Next   
End Function

Function password() @@ hightlight id_;_2033472_;_script infofile_;_ZIP::ssf40.xml_;_
   	WpfWindow("HP MyFlight Sample Application").WpfEdit("password").SetSecure datatable.Value("Password")
   	WpfWindow("HP MyFlight Sample Application").WpfButton("OK").Click 	
   	    If WpfWindow("HP MyFlight Sample Application").Dialog("Login Failed").Exist Then
   		    WpfWindow("HP MyFlight Sample Application").Dialog("Login Failed").Static("Username must be at least").Output CheckPoint("Username must be at least 4 characters long_2")
            WpfWindow("HP MyFlight Sample Application").Dialog("Login Failed").WinButton("OK").Click
        else
             datatable.Value("Username_must_be_at_least_text_out") = "User and Password is correct"
   	    End If  	
End Function

Call FuncEx 
