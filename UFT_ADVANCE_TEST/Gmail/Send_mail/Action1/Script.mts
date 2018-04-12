'=======================================[5]===========================================
'   Description:  Sending mail from Gmail.
'   Created By / Author : Sourabh Chakroborty
'   Date:  03 Feb 2017
'===================================================================================	
L_time = timer
Services.StartTransaction "Sending_mail"
''''''''''''''''''''''''''''''''''''''Cleanup function''''''''''''''''''''''''''''''''''''''''''
cleanup()
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'''''''''''''''''''''''''''''''''''''''''''Datatable''''''''''''''''''''''''''''''''
URL = datatable.Value("URL")
Username = datatable.Value("Username")
Password = datatable.Value("Password")
To_ = datatable.Value("To")
Subject = datatable.Value("Subject")
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'''''''''''''''''''''''''''''''''''''''Object'''''''''''''''''''''''''''''''''''''''
Set Login_obj = Browser("Gmail").Page("Gmail")
Set Home_obj = Browser("Gmail").Page("Inbox (23) - memo.sourabh@gmai")
Set Window_obj = Browser("Gmail").Dialog("Choose File to Upload")
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Login function
flogin URL,Login_obj,Username,Password

'Calculate the login time
S_time = timer
Services.StartTransaction "Login"
  if Home_obj.WebElement("COMPOSE").Exist then
	 Home_obj.WebElement("COMPOSE").Click
  else
      If Login_obj.WebEdit("Passwd").Exist Then
     	 Login_obj.WebEdit("Passwd").Set Password
	     Login_obj.WebButton("Sign in").Click
	  else
          ffail "Step-2","User in not login."
		  exittest          
      End If   
  End if 
E_time = timer
TT_time = E_time - S_time
Services.EndTransaction "Login"
reporter.ReportEvent micDone,"Login item","User login time :- "&TT_time

'Sending the mail
Home_obj.WebEdit("to").Set To_ @@ hightlight id_;_Browser("Gmail").Page("Inbox (23) - memo.sourabh@gmai").WebEdit("to")_;_script infofile_;_ZIP::ssf5.xml_;_
Home_obj.WebEdit("subjectbox").Set Subject @@ hightlight id_;_Browser("Gmail").Page("Inbox (23) - memo.sourabh@gmai").WebEdit("subjectbox")_;_script infofile_;_ZIP::ssf6.xml_;_
Home_obj.WebElement("Attatchment").Click
Window_obj.WinTreeView("WinTreeView").Select "Desktop;Computer" @@ hightlight id_;_3212476_;_script infofile_;_ZIP::ssf19.xml_;_
Window_obj.WinObject("Items View").WinList("Items View").Select "Local Disk (C:)" @@ hightlight id_;_2078193448_;_script infofile_;_ZIP::ssf21.xml_;_
Window_obj.WinButton("Open").Click
Window_obj.WinObject("Items View_2").WinList("Items View").Select "Software" @@ hightlight id_;_2079362936_;_script infofile_;_ZIP::ssf22.xml_;_
Window_obj.WinButton("Open").Click @@ hightlight id_;_329046_;_script infofile_;_ZIP::ssf23.xml_;_
Window_obj.WinObject("Items View_3").WinList("Items View").Select "3rd Party_PLS_process" @@ hightlight id_;_2079349040_;_script infofile_;_ZIP::ssf25.xml_;_
Window_obj.WinButton("Open").Click @@ hightlight id_;_131862_;_script infofile_;_ZIP::ssf9.xml_;_

'Calculate the item uploading time
S_time = timer
Services.StartTransaction "Uploading time"
Do
Loop until Home_obj.WebElement("Progressbar").Exist(1) = false 
E_time = timer
TT_time = E_time - S_time
Services.EndTransaction "Uploading time"
reporter.ReportEvent micDone,"Upload item","Data upload time :- "&TT_time

'Click on send button
Home_obj.WebElement("Send").Click
'Message show after sending the mail 
If "Your message has been sent. View message" = Home_obj.WebElement("Your message has been").GetROProperty("innertext") Then
	fpass "Message is send successfully","Mail is send"
ElseIf True Then	
End If
Home_obj.Link("Link").Click @@ script infofile_;_ZIP::ssf27.xml_;_
Home_obj.Link("Sign out").Click
O_time = timer
TT1_time = L_time - O_time
Services.EndTransaction "Sending_mail"
reporter.ReportEvent micDone ,"Last step","Sending mail task is successfully it take "&TT1_time&" amount of second." 
systemutil.CloseDescendentProcesses()

Function fpass(Step_name,Step_details)
   
    reporter.ReportEvent micPass ,Step_name ,Step_details     
    
End Function

Function ffail(Step_name,Step_details)

    reporter.ReportEvent micFail ,Step_name ,Step_details     
    
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

Function flogin(URL,Obj,Username,Password)

	Systemutil.Run "iexplore",URL
	If Login_obj.Link("Create account").Exist Then
			Login_obj.WebEdit("Email").Set Username
			Login_obj.WebButton("Next").Click @@ hightlight id_;_Browser("Gmail").Page("Gmail").WebButton("Next")_;_script infofile_;_ZIP::ssf2.xml_;_
			Login_obj.WebEdit("Passwd").Set Password @@ hightlight id_;_Browser("Gmail").Page("Gmail").WebEdit("Passwd")_;_script infofile_;_ZIP::ssf3.xml_;_
			Login_obj.WebButton("Sign in").Click
			fpass "Step-1","User is login successfully"
	elseif Login_obj.WebElement("memo.sourabh@gmail.com").Exist then
    	if Login_obj.WebElement("memo.sourabh@gmail.com").GetROProperty("innertext") = Username Then
 			Login_obj.WebEdit("Passwd").Set Password
    		Login_obj.WebButton("Sign in").Click
    		fpass "Step-1","User is login successfully"
    	else
			Login_obj.Link("Sign in with a different").Click @@ hightlight id_;_Browser("Gmail").Page("Gmail").Link("Sign in with a different")_;_script infofile_;_ZIP::ssf15.xml_;_
				If Browser("Gmail").Page("Google Accounts").Link("Add account").Exist(2) Then
		   			Browser("Gmail").Page("Google Accounts").Link("Add account").Click
		   		else
		   		    ffail "Step-1","Add account link is not present so user is not login"
				End If @@ hightlight id_;_Browser("Gmail").Page("Google Accounts").Link("Add account")_;_script infofile_;_ZIP::ssf16.xml_;_
		Login_obj.WebEdit("Email").Set Username @@ hightlight id_;_Browser("Gmail").Page("Gmail").WebEdit("Email")_;_script infofile_;_ZIP::ssf1.xml_;_
		Login_obj.WebButton("Next").Click @@ hightlight id_;_Browser("Gmail").Page("Gmail").WebButton("Next")_;_script infofile_;_ZIP::ssf2.xml_;_
		Login_obj.WebEdit("Passwd").Set Password @@ hightlight id_;_Browser("Gmail").Page("Gmail").WebEdit("Passwd")_;_script infofile_;_ZIP::ssf3.xml_;_
		Login_obj.WebButton("Sign in").Click
        fpass "Step-1","User is login successfully"
    	End if	
    else
		ffail "Step-1","User login is unsuccessfully error occure during login"   
	End If

End Function



