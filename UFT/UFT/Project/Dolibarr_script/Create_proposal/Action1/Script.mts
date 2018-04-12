Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("username").Set datatable.Value("Username","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("username")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("password").Set datatable.Value("Password","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("password")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebButton("Connection").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebButton("Connection")_;_script infofile_;_ZIP::ssf25.xml_;_

Set object = Description.Create
object("micclass").value = "Link"
object("html tag").value = "A"
Set object=Browser("Login @ 3.9.0").Page("Home area - Dolibarr 3.9.0").ChildObjects(object)
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("text")
        D_link1=trim(D_link)
          If D_link1=datatable.Value("Link","Action1") Then
          	 object(i).click
    Exit for	 
          End If          
    next
 @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Home area - Dolibarr 3.9.0").Link("Third parties")_;_script infofile_;_ZIP::ssf26.xml_;_
Set object = Description.Create
object("micclass").value = "Link"
object("html tag").value = "A"
Set object=Browser("Login @ 3.9.0").Page("Home area - Dolibarr 3.9.0").ChildObjects(object)
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("text")
        D_link1=trim(D_link)
          If D_link1=datatable.Value("Company","Action1") Then
          	 object(i).click
          End If          
    next 
 @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").Link("Nokia")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("Login @ 3.9.0").Page("Nokia").Link("Prospect/Customer").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Nokia").Link("Prospect/Customer")_;_script infofile_;_ZIP::ssf29.xml_;_
Browser("Login @ 3.9.0").Page("Nokia_2").Link("Create proposal").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Nokia 2").Link("Create proposal")_;_script infofile_;_ZIP::ssf30.xml_;_
Browser("Login @ 3.9.0").Page("Commercial proposal").WebEdit("ref_client").Set datatable.Value("Client_ref","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Commercial proposal").WebEdit("ref client")_;_script infofile_;_ZIP::ssf31.xml_;_
Browser("Login @ 3.9.0").Page("Commercial proposal").WebButton("WebButton").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Commercial proposal").WebButton("WebButton")_;_script infofile_;_ZIP::ssf32.xml_;_

'find month

idate=datatable.Value("D_date","Action1")                                                                                                 
idatevalue=Split(idate,"/")                                                                                                        
idateval=Trim(idatevalue(0))
f=MonthName(idateval)
   For i = 1 To 12 Step 1   
       a=Browser("Login @ 3.9.0").Page("Commercial proposal_6").WebElement("X").GetROProperty("innertext")
       b=len(a)
       u=instrrev(a,",")
       sou=u-b
       e=left(a,u-1)	
 	      If f=e Then
   Exit for
          else
               Browser("Login @ 3.9.0").Page("Commercial proposal_6").WebElement("X_2").Click            
     	  End If
   Next


'find year

idate=datatable.Value("D_date","Action1")                                                                                                 
idatevalue=Split(idate,"/")                                                                                                        
idateval=Trim(idatevalue(2))
f=idateval
   For i = 1 To 3 Step 1   
       a=Browser("Login @ 3.9.0").Page("Commercial proposal_6").WebElement("X").GetROProperty("innertext")
         do
           u=instr(a,",")
           a=mid(a,u+1)
         Loop until u=0
           a=trim(a)
           print a
   	          If f=a Then
   Exit for
              else
                   Browser("Login @ 3.9.0").Page("Commercial proposal_6").WebElement("X_3").Click            
     	      End If
   Next

'click on date

Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "TD"
Set object=Browser("Login @ 3.9.0").Page("Commercial proposal").ChildObjects(object)  
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("innertext")
        print D_link
        idate=datatable.Value("D_date","Action1")                                                                                                 
        idatevalue=Split(idate,"/")                                                                                                        
        idateval=Trim(idatevalue(1)) 
          If D_link=idateval Then
          	 object(i).click
    Exit for      	 
          End If          
    next 

Browser("Login @ 3.9.0").Page("Commercial proposal").WebList("mode_reglement_id").Select datatable.Value("Payment_mode","Action1")
Browser("Login @ 3.9.0").Page("Commercial proposal").WebList("demand_reason_id").Select datatable.Value("Source","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Commercial proposal").WebList("demand reason id")_;_script infofile_;_ZIP::ssf35.xml_;_
Browser("Login @ 3.9.0").Page("Commercial proposal").WebList("availability_id").Select datatable.Value("Delay","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Commercial proposal").WebList("availability id")_;_script infofile_;_ZIP::ssf36.xml_;_
Browser("Login @ 3.9.0").Page("Commercial proposal").WebList("shipping_method_id").Select datatable.Value("Method","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Commercial proposal").WebList("shipping method id")_;_script infofile_;_ZIP::ssf37.xml_;_
Browser("Login @ 3.9.0").Page("Commercial proposal").WebButton("WebButton_2").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Commercial proposal").WebButton("WebButton 2")_;_script infofile_;_ZIP::ssf38.xml_;_

'find month

idate=datatable.Value("R_date","Action1")                                                                                                 
idatevalue=Split(idate,"/")                                                                                                        
idateval=Trim(idatevalue(0))
f=MonthName(idateval)
   For i = 1 To 12 Step 1   
       a=Browser("Login @ 3.9.0").Page("Commercial proposal_6").WebElement("X").GetROProperty("innertext")
       b=len(a)
       u=instrrev(a,",")
       sou=u-b
       e=left(a,u-1)	
 	      If f=e Then
   Exit for
          else
               Browser("Login @ 3.9.0").Page("Commercial proposal_6").WebElement("X_2").Click            
     	  End If
   Next

'find year

idate=datatable.Value("R_date","Action1")                                                                                                 
idatevalue=Split(idate,"/")                                                                                                        
idateval=Trim(idatevalue(2))
f=idateval
   For i = 1 To 3 Step 1   
       a=Browser("Login @ 3.9.0").Page("Commercial proposal_6").WebElement("X").GetROProperty("innertext")
         do
           u=instr(a,",")
           a=mid(a,u+1)
         Loop until u=0
           a=trim(a)
           print a
   	          If f=a Then
   Exit for
              else
                   Browser("Login @ 3.9.0").Page("Commercial proposal_6").WebElement("X_3").Click            
     	      End If
   Next
   
Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "TD"
Set object=Browser("Login @ 3.9.0").Page("Commercial proposal").ChildObjects(object)  
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("innertext")
        print D_link
        idate=datatable.Value("R_date","Action1")                                                                                                 
        idatevalue=Split(idate,"/")                                                                                                        
        idateval=Trim(idatevalue(1)) 
          If D_link=idateval Then
          	 object(i).click
    Exit for      	 
          End If          
    next 
Browser("Login @ 3.9.0").Page("Commercial proposal").WebButton("Create draft").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Commercial proposal").WebButton("Create draft")_;_script infofile_;_ZIP::ssf40.xml_;_
Browser("Login @ 3.9.0").Page("Commercial proposal_2").WebRadioGroup("prod_entry_mode").Select "predef"
Browser("Login @ 3.9.0").Page("Commercial proposal_2").WebList("idprod").Select datatable.Value("Product","Action1")

Set object = Description.Create
object("micclass").value = "WebList" 
object("width").value = "359"
object("class").value = "flat"
Set object=Browser("Login @ 3.9.0").Page("Commercial proposal_2").ChildObjects(object)   
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("all items")
        s=split(D_link,";")
          For j = 0 To UBound(s)
          	  print s(j)
          	  If s(j)=datatable.Value("Product","Action1") Then
          	        object(j).click	
          	  End If
          	  
          Next
                
    next 


Browser("Login @ 3.9.0").Page("Commercial proposal_2").WebButton("Add").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Commercial proposal 2").WebButton("Add")_;_script infofile_;_ZIP::ssf43.xml_;_
Browser("Login @ 3.9.0").Page("Commercial proposal_3").Link("Validate").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Commercial proposal 3").Link("Validate")_;_script infofile_;_ZIP::ssf44.xml_;_
Browser("Login @ 3.9.0").Page("Commercial proposal_4").WebButton("Yes").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Commercial proposal 4").WebButton("Yes")_;_script infofile_;_ZIP::ssf45.xml_;_