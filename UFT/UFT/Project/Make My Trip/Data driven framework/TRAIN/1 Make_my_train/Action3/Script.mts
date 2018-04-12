wait 5
'***************************************STEP FOR CLICK FIRST TRAIN*************************************************

Set ocollection = Description.Create                          'object create
ocollection("micclass").value = "Image"                       'value 1 to identifi that object
ocollection("image type").value = "Image Link"                'value 1 to identifi that object
ocollection("alt").value = "Book"                             'value 1 to identifi that object
Set ocollection=Browser("MakeMyTrip, India's No").Page("Book Bilaspur to Nagpur").ChildObjects(ocollection)
var=ocollection.count-1
var1=var-1
var2=var-var1
     For i = 0 To ocollection.count-1 
            a=ocollection(i).getroproperty("alt")
            If var2=i Then
                 ocollection(i).click     
     Exit for            
            End If
     next

'**************************************************STEP FOR ADD PASSENGER*************************************************

If Browser("MakeMyTrip, India's No").Page("Book Bilaspur to Nagpur").WebList("noOfAdult").Exist Then
   Browser("MakeMyTrip, India's No").Page("Book Bilaspur to Nagpur").WebList("noOfAdult").Select datatable.Value("Adult_number","BOOK")	

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-6","Click button.","Select number of adult.","Selected number of adult will show.","PASS",time,date)
         reporter.ReportEvent micPass,"Select number of adult.","Selected number of adult will show."

     	'****************************************************************************************************************************************************************************

else

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-6","Click button.","Select number of adult.","Selected number of adult is not showing.","FAIL",time,date)
         reporter.ReportEvent micPass,"Select number of adult.","Selected number of adult is not showing."

     	'****************************************************************************************************************************************************************************

Exittest
End If
 @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Book Bilaspur to Nagpur").WebList("noOfAdult")_;_script infofile_;_ZIP::ssf22.xml_;_
'******************************************STEP FOR CLICK BUTTON************************************* 
 
If Browser("MakeMyTrip, India's No").Page("Book Bilaspur to Nagpur").Image("Continue").Exist Then
   Browser("MakeMyTrip, India's No").Page("Book Bilaspur to Nagpur").Image("Continue").Click

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-7","Click button.","Click on continue button.","Person detail page will open.","PASS",time,date)
         reporter.ReportEvent micPass,"Click on continue button.","Person detail page will open."  

     	'****************************************************************************************************************************************************************************

else

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-7","Click button.","Click on continue button.","Person detail page is not open.","FAIL",time,date)
         reporter.ReportEvent micPass,"Click on continue button.","Person detail page is not open."  

     	'****************************************************************************************************************************************************************************

Exittest
End If
 @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Book Bilaspur to Nagpur").Image("Continue")_;_script infofile_;_ZIP::ssf24.xml_;_
'******************************************STEP FOR TYPE PASSENGER NAME*************************************

If Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebEdit("adultsOnward[0].name").Exist Then
   Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebEdit("adultsOnward[0].name").Set datatable.Value("name","BOOK")	

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-8","Type name.","Type the passenger name.","Passenger name will show.","PASS",time,date)
         reporter.ReportEvent micPass,"Type the passenger name.","Passenger name will show."  

     	'****************************************************************************************************************************************************************************

else

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-8","Type name.","Type the passenger name.","Passenger name is not showing.","FAIL",time,date)
         reporter.ReportEvent micPass,"Type the passenger name.","Passenger name is not showing."  

     	'****************************************************************************************************************************************************************************

Exittest
End If @@ hightlight id_;_1377074_;_script infofile_;_ZIP::ssf25.xml_;_

'******************************************STEP FOR TYPE PASSENGER GENDER*************************************

If Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].sex").Exist Then
   Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].sex").Select datatable.Value("sex","BOOK")	

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-9","Select gender.","Select passenger gender.","Passenger gender will show.","PASS",time,date)
         reporter.ReportEvent micPass,"Select passenger gender.","Passenger gender will show."

     	'****************************************************************************************************************************************************************************

else

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-9","Select gender.","Select passenger gender.","Passenger gender is not selected.","FAIL",time,date)
         reporter.ReportEvent micPass,"Select passenger gender.","Passenger gender is not selected."

     	'****************************************************************************************************************************************************************************

Exittest
End If
 @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].sex")_;_script infofile_;_ZIP::ssf27.xml_;_
'******************************************STEP FOR TYPE PASSENGER AGE************************************* 
 
If Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].age").Exist Then
   Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].age").Select datatable.Value("age","BOOK")	

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-10","Select age.","Select passenger age.","Passenger age will show.","PASS",time,date)
         reporter.ReportEvent micPass,"Select passenger age.","Passenger age will show."

     	'****************************************************************************************************************************************************************************

else

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-10","Select age.","Select passenger age.","Passenger age is not selected.","FAIL",time,date)
         reporter.ReportEvent micPass,"Select passenger age.","Passenger age is not selected."

     	'****************************************************************************************************************************************************************************

Exittest
End If 

'******************************************STEP FOR GIVE BERTH PERFERENCE*************************************

If Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].berthPref").Exist Then
   Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].berthPref").Select datatable.Value("berth","BOOK")	

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-11","Select berth type.","Select berth perference.","Selected berth will show.","PASS",time,date)
         reporter.ReportEvent micPass,"Select berth perference.","Selected berth will show."  

     	'****************************************************************************************************************************************************************************

else

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-11","Select berth type.","Select berth perference.","Selected berth is not present.","FAIL",time,date)
         reporter.ReportEvent micPass,"Select berth perference.","Selected berth is not present."  

     	'****************************************************************************************************************************************************************************

Exittest
End If @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].age")_;_script infofile_;_ZIP::ssf28.xml_;_
 @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].berthPref")_;_script infofile_;_ZIP::ssf29.xml_;_
'******************************************STEP FOR TYPE PASSENGER EMAIL ID************************************* 
 
If Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebEdit("emailId").Exist Then
   Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebEdit("emailId").Set datatable.Value("Email","BOOK")	

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-12","Type Email.","Enter Email address.","Email address will show.","PASS",time,date)
         reporter.ReportEvent micPass,"Enter Email address.","Email address will show."  

     	'****************************************************************************************************************************************************************************

else

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-12","Type Email.","Enter Email address.","Email address is not present.","FAIL",time,date)
         reporter.ReportEvent micPass,"Enter Email address.","Email address is not present."  

     	'****************************************************************************************************************************************************************************

Exittest
End If 
 @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebEdit("emailId")_;_script infofile_;_ZIP::ssf30.xml_;_
'******************************************STEP FOR TYPE PASSENGER PH NUMBER************************************* 
 
If Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebEdit("mobileNumber").Exist Then
   Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebEdit("mobileNumber").Set datatable.Value("ph_number","BOOK")	

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-13","Type mobile number.","Enter mobile number.","Mobile number will show.","PASS",time,date)
         reporter.ReportEvent micPass,"Enter mobile number.","Mobile number will show."  

     	'****************************************************************************************************************************************************************************

else

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-13","Type mobile number.","Enter mobile number.","Mobile number is not showing.","FAIL",time,date)
         reporter.ReportEvent micPass,"Enter mobile number.","Mobile number is not showing."  

     	'****************************************************************************************************************************************************************************

Exittest
End If 
 @@ hightlight id_;_Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebEdit("mobileNumber")_;_script infofile_;_ZIP::ssf31.xml_;_
'******************************************STEP FOR TYPE PASSENGER COUNTRY************************************* 

If Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].passengerNatio").Exist Then
   Browser("MakeMyTrip, India's No").Page("Railway Reservation |").WebList("adultsOnward[0].passengerNatio").select datatable.Value("country","BOOK")

       '****************************************************************************************************************************************************************************
          	
         Call report("Step-14","Select country.","Select your country.","Country will select.","PASS",time,date)
         reporter.ReportEvent micPass,"Select your country.","Country will select."

     	'****************************************************************************************************************************************************************************

else

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-14","Select country.","Select your country.","Country is not select.","PASS",time,date)
         reporter.ReportEvent micPass,"Select your country.","Country is not select."

     	'****************************************************************************************************************************************************************************

Exittest
End If 

'******************************************STEP FOR CLICK BUTTON************************************* 
If Browser("MakeMyTrip, India's No").Page("Railway Reservation |").Image("Submit").Exist Then
   Browser("MakeMyTrip, India's No").Page("Railway Reservation |").Image("Submit").Click	

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-15","Click on Submit button.","IRCTC window will open.","IRCTC window is open.","PASS",time,date)
         reporter.ReportEvent micPass,"IRCTC window will open.","IRCTC window is open."  

     	'****************************************************************************************************************************************************************************

else

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-15","Click on Submit button.","IRCTC window will open.","IRCTC window is not open.","FAIL",time,date)
         reporter.ReportEvent micPass,"IRCTC window will open.","IRCTC window is not open."  

     	'****************************************************************************************************************************************************************************

Exittest
End If 
On error goto 0