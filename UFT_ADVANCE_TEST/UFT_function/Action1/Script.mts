''''Public and private function ''''
'==================================================================
Call calcu("Sourabh")

Private Function add(a,b)
	c= a + b
	print c
End Function

Function calcu(ccc)
    print ccc
	call add(10,10)
End Function

'==================================================================

'Class Comp
'   
'   Private modStrType
'   Private OS
' 
'   Public Property Let ComputerType(strType)
'      modStrType = strType
'   End Property
' 
'   Public Property Get ComputerType()
'      ComputerType = modStrType
'   End Property
' 
'   Public Property Set OperatingSystem(oObj)
'      Set OS = oObj
'   End Property
' 
'   Public Property Get OperatingSystem()
'      Set OperatingSystem = OS
'   End Property
' 
'End Class
'
'
Date_give = "1/05/2016"
Call Date_check(Date_give)


Function Date_check(Byval Date_)
	
Date_ = split(Date_,"/") or Date_ = split(Date_,"-/")
    For i = 0 To ubound(date_) Step 1 
  		Date_len = len(date_(trim(i)))
			If Date_len = 1 Then
				Corr_date = "0" + date_(trim(i))   
			else
        		Corr_date = date_(trim(i))
			End If
	Next

End Function


month_ = 01-11-2016"
month_ = cdate(month_)
For i = 1 To 31 Step 1
	month_ = month_ + 1
	day(month_)
	  If True Then
	  	
	  End If
Next
print day(date)
