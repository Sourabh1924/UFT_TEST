Payment_type = datatable.Value("Payment_type","4_Payment")
Bank = datatable.Value("Bank","4_Payment")
Bank = lcase(Bank)
'===================================================================Payment=============================================================================
'=======================================================================================================================================================
Services.StartTransaction "Payment"
S_time = timer

If Browser("Jet Airways Booking Payment_2").Page("Jet Airways Booking Payment").Frame("ifr").WebElement("netBankingTab").Exist Then
   Browser("Jet Airways Booking Payment_2").Page("Jet Airways Booking Payment").Frame("ifr").WebElement("netBankingTab").Click	
else
     
     '''''''''''''Reporter''''''''''
     call ffail("Step18","Payment_type is not selected")
     exittest
     '''''''''''''''''''''''''''''''     
     
End If

If Browser("Jet Airways Booking Payment_2").Page("Jet Airways Booking Payment").Frame("ifr").WebElement("html tag:=SPAN","Class:="&Bank&" netBankingImgUrl").Exist Then
   Browser("Jet Airways Booking Payment_2").Page("Jet Airways Booking Payment").Frame("ifr").WebElement("html tag:=SPAN","Class:="&Bank&" netBankingImgUrl").Click
else

     '''''''''''''Reporter''''''''''
     call ffail("Step19","Bank is not selected")
     exittest
     '''''''''''''''''''''''''''''''

End If
E_time = timer
TT_time = E_time - S_time
Services.EndTransaction "Payment"

'''''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''
call report("Step_6","Payment succesfully","PASS",Time,Date,TT_time)
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'=======================================================================================================================================================
'=======================================================================================================================================================

'=======================================================Zip_the_file==================================================================================
'=======================================================================================================================================================
 TargetZipFileName = "Jetflight"
 call Zipfile(TargetZipFileName)
'=======================================================================================================================================================
'=======================================================================================================================================================
