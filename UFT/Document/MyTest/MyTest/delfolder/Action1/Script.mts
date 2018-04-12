Set fso=createobject("Scripting.FileSystemObject")
'Folder to be  deleted.  FolderDel="C:\Documents and Settings\yogesh\Desktop\MyTest\temp\final1"  'Delete the folder
FolderDel="C:\Documents and Settings\yogesh\Desktop\MyTest\temp\final1"
fso.DeleteFolder(FolderDel)

Set fso=nothing
