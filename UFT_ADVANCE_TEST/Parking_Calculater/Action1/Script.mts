launch("http://adam.goucher.ca/parkcalc/")
Cnt = datatable.GetRowCount
j = 1
For i = 1 To Cnt Step 1
    S_time = timer
	datatable.SetCurrentRow(i)
	Browser("Parking Calculator").Page("Parking Calculator").WebList("Lot").Select datatable.Value("Parking_type")
	Browser("Parking Calculator").Page("Parking Calculator").WebEdit("EntryTime").Set datatable.Value("E_time")
	Browser("Parking Calculator").Page("Parking Calculator").WebRadioGroup("EntryTimeAMPM").Select datatable.Value("AM_PM")
	Browser("Parking Calculator").Page("Parking Calculator").WebEdit("EntryDate").Set datatable.Value("E_date")
	Browser("Parking Calculator").Page("Parking Calculator_2").WebRadioGroup("ExitTimeAMPM").Select datatable.Value("AM_PM1")
	Browser("Parking Calculator").Page("Parking Calculator").WebEdit("ExitTime").Set datatable.Value("X_time")
	Browser("Parking Calculator").Page("Parking Calculator").WebEdit("ExitDate").Set datatable.Value("X_date")
	Browser("Parking Calculator").Page("Parking Calculator").WebButton("Calculate").Click
	Data = Browser("Parking Calculator").Page("Parking Calculator_2").WebTable("Choose a Lot").GetCellData(4,2)
	arr = split(Data,"        ")  
	datatable.Value("Cost") =  trim(arr(1))
	datatable.Value("Time") =  trim(arr(0))
	E_time = timer
	TT_time = E_time - S_time
	If i = j Then
		call report("Step:- "&i,"Calculate the parking price:- "&trim(arr(1)),"PASS",Time,Date,TT_time)
	End If
	j = j + 1
Next
