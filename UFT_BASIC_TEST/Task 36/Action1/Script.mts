' Show next working day.

a=inputbox ("enter the date")
b=weekday(a)

If b<=5 Then
b=b+1
sou=weekdayname(b)
msgbox sou

elseIf b=6 Then
b=b-4
sou=weekdayname(b)
msgbox sou

ElseIf b=7 Then
b=b-5
sou=weekdayname(b)
msgbox sou
End if
