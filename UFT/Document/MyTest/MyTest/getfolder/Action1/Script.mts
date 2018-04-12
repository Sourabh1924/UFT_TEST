Set fso=createobject("Scripting.FileSystemObject")

'Folder  for  getting details  
Sourcefolder="C:\Documents and Settings\yogesh\Desktop\MyTest\temp\"
Set get_folder=fso.GetFolder(Sourcefolder) 

'get the subfolders count in a folder
Set  get_subfolder=get_folder.SubFolders
msgbox	get_subfolder.Count
For  each  sfile  in get_subfolder
'Get the name of each folder
 Msgbox  sfile.name

Next

Set fso=nothing
