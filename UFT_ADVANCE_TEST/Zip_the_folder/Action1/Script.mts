path = environment.Value("TestDir")
SourceFolderPath = left(path,InstrRev(Environment("TestDir"),"\"))
SourceFolderPath1 = mid(path,1,3) 
TargetZipFileName = "Cleartrip_zip"
'SystemUtil.Run Winrar_path,"a -ep1  -scul -r0 -iext -- " ZipFileName_with_extension Path_of_file_for_zip,Pth_where_you_want_to save,"" 
SystemUtil.Run "C:\Program Files\WinRAR\WinRAR.exe","a -ep1  -scul -r0 -iext -- "&TargetZipFileName&".rar C:\Users\Yogesh\Desktop\UFT_API","C:\Users\Yogesh\Desktop","" 
