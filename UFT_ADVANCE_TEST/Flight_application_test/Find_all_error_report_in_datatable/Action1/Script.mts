
Username = datatable.Value("Username")
Password = datatable.Value("Password")
S_time = timer
WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").Set Username
User = WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").GetROProperty("text")
If User = "" Then
datatable.Value("Error_report") = "Username is not enter"	
End If @@ hightlight id_;_1881316664_;_script infofile_;_ZIP::ssf6.xml_;_

WpfWindow("HP MyFlight Sample Application").WpfEdit("password").Set Password @@ hightlight id_;_2119513416_;_script infofile_;_ZIP::ssf7.xml_;_

Pas = WpfWindow("HP MyFlight Sample Application").WpfEdit("password").GetROProperty("text")
If User = "" Then
datatable.Value("Error_report") = "Password is not enter"	
End If

If WpfWindow("HP MyFlight Sample Application").WpfButton("OK").GetROProperty("enabled") = true Then
   WpfWindow("HP MyFlight Sample Application").WpfButton("OK").Click	
End If

If WpfWindow("HP MyFlight Sample Application").Dialog("Login Failed").Exist(1) Then
   WpfWindow("HP MyFlight Sample Application").Dialog("Login Failed").Static("Incorrect username or").Output CheckPoint("Incorrect username or password.  Use: Username=john, Password=HP")
   WpfWindow("HP MyFlight Sample Application").Dialog("Login Failed").WinButton("OK").Click	
End If
T_time = timer
TT_time = T_time - S_time
datatable.Value("TT_time") = TT_time
