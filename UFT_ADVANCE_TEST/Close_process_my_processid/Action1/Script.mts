

call GetprocessID()


call GetprocessID()


call GetprocessID()


call GetprocessID()


call GetprocessID()
Function GetprocessID()
i = 0
Set service = GetObject ("winmgmts:")
for each Process in Service.InstancesOf ("Win32_Process")
	If Process.Name = "EXCEL.EXE" then
		sum = Process.ProcessID
		environment.Value("save") = sum &" "& environment.Value("save")
		i = i + 1
	End If		
environment.Value("save") = ""
Next
End Function
