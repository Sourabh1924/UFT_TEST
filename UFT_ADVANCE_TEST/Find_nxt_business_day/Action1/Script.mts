'Find the next business date

Buss_date = #11-12-2016#
Date_ =  weekdayname(weekday(Buss_date))
   If mid(Date_,1,3) = "Sat" Then
   	     Find = Cdate(Buss_date) + 2
   	     print Find
   ElseIf mid(Date_,1,3) = "Fri" Then
         Find = Cdate(Buss_date) + 3
   	     print Find
   else
         Find = Cdate(Buss_date) + 1
   	     print Find
   End If

date_ = replace(Date,"#","")
Date_ = split(date_,"-")
strYesDate = Cstr(Date - cint(trim(Date_(0))))

'=======================================================================================
'=======================================================================================
'Find the age by date of birth

strEvalDate = Cstr(CDate(strEvalDate))
Dat = datediff("yyyy",#11-24-1991#,date)
print Dat
'               or
dateofbirth ="24-11-1991"
print datediff("yyyy", dateofbirth ,now)

'=======================================================================================
'=======================================================================================
'Elpaso task find start and stop date

Dim Date_
Date_ = "11-15-2016"
Call Date_start(Date_)
Function Date_start(Date_)

  'Convert into date
  SDate_ = cdate(Date_)
  
  'Find week date name
  Week_date_name =  weekdayname(weekday(SDate_))
      
      'If current date
      If Date = SDate_ Then
           print "You can't use current date"
           Date_ = cdate(SDate_) + 1
           'Function call
           call Date_start(Date_)
     
      else
           
               'If Week date name is saturday
           		If Week_date_name = "Saturday" Then
           			print "You can't use current date"
                	SDate_ = cdate(SDate_) + 2
                	'Function call
                	call Date_stop(SDate_)
           		
           		'If week date name is Sunday     
           		ElseIf Week_date_name = "Sunday" Then
           			print "You can't use current date"
                	SDate_ = cdate(SDate_) + 1
                	'Function call
                	call Date_stop(SDate_)              
           		
           		'When enter day is not weekend date 
           		else
                	print "Start date is correct"
                	print SDate_ &" "& Week_date_name
                	'Function call
                	call Date_stop(SDate_)
           		End If
           		
     End If
     
End Function

Function Date_stop(Date_)
        
      For i = 45 To 50 Step 1     	         
		 Date_2 = cdate(Date_) + i	 
		 Date1 =  weekdayname(weekday(Cdate(Date_2)))		 		      
		     If Date1 = "Saturday" Then
		         Date2 = Date_2 + 2
				 Exit for 
        	 elseif Date1 = "Sunday" Then
        	     Date2 = Date_2 + 1 
				 Exit for        	     
        	 else
                  print "Stop date is correct"                 
                  Exit for 
		     End If			     
	   Next
	
End Function
'=======================================================================================
'=======================================================================================



Date_give = "10-5-2016"
Call Date_check(Date_give,Strerror)


Function Date_check(Byval Date_,Byref Strerror)
If Date_ = "" Then
	Strerror = "Date is Empty"
Exit function	
End If
Date_ = split(Date_,"-/")
    For i = 0 To ubound(date_) Step 1 
  		Date_len = len(date_(trim(i)))
			If Date_len = 1 Then
				Corr_date = "0" + date_(trim(i))   
			else
        		Corr_date = date_(trim(i))
			End If
	Next

End Function


print day(date)