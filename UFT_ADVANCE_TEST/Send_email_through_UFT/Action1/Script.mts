'''''''''''''''''''''''''''''''''''''''''''Send mail through UFT''''''''''''''''''''''''''''''''''''''''''

			'========================================================================================================
			'========================================================================================================
				'Note for Gmail account :- We have to turn on the Less security app setting,so click on this link 
				'https://www.google.com/settings/security/lesssecureapps   
			'========================================================================================================
			'========================================================================================================

'Create an object of CDO type
Set myMail=CreateObject("CDO.Message")
'Enable SSL Authentication
myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpusessl") = 1
'Enable basic smtp authentication
myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1
'Specify SMTP server and port
myMail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpserver")="smtp.gmail.com"
myMail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 25  
myMail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2
'Specify user id and password
myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendusername") = "memo.sourabh@gmail.com"
myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "sourabh24"
'Update the configuration fields
myMail.Configuration.Fields.Update
 
'Specify email properties
myMail.Subject = "Sending Email from QTP"
myMail.From = "memo.sourabh@gmail.com"
myMail.To = "pratapom8@gmail.com"
myMail.CC = ""
myMail.BCC = ""
myMail.TextBody = "This is the Text Body"
myMail.AddAttachment "C:\Users\Yogesh\Desktop\Excel_hyperlink.txt"

'Attach the file in the specific folder
set objFSO = CreateObject("Scripting.FileSystemObject")
set objFolder=objFSO.GetFolder("F:\Sam")
For Each f In objFolder.Files
    myMail.AddAttachment f.path
Next

'Send mail
myMail.Send
Set myMail = Nothing

'''''''''''''''''''''''''''''''''''Send mail through outlook application''''''''''''''''''''''''''''''''''''''''''

'Set objOutlook = CreateObject("Outlook.Application")
'Set myMail = objOutlook.CreateItem(0) 
''Set the email properties
'myMail.To = "memo.sourabh@gmail.com"
''myMail.CC = "some_mail_id_2@gmail.com; some_other_mail@yahoo.com" 'Sending mails to multiple ids
'myMail.BCC = "" 'If BCC is not required, then this line can be omitted
'myMail.Subject = "Sending mail from MS Outlook using QTP"
'myMail.Body= "Test Mail Contents"
'myMail.Attachments.Add("F:\Book2.xlsx") 'Path of the file to be attached
' 
''Send the mail
'myMail.Send
'Wait(3)
' 
''Clear object reference
'Set myMail = Nothing
'Set objOutlook = Nothing

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
