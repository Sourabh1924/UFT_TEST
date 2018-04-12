Set fso=createobject("Scripting.FileSystemObject")

'Drive for  getting details  Sourcefile="C:\"  Set get_drv=fso.GetDrive(Sourcefile) 
 'Some of the following details can be retrieved from a drive
 Sourcefile="C:\"  
 Set get_drv=fso.GetDrive(Sourcefile) 
msgbox  get_drv.AvailableSpace
Msgbox  get_drv.DriveLetter
msgbox  get_drv.DriveType
msgbox  get_drv.FileSystem
msgbox  get_drv.FreeSpace
msgbox  get_drv.Path
Msgbox  get_drv.RootFolder
Msgbox  get_drv.SerialNumber
Msgbox  get_drv.TotalSize

Set fso=nothing