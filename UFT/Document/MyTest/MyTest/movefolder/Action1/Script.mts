Set fso=createobject("Scripting.FileSystemObject")

SourcePath="C:\Documents and Settings\yogesh\Desktop\MyTest\final1" 
DestinationPath="C:\Documents and Settings\yogesh\Desktop\MyTest\temp\"

'Folder to be created SourcePath="C:\Documents and Settings\yogesh\Desktop\MyTest\final1" DestinationPath="C:\Documents and Settings\yogesh\Desktop\MyTest\temp\" 
'If the folder doesnot exst then create the folder

If fso.FolderExists(DestinationPath) = false Then

 fso.CreateFolder (DestinationPath)
End If

fso.MoveFolder  SourcePath,DestinationPath

Set fso=nothing
 