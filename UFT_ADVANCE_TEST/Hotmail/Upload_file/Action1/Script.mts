'=======================================[5]===========================================
'   Function Name:  fLogin
'   Function Description:  Login the user into Hotmail page.
'   Created By / Author : Sourabh Chakroborty
'   Date:  03 Feb 2017
'===================================================================================	

''''''''''''''''''''''''''''''''''''''Cleanup function''''''''''''''''''''''''''''''''''''''''''
cleanup()
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'''''''''''''''''''''''''''''''''''''''''Parameters'''''''''''''''''''''''''''''''''''''''''''''
Username = datatable.Value("Username",Global)
Password = datatable.Value("Password",Global)
URL = datatable.Value("URL",Global)
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'''''''''''''''''''''''''''''''''''''''''''Object'''''''''''''''''''''''''''''''''''''''''''''''
Set Obj = Browser("Sign In").Page("Sign In")  'For login page 
Set Obj2 = Browser("Sign In").Page("Mail - memo chakroborty")  'For mail page
Set Obj1 = Browser("Files - OneDrive_2").Dialog("Choose File to Upload")  'Onedrive page
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Login function
flogin Obj,URL,Username,Password

S_time = timer
	If Obj2.WebButton("WebButton").Exist Then
		E_timer = timer
		TT_time = E_timer - S_time
		reporter.ReportEvent micPass ,"Login time" ,"It take "&TT_time&" seconds for login" 
	End If
fpass "Step-3","User is successfully login in hotmail"
Obj2.WebButton("WebButton").click

'Open Onedrive in other page
Obj2.Link("OneDrive").Click

'Click on upload button
Set deviceReplay = CreateObject("Mercury.DeviceReplay")
x_axis = Browser("Files - OneDrive_2").Page("Files - OneDrive").WebElement("NewUpload").GetROProperty("abs_x")
y_axis = Browser("Files - OneDrive_2").Page("Files - OneDrive").WebElement("NewUpload").GetROProperty("abs_y")
deviceReplay.MouseClick x_axis+170,y_axis+10 , RIGHT_MOUSE_BUTTON @@ hightlight id_;_263094_;_script infofile_;_ZIP::ssf11.xml_;_
Set Obj1 = Browser("Files - OneDrive_2").Dialog("Choose File to Upload")  'Onedrive page
'Select the file
Obj1.WinTreeView("WinTreeView").Select "Desktop;Computer" @@ hightlight id_;_1836282_;_script infofile_;_ZIP::ssf23.xml_;_
Obj1.WinObject("Items View").WinList("Items View").Select "Local Disk (C:)" @@ hightlight id_;_1953985576_;_script infofile_;_ZIP::ssf24.xml_;_
Obj1.WinButton("Open").Click @@ hightlight id_;_3932936_;_script infofile_;_ZIP::ssf25.xml_;_
Obj1.WinObject("Items View_2").WinList("Items View").Select "Software" @@ hightlight id_;_1953986192_;_script infofile_;_ZIP::ssf26.xml_;_
Obj1.WinButton("Open").Click @@ hightlight id_;_3932936_;_script infofile_;_ZIP::ssf27.xml_;_
Obj1.WinObject("Items View_3").WinList("Items View").Select "3rd Party_PLS_process" @@ hightlight id_;_1953987424_;_script infofile_;_ZIP::ssf28.xml_;_
Obj1.WinButton("Open").Click @@ hightlight id_;_3932936_;_script infofile_;_ZIP::ssf29.xml_;_
'Browser("Files - OneDrive_2").Dialog("Choose File to Upload").WinObject("Items View").WinList("Items View").Select "3rd Party_PLS_process" @@ hightlight id_;_2068189816_;_script infofile_;_ZIP::ssf21.xml_;_

'Calculate the upload time of that file
S_time = timer
	Do
     
	Loop until Browser("Files - OneDrive").Page("Files - OneDrive").WebElement("Uploading 1 item").Exist(1) = false
E_time = timer
TT_time = E_time - S_time
datatable.GlobalSheet.AddParameter "Upload_time",TT_time
reporter.ReportEvent micPass ,"Upload time" ,"It take "&TT_time&" seconds for uploading that the file" 
'Close one drive
Browser("Files - OneDrive").Close
'Sign out from hotmail 
Obj2.WebButton("WebButton_2").Click @@ hightlight id_;_Browser("Sign In").Page("Mail - memo chakroborty").WebButton("WebButton 2")_;_script infofile_;_ZIP::ssf22.xml_;_
Obj2.Link("Sign out").Click
'Close all the process oprn by uft
systemutil.CloseDescendentProcesses()

Function flogin(Obj,URL,Username,Password)

    systemutil.Run "iexplore",URL 
      If isobject(Obj) Then
           If Obj.WebEdit("loginfmt").Exist Then
               fpass "Step-1","Type username and click next"
           	   Obj.WebEdit("loginfmt").set Username
		 	   Obj.WebButton("Next").click
           End If
      	   If Obj.WebEdit("passwd").Exist Then
      	   	   fpass "Step-2","Type password and click signin"
      	   	   Obj.WebEdit("passwd").set Password
		 	   Obj.WebButton("Sign in").click
      	   End If
	  else
           reporter.ReportEvent micFail ,"Object issue" ,"Object is not find"  	  
      End If
      
End Function

Function fpass(Step_name,Step_details)

    File_name = now
    File_name =Replace(File_name,":","")
    reporter.ReportEvent micPass ,Step_name ,Step_details     
    
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