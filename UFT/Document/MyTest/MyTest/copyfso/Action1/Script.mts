Set fso=createobject("Scripting.FileSystemObject")
Sourcefile="C:\Documents and Settings\yogesh\Desktop\MyTest\fsotest.txt"
'File to be copied Sourcefile="C:\Documents and Settings\yogesh\Desktop\MyTest\fsotest.txt"'Dest folder where the file has to be copied
Destination="C:\Documents and Settings\yogesh\Desktop\MyTest\final1\"

'If the destination doesnot exist then create the destination folder

If fso.FolderExists(Destination) = false Then   
fso.CreateFolder (Destination)
End If  

'Copy the file 

fso.CopyFile Sourcefile,Destination,True
Set fso=nothing
