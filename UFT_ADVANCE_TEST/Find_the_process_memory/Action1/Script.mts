strComputer = "."
Set objWMIService = GetObject("winmgmts:\\" & strComputer & "\root\cimv2")

'Get the CPU utilization %
myQuery = "SELECT * FROM Win32_PerfFormattedData_PerfOS_Processor WHERE Name = '_Total'"
For Each objItem in objWMIService.ExecQuery(myQuery)
   print "Processor time " & objItem.PercentProcessorTime & "  %"
next

'Get the total Physical Memory
myQuery="Select * from Win32_ComputerSystem"
Set colItems = objWMIService.ExecQuery(myQuery)
For each objitem in colItems
    print "Total Physical Memory "&objitem.TotalPhysicalMemory/1024
Next

'Get the total available physical memory
myQuery="Select * from Win32_PerfFormattedData_PerfOS_Memory"
Set colItems = objWMIService.ExecQuery(myQuery)
For Each objItem in colItems
    print "Available GB: " & objItem.AvailableKBytes
Next








