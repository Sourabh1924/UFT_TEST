''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Login'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' @@ hightlight id_;_1915406960_;_script infofile_;_ZIP::ssf128.xml_;_
Services.StartTransaction "Login"
S_time = timer
If Window("Skype for Business").WinObject("WinObject").WinButton("Sign In").Exist(5) Then
	Window("Skype for Business").WinObject("WinObject").WinButton("Sign In").Click	
End If @@ hightlight id_;_3605356_;_script infofile_;_ZIP::ssf129.xml_;_
If Window("Skype for Business").WinObject("WinObject").WinObject("Contacts").Exist(10) Then
		Do	
		Loop until Window("Skype for Business").WinObject("WinObject").WinObject("Contacts").Exist(2) = true
	E_time = timer @@ hightlight id_;_1902070_;_script infofile_;_ZIP::ssf118.xml_;_
	TT_time = E_time - S_time
	Services.EndTransaction "Login"
	print TT_time
	Window("Skype for Business").RunAnalog "Track2" @@ hightlight id_;_3343568_;_script infofile_;_ZIP::ssf125.xml_;_
	Window("Conversation (1 Participant)").Window("Join Meeting Audio").WinObject("Join Meeting Audio").WinRadioButton("Use Skype for Business").Set @@ hightlight id_;_1918684432_;_script infofile_;_ZIP::ssf122.xml_;_
	Window("Conversation (1 Participant)").Window("Join Meeting Audio").WinObject("Join Meeting Audio").WinButton("OK").Click
	wait 10
	'Click on present 	
	Window("Conversation (1 Participant)").RunAnalog "Track5" @@ hightlight id_;_656364_;_script infofile_;_ZIP::ssf130.xml_;_
	Window("Conversation (1 Participant)").Window("Window").WinObject("Present Desktop").WinButton("Present").Click
else
	Window("Skype for Business").WinObject("WinObject").WinButton("Change").Click @@ hightlight id_;_1918672840_;_script infofile_;_ZIP::ssf121.xml_;_
	Window("Skype for Business").Dialog("Skype for Business - Options").WinEdit("Sign-in address:").Set datatable.Value("Username")&"@rockwellautomation.com" @@ hightlight id_;_1902070_;_script infofile_;_ZIP::ssf117.xml_;_
	Window("Skype for Business").Dialog("Skype for Business - Options").WinButton("OK").Click
	Window("Skype for Business").WinObject("Password:").Type "iDeliver104"
	Window("Skype for Business").WinObject("WinObject").WinButton("Sign In").Click
	
		Do	
		Loop until Window("Skype for Business").WinObject("WinObject").WinObject("Contacts").Exist(2) = true
	E_time = timer @@ hightlight id_;_1902070_;_script infofile_;_ZIP::ssf118.xml_;_
	TT_time = E_time - S_time
	Services.EndTransaction "Login"
	print TT_time
	wait 1

	'Click on Meet Now option in menu 
	Window("Skype for Business").RunAnalog "Track2" @@ hightlight id_;_3343568_;_script infofile_;_ZIP::ssf125.xml_;_
	Window("Conversation (1 Participant)").Window("Join Meeting Audio").WinObject("Join Meeting Audio").WinRadioButton("Use Skype for Business").Set @@ hightlight id_;_1918684432_;_script infofile_;_ZIP::ssf122.xml_;_
	Window("Conversation (1 Participant)").Window("Join Meeting Audio").WinObject("Join Meeting Audio").WinButton("OK").Click
	wait 10
	'Click on present 
	Window("Conversation (1 Participant)").RunAnalog "Track4"
	Window("Conversation (1 Participant)").Window("Window").WinObject("Present Desktop").WinButton("Present").Click
End If

'Click on Exit
Window("Skype for Business").RunAnalog "Track3"
