'*************************************STEP FOR TYPE FIRST NAME************************************************************

If Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tFirstName1").Exist(10) Then
   Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tFirstName1").Set datatable.Value("Fname","DETAIL_PART")

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-12","Type name1","Type the First name.","First name is show.","PASS",time,date)
         reporter.ReportEvent micPass,"Type the First name.","First name is show."

     	 '****************************************************************************************************************************************************************************

else

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-12","Type name1","Type the First name.","First name is not typed.","FAIL",time,date)
         reporter.ReportEvent micFail,"Type the First name.","First name is not typed."

     	 '****************************************************************************************************************************************************************************

exittest
End If
 @@ hightlight id_;_Browser("MakeMyTrip, India's No 2").Page("Flights Traveller").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf105.xml_;_
'*************************************STEP FOR TYPE LAST NAME************************************************************ 
 
if Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tLastName1").Exist then 
   Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tLastName1").Set datatable.Value("Lname","DETAIL_PART") @@ hightlight id_;_Browser("MakeMyTrip, India's No 2").Page("Flights Traveller").WebEdit("WebEdit 2")_;_script infofile_;_ZIP::ssf106.xml_;_

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-13","Type name1","Type the Last name.","Last name is show.","PASS",time,date)
         reporter.ReportEvent micPass,"Type the Last name.","Last name is show."

     	 '****************************************************************************************************************************************************************************

else

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-13","Type name1","Type the Last name.","Last name is not typed.","FAIL",time,date)
         reporter.ReportEvent micFail,"Type the Last name.","Last name is is not typed."

     	 '****************************************************************************************************************************************************************************

exittest
End if

'*************************************STEP FOR SELECT THE GENDER************************************************************ 

If Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebList("sTitle1").Exist Then
   Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebList("sTitle1").Select datatable.Value("Gender","DETAIL_PART")
           
         '****************************************************************************************************************************************************************************
          	
         Call report("Step-14","Select Gender","Select the Gender.","Selected Gender will highlight.","PASS",time,date)
         reporter.ReportEvent micPass,"Select the Gender.","Selected Gender will highlight."

     	 '****************************************************************************************************************************************************************************
 @@ hightlight id_;_Browser("MakeMyTrip, India's No 2").Page("Flights Traveller").Link("MALE")_;_script infofile_;_ZIP::ssf107.xml_;_
else

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-14","Select Gender","Select the Gender.","Selected Gender will not highlight.","FAIL",time,date)
         reporter.ReportEvent micFail,"Select the Gender.","Selected Gender will not highlight."

     	 '****************************************************************************************************************************************************************************

exittest
End If  

'*************************************STEP FOR SELECT AGE************************************************************ 

If Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("sAge1").Exist Then
   Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("sAge1").Set datatable.Value("Age","DETAIL_PART")	

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-15","Type age","Type the age.","Age will show.","PASS",time,date)
         reporter.ReportEvent micPass,"Type the age.","Age will show."

     	 '****************************************************************************************************************************************************************************

else

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-15","Type age","Type the age.","Age is not typed.","FAIL",time,date)
         reporter.ReportEvent micFail,"Type the age.","Age is not typed."

     	 '****************************************************************************************************************************************************************************

exittest
End If

'*************************************STEP FOR TYPE THE PH. NUMBER************************************************************ 

If Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("txtMobile").Exist Then
     Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("txtMobile").Set datatable.Value("Ph_number","DETAIL_PART")

             '****************************************************************************************************************************************************************************
          	
              Call report("Step-16","Type Ph number","Type your Ph number.","Ph number will show.","PASS",time,date)
              reporter.ReportEvent micPass,"Type your Ph number.","Ph number will show."

     	      '****************************************************************************************************************************************************************************

else

              '****************************************************************************************************************************************************************************
          	
              Call report("Step-16","Type Ph number","Type your Ph number.","Ph number is not show.","FAIL",time,date)
              reporter.ReportEvent micFail,"Type your Ph number.","Ph number is not show."

     	      '****************************************************************************************************************************************************************************

exittest
End If

'*************************************STEP FOR TYPE FIRST NAME************************************************************

If Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tFirstName2").Exist Then
   datatable.GetSheet("DETAIL_PART").SetCurrentRow(2)
   Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tFirstName2").Set datatable.Value("Fname","DETAIL_PART")

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-17","Type name2","Type the First name.","First name is show.","PASS",time,date)
         reporter.ReportEvent micPass,"Type the First name.","First name is show."

     	 '****************************************************************************************************************************************************************************

else

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-17","Type name1","Type the First name.","First name is not typed.","FAIL",time,date)
         reporter.ReportEvent micFail,"Type the First name.","First name is not typed."

     	 '****************************************************************************************************************************************************************************

exittest
End If
 @@ hightlight id_;_Browser("MakeMyTrip, India's No 2").Page("Flights Traveller").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf105.xml_;_
'*************************************STEP FOR TYPE LAST NAME************************************************************  
 
if Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tLastName2").Exist then 
   datatable.GetSheet("DETAIL_PART").SetCurrentRow(2)
   Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tLastName2").Set datatable.Value("Lname","DETAIL_PART") @@ hightlight id_;_Browser("MakeMyTrip, India's No 2").Page("Flights Traveller").WebEdit("WebEdit 2")_;_script infofile_;_ZIP::ssf106.xml_;_

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-18","Type name2","Type the Last name.","Last name is show.","PASS",time,date)
         reporter.ReportEvent micPass,"Type the Last name.","Last name is show."

     	 '****************************************************************************************************************************************************************************

else

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-18","Type name1","Type the Last name.","Last name is not typed.","FAIL",time,date)
         reporter.ReportEvent micFail,"Type the Last name.","Last name is is not typed."

     	 '****************************************************************************************************************************************************************************

exittest
End if

'*************************************STEP FOR SELECT THE GENDER************************************************************ 

If Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebList("sTitle2").Exist Then
	Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebList("sTitle2").Select datatable.Value("Gender","DETAIL_PART")

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-19","Select Gender","Select the Gender.","Selected Gender will highlight.","PASS",time,date)
         reporter.ReportEvent micPass,"Select the Gender.","Selected Gender will highlight."

     	 '****************************************************************************************************************************************************************************

else

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-19","Select Gender","Select the Gender.","Selected Gender will not highlight.","FAIL",time,date)
         reporter.ReportEvent micFail,"Select the Gender.","Selected Gender will not highlight."

     	 '****************************************************************************************************************************************************************************

exittest
End If

'*************************************STEP FOR SELECT AGE************************************************************ 

If Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("sAge2").Exist Then
   Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("sAge2").Set datatable.Value("Age","DETAIL_PART")	

         '****************************************************************************************************************************************************************************
          	
          Call report("Step-20","Type age","Type the age.","Age will show.","PASS",time,date)
          reporter.ReportEvent micPass,"Type the age.","Age will show."

     	 '****************************************************************************************************************************************************************************

else

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-20","Type age","Type the age.","Age is not typed.","FAIL",time,date)
         reporter.ReportEvent micFail,"Type the age.","Age is not typed."

     	 '****************************************************************************************************************************************************************************

exittest
End If

'*******************************************STEP FOR CLICK ON I AGREE CHECK BOX**********************************************

If Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebCheckBox("aigTerms").Exist Then
   Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebCheckBox("aigTerms").Set "ON"

              '****************************************************************************************************************************************************************************
          	
              Call report("Step-21","Check the box","Check the I agree box.","Box must be check.","PASS",time,date)
              reporter.ReportEvent micPass,"Check the I agree box.","Box must be check."

     	      '****************************************************************************************************************************************************************************

else

              '****************************************************************************************************************************************************************************
          	
              Call report("Step-21","Check the box","Check the I agree box.","Box is not checked.","FAIL",time,date)
              reporter.ReportEvent micFail,"Check the I agree box.","Box is not checked."

     	      '****************************************************************************************************************************************************************************

exittest
End If

'*******************************************STEP FOR CLICK ON CONTINUE BUTTON**********************************************

If Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").Link("Continue").Exist Then
   Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").Link("Continue").Click
              
              '****************************************************************************************************************************************************************************
          	
               Call report("Step-22","Click on button","Click on Continue button.","It will redirect to travel service.","PASS",time,date)
               reporter.ReportEvent micPass,"Click on Continue button.","It will redirect to travel service."

     	      '****************************************************************************************************************************************************************************

else

              '****************************************************************************************************************************************************************************
          	
               Call report("Step-22","Click on button","Click on Continue button.","Button is not present.","FAIL",time,date)
               reporter.ReportEvent micFail,"Click on Continue button.","Button is not present."

     	      '****************************************************************************************************************************************************************************

exittest
End If

'*******************************************STEP FOR CLICK ON CONTINUE FOR PAYMENT BUTTON**********************************************

If Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").Link("Continue to Payment").Exist(10) Then
   Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").Link("Continue to Payment").Click	

              '****************************************************************************************************************************************************************************
          	
               Call report("Step-23","Click on button","Click on Continue button.","It will redirect to payment page.","PASS",time,date)
               reporter.ReportEvent micPass,"Click on Continue button.","It will redirect to payment page."

     	      '****************************************************************************************************************************************************************************

else

              '****************************************************************************************************************************************************************************
          	
               Call report("Step-23","Click on button","Click on Continue button.","Button is not present.","FAIL",time,date)
               reporter.ReportEvent micFail,"Click on Continue button.","Button is not present."

     	      '****************************************************************************************************************************************************************************

exittest
End If
On error goto 0