a=inputbox ("enter the date")
b=weekday(a)
msgbox b
If b<6 and b<>1 Then
	msgbox "working day"
Else
msgbox "not a working day"
End If
