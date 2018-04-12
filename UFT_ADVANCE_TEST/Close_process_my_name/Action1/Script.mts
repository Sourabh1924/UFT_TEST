Set service = GetObject ("winmgmts:")
for each Process in Service.InstancesOf ("Win32_Process")
	If Process.Name = "notepad.exe" then
		print "Notepad"
	End If
next