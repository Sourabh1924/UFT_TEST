 Set fso=createobject("Scripting.FileSystemObject")
'The file to check the existence
filepath="C:\Documents and Settings\yogesh\Desktop\MyTest\fsotest.txt"

If fso.FileExists(filepath) then
 msgbox  "File Exists"
Else
 Msgbox "File doesnot Exist"
End If

Set fso=nothing