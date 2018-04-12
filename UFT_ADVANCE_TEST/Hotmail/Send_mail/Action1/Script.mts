'Cleanup function
cleanup()
'''''''''''''''''

'Calculate the excuation time of the test
L_time = timer
Services.StartTransaction "L_time"

''''''''''''''''''''''''''''''''''''''Datatable''''''''''''''''''''''''''''''''''''''
URL = datatable.Value("URL")
Username = datatable.Value("Username")
Password = datatable.Value("Password")
To_ = datatable.Value("To")
Subject = datatable.Value("Subject")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'''''''''''''''''''''''''''''''''''''''Object''''''''''''''''''''''''''''''''''''''''
Set Login_obj = Browser("Sign in to your Microsoft").Page("Sign in to your Microsoft")
Set Home_obj = Browser("Sign in to your Microsoft").Page("Mail - memo chakroborty")
Set Upload_obj = Browser("Sign in to your Microsoft").Dialog("Choose File to Upload")
Set Home1_obj = Browser("Sign in to your Microsoft").Page("Mail - memo chakroborty_2")
Set fso=createobject("Scripting.FileSystemObject")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Launch function 
Launch(URL)
'''''''''''''''
If Login_obj.WebEdit("loginfmt").Exist Then
	Login_obj.WebEdit("loginfmt").Set Username
	Login_obj.WebButton("Next").Click
End If

If Login_obj.WebEdit("passwd").Exist Then
	Login_obj.WebEdit("passwd").Set Password
	Login_obj.WebButton("Sign in").Click
End If

'Calculate the time for login
Services.StartTransaction "Login_time"
S_time = timer
	Do
	
	Loop until Home_obj.WebButton("New").Exist(1) = true @@ hightlight id_;_Browser("Sign in to your Microsoft").Page("Sign in to your Microsoft").WebEdit("loginfmt")_;_script infofile_;_ZIP::ssf1.xml_;_
E_time = timer
TT_time = E_time - S_time
print "Login time "&TT_time

''''''''''''Reporter
reporter.ReportEvent micPass,"Step Login","User is login successfully and time taken "&TT_time
''''''''''''''''''''

Services.EndTransaction "Login_time"
''''''''''''''''''''''''''''''''''''''''''''''''
If Home_obj.WebButton("New").Exist Then
	 Home_obj.WebButton("New").highlight
	 wait 2
	 Home_obj.WebButton("New").Click
End If

Home_obj.WebButton("Attach").highlight
Home_obj.WebButton("Attach").Click
Home_obj.WebButton("Computer").Click

Upload_obj.WinTreeView("WinTreeView").Select "Desktop;Computer" @@ hightlight id_;_197458_;_script infofile_;_ZIP::ssf2.xml_;_
Upload_obj.WinObject("Items View").WinList("Items View").Select "Local Disk (C:)" @@ hightlight id_;_2075481328_;_script infofile_;_ZIP::ssf4.xml_;_
Upload_obj.WinButton("Open").Click
Upload_obj.WinObject("Items View_2").WinList("Items View").Select "Software" @@ hightlight id_;_328020_;_script infofile_;_ZIP::ssf6.xml_;_
Upload_obj.WinButton("Open").Click
Upload_obj.WinObject("Items View_3").WinList("Items View").Select "3rd Party_PLS_process" @@ hightlight id_;_2077594112_;_script infofile_;_ZIP::ssf7.xml_;_
Upload_obj.WinButton("Open").Click @@ hightlight id_;_328020_;_script infofile_;_ZIP::ssf8.xml_;_
Home_obj.WebButton("Attach as a copy Recipients").highlight
Home_obj.WebButton("Attach as a copy Recipients").Click

'Calculate the time for upload the attachment
Services.StartTransaction "Upload_attachment"
S_timer = timer
	Do
		Home_obj.WebButton("WebButton").Click
	Loop until Home_obj.WebButton("View").Exist(1)
E_time = timer
TT_time = E_time - S_timer
print "Upload attachment time "&TT_time
Services.EndTransaction "Upload_attachment"
'''''''''''''''''''''''''''''''''''''''''''''''' @@ script infofile_;_ZIP::ssf9.xml_;_

''''''''''''Reporter
reporter.ReportEvent micPass,"Step Upload","Attachment is uploaded successfully and time taken "&TT_time
''''''''''''''''''''
Home_obj.WebEdit("To").Set To_
wait 2
Home_obj.WebEdit("Subject").Set Subject
wait 2
Set F_obj = fso.OpenTextFile("C:\Users\ideliver\Desktop\Sam.txt",1,true)
str =  F_obj.ReadAll
Home_obj.WebEdit("Description").Set str

wait 20
Home_obj.WebButton("Send").highlight
Home_obj.WebButton("Send").Click

Home1_obj.WebElement("Sent Items").Click
If To_ = trim(Home1_obj.WebElement("vishdas@gmail.com").GetROProperty("innertext")) Then
	
	''''''''''''Reporter
	reporter.ReportEvent micPass,"Mail send","Mail is send successfully"
	''''''''''''''''''''

End If

Home1_obj.WebButton("WebButton").highlight
Home1_obj.WebButton("WebButton").Click
Home1_obj.Link("Sign out").highlight
Home1_obj.Link("Sign out").Click

E_time = timer
TT_time = E_time - L_time
Print "Total excuation time taken "&TT_time
Services.EndTransaction "L_time"

'Close all the process
systemutil.CloseDescendentProcesses

''''''''''''Reporter
reporter.ReportEvent micPass,"Step Test_excuation","It take "&TT_time&" to complete the excuation the step."
''''''''''''''''''''

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
systemutil.CloseDescendentProcesses		
End Function

Function Launch(URL)
	Systemutil.Run "iexplore",URL
End Function