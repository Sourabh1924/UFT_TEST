'=======================================[5]===========================================
'   Description:  Upload data into google drive.
'   Created By / Author : Sourabh Chakroborty
'   Date:  09 Feb 2017
'===================================================================================	

'Cleanup 
cleanup()
''''''''''''''''''''''''''''''''''''''''''Datatable'''''''''''''''''''''''''''''''''''''
Username = datatable.Value("Username")
Password = datatable.Value("Password")
URL = datatable.Value("URL")
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''Object''''''''''''''''''''''''''''''''''''''
Set Login_obj = Browser("Gmail").Page("Gmail")
Set Home_obj = Browser("Gmail").Page("Inbox (25) - memo.sourabh@gmai")
Set G_drive_obj = Window("Windows Internet Explorer").Dialog("Choose File to Upload")
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Launch(URL)
 @@ hightlight id_;_Browser("Gmail").Page("Inbox (25) - memo.sourabh@gmai").Link("Sign out")_;_script infofile_;_ZIP::ssf24.xml_;_
'Calculate total execution time of the script
Services.StartTransaction "Exe"
L_time = timer

'Calculate login time
S_time = timer
Services.StartTransaction "Login_time"
Login_obj.WebEdit("Email").Set Username @@ hightlight id_;_Browser("Gmail").Page("Gmail").WebEdit("Email")_;_script infofile_;_ZIP::ssf1.xml_;_
Login_obj.WebButton("Next").Click @@ hightlight id_;_Browser("Gmail").Page("Gmail").WebButton("Next")_;_script infofile_;_ZIP::ssf2.xml_;_
Login_obj.WebEdit("Passwd").Set Password @@ hightlight id_;_Browser("Gmail").Page("Gmail").WebEdit("Passwd")_;_script infofile_;_ZIP::ssf3.xml_;_
Login_obj.WebButton("Sign in").Click
wait 5
'Check user login or not
If Home_obj.WebElement("COMPOSE").Exist Then
   E_time = timer
   Services.EndTransaction "Login_time"
   TT_time = E_time - S_time
   'Reporter
   reporter.ReportEvent micDone,"Login","User take "&TT_time&" of second for login."
      'Click on google drive   
   	  If Browser("Gmail").Page("Inbox (25) - memo.sourabh@gmai_2").Link("Link").Exist Then
			Browser("Gmail").Page("Inbox (25) - memo.sourabh@gmai_2").Link("Link").Click
			Browser("Gmail").Page("Inbox (25) - memo.sourabh@gmai_2").Link("Drive").Click
   	  End If	
End If @@ hightlight id_;_Browser("Gmail").Page("Inbox (25) - memo.sourabh@gmai 2").Link("Drive")_;_script infofile_;_ZIP::ssf8.xml_;_

wait 1 @@ hightlight id_;_787494_;_script infofile_;_ZIP::ssf21.xml_;_
Window("Windows Internet Explorer_2").RunAnalog "Track4" @@ hightlight id_;_1245858_;_script infofile_;_ZIP::ssf22.xml_;_
wait 1
Desktop.RunAnalog "Track1"
wait 1
G_drive_obj.WinTreeView("WinTreeView").Select "Desktop;Computer" @@ hightlight id_;_1180500_;_script infofile_;_ZIP::ssf13.xml_;_
G_drive_obj.WinObject("Items View").WinList("Items View").Select "Local Disk (C:)" @@ hightlight id_;_2072527448_;_script infofile_;_ZIP::ssf14.xml_;_
G_drive_obj.WinButton("Open").Click
G_drive_obj.WinObject("Items View_2").WinList("Items View").Select "Software" @@ hightlight id_;_2071761568_;_script infofile_;_ZIP::ssf16.xml_;_
G_drive_obj.WinButton("Open").Click @@ hightlight id_;_5571776_;_script infofile_;_ZIP::ssf17.xml_;_
G_drive_obj.WinObject("Items View_3").WinList("Items View").Select "winrar-x64-531" @@ hightlight id_;_2073163776_;_script infofile_;_ZIP::ssf18.xml_;_
G_drive_obj.WinButton("Open").Click @@ hightlight id_;_5571776_;_script infofile_;_ZIP::ssf19.xml_;_

'Calculate data upload time  
S_timer = timer
Services.StartTransaction "Upload_time"
	Do
   		var = Browser("My Drive - Google Drive").Page("My Drive - Google Drive").WebElement("2 uploads complete").GetROProperty("innertext")
	Loop until right(Browser("My Drive - Google Drive").Page("My Drive - Google Drive").WebElement("2 uploads complete").GetROProperty("innertext") ,len(var) - instrrev(var," ")) = "complete"	
E_time = timer
Services.EndTransaction "Upload_time"
TT_time = E_time - S_timer

'Reporter
reporter.ReportEvent micDone,"Upload time","Data take "&TT_time&" of seconds to upload."
'Close the google drive
Browser("My Drive - Google Drive").Close
'logout from gmail
Home_obj.Link("Link").Click @@ hightlight id_;_Browser("Gmail").Page("Inbox (25) - memo.sourabh@gmai").Link("Link")_;_script infofile_;_ZIP::ssf23.xml_;_
Home_obj.Link("Sign out").Click
O_time = timer
T_time = O_time - L_time
Services.EndTransaction "Exe"
'Reporter
reporter.ReportEvent micDone,"Total time","Script take "&T_time&" of second for execution "
systemutil.CloseDescendentProcesses()

Function Launch(URL)
	Systemutil.Run "iexplore",URL
	reporter.ReportEvent micPass,"Launch","Gmail website is login."
End Function

Function cleanup()

	Set fso = CreateObject("Scripting.FileSystemObject")
	Set MainFolder = fso.GetFolder(environment.Value("TestDir"))
	date_ = now - 1
		For Each fldr In MainFolder.SubFolders
		    If fldr.Datecreated < date_ Then
		        Foldername = mid(fldr.Name,1,3)
		           If Foldername = "Res" Then
		           	   ss=fso.getfolder(fldr)
		               fso.deletefolder(ss)
		           End If        
		    End If
		Next
		
End Function