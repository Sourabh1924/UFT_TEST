S_T_time = timer
Services.StartTransaction "S_T_time"
'''''''''''''''''''''''''''''''''''''''''''''''''''''''Login''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Browser("Sign in to your Microsoft").Page("Sign in to your Microsoft").WebEdit("loginfmt").Set "memo.sourabh@hotmail.com" @@ hightlight id_;_Browser("Sign in to your Microsoft").Page("Sign in to your Microsoft").WebEdit("loginfmt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Sign in to your Microsoft").Page("Sign in to your Microsoft").WebButton("Next").Click @@ hightlight id_;_Browser("Sign in to your Microsoft").Page("Sign in to your Microsoft").WebButton("Next")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Sign in to your Microsoft").Page("Sign in to your Microsoft").WebEdit("passwd").SetSecure "58aaf2f078a2a90e681fb846080c42d1f9a80a8a754774b1c54a1fe7" @@ hightlight id_;_Browser("Sign in to your Microsoft").Page("Sign in to your Microsoft").WebEdit("passwd")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Sign in to your Microsoft").Page("Sign in to your Microsoft").WebButton("Sign in").Click @@ hightlight id_;_Browser("Sign in to your Microsoft").Page("Sign in to your Microsoft").WebButton("Sign in")_;_script infofile_;_ZIP::ssf4.xml_;_

'===Calculate login time
S_time = timer
Services.StartTransaction "Login"
	Do	
	Loop until Browser("Sign in to your Microsoft").Page("Mail - memo chakroborty").WebButton("WebButton").Exist = true
Services.EndTransaction "Login"
E_time = timer
TT_time = E_time - S_time
datatable.Value("Login_time") = TT_time
'=================
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

''''''''''''''''''''''''''''''''''''''''''''''''''''''Calendar''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Browser("Sign in to your Microsoft").Page("Mail - memo chakroborty").WebButton("WebButton").Click	
Browser("Sign in to your Microsoft").Page("Mail - memo chakroborty").Link("Calendar").Click
wait 10
datatable.Value("Date") = cstr(date)
Str = split(cstr(date),"/")
Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebElement("Day").SetTOProperty "innertext",trim(Str(1))
Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebElement("Day").Click
Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebElement("Day").Click
wait 2
Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebEdit("Title").Set "Meeting"
Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebEdit("Location").Set ""
Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebEdit("S_time").Set "3:30 PM"
Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebEdit("E_time").Set "4:30 PM"
If Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebButton("Save").Exist Then
   Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebButton("Save").highlight
   Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebButton("Save").Click
End If
wait 2
abs_x = Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebElement("Meeting").GetROProperty("abs_x")
abs_y = Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebElement("Meeting").GetROProperty("abs_y")
Set deviceReplay = CreateObject("Mercury.DeviceReplay") 
deviceReplay.MouseClick abs_x,abs_y, RIGHT_MOUSE_BUTTON
If Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebButton("Delete").Exist Then
   Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebButton("Delete").highlight
   Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebButton("Delete").Click
   wait 2
	 If Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebButton("Delete_2").Exist Then
	 	Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebButton("Delete_2").highlight
	 	Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebButton("Delete_2").Click
	 End If   
End If
wait 20
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").WebButton("WebButton").Click
Browser("Sign in to your Microsoft").Page("Calendar - memo chakroborty").Link("Sign out").Click
Services.EndTransaction "S_T_time"
E_T_time = timer
T_E_time = E_T_time - S_T_time
datatable.Value("Total_exe_time") = T_E_time
systemutil.CloseDescendentProcesses



