SystemUtil.Run "iexplore","http://idc-vm-qtp11/dolibarr/"

'Enter Username and Password

Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("username").Set datatable.Value("Username","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("username")_;_script infofile_;_ZIP::ssf27.xml_;_
Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("password").Set datatable.Value("Password","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("password")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebButton("Connection").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebButton("Connection")_;_script infofile_;_ZIP::ssf29.xml_;_

'Click on third party link

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

'Create third party

Browser("Login @ 3.9.0").Page("Third parties").Link("New third party").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third parties").Link("New third party")_;_script infofile_;_ZIP::ssf31.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebEdit("name").Set datatable.Value("Customer","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebEdit("name")_;_script infofile_;_ZIP::ssf32.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebList("client").Select datatable.Value("Client","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebList("client")_;_script infofile_;_ZIP::ssf33.xml_;_
Browser("Login @ 3.9.0").Page("Samsung").WebList("fournisseur").Select "Yes"
Browser("Login @ 3.9.0").Page("Third party").WebEdit("code_client").Set datatable.Value("Client_code","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebEdit("code client")_;_script infofile_;_ZIP::ssf34.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebEdit("zipcode").Set datatable.Value("Zipcode","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebEdit("zipcode")_;_script infofile_;_ZIP::ssf35.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebEdit("town").Set datatable.Value("Town","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebEdit("town")_;_script infofile_;_ZIP::ssf36.xml_;_

'Select country
Browser("Login @ 3.9.0").Page("Samsung").Link("Link").Click
Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "DIV"
Set object=Browser("Login @ 3.9.0").Page("Samsung").ChildObjects(object)
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("innertext")
        D_link1=trim(D_link)
            If D_link1=datatable.Value("Country","Action1") Then
                object(i).click
    Exit for
            End If            
    next

'Select state

Browser("Login @ 3.9.0").Page("Samsung").Link("Link_2").Click
Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "DIV"
Set object=Browser("Login @ 3.9.0").Page("Samsung").ChildObjects(object)
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("innertext")
        D_link1=trim(D_link)
          If D_link1=datatable.Value("State","Action1") Then
             object(i).click
    Exit for
          End If            
    next  

Browser("Login @ 3.9.0").Page("Third party").WebEdit("email").Set datatable.Value("Email","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebEdit("email")_;_script infofile_;_ZIP::ssf37.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebEdit("phone").Set datatable.Value("Ph_number","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebEdit("phone")_;_script infofile_;_ZIP::ssf38.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebList("typent_id").Select datatable.Value("Company_type","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebList("typent id")_;_script infofile_;_ZIP::ssf39.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebList("effectif_id").Select datatable.Value("Staff","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebList("effectif id")_;_script infofile_;_ZIP::ssf40.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebEdit("capital").Set datatable.Value("Capital","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebEdit("capital")_;_script infofile_;_ZIP::ssf41.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebButton("Create third party").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebButton("Create third party")_;_script infofile_;_ZIP::ssf42.xml_;_
Browser("Login @ 3.9.0").Page("VIVO").Link("Prospect").Click

'Create order

Browser("Login @ 3.9.0").Page("Samsung_2").Link("Create order").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Samsung 2").Link("Create order")_;_script infofile_;_ZIP::ssf46.xml_;_
Browser("Login @ 3.9.0").Page("Order").WebEdit("ref_client").Set datatable.Value("Client_ref","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Order").WebEdit("ref client")_;_script infofile_;_ZIP::ssf47.xml_;_
Browser("Login @ 3.9.0").Page("Order").WebButton("WebButton").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Order").WebButton("WebButton")_;_script infofile_;_ZIP::ssf48.xml_;_

'Find month

idate=datatable.Value("D_date","Action1")                                                                                                 
idatevalue=Split(idate,"/")                                                                                                        
idateval=Trim(idatevalue(0))
f=MonthName(idateval)
    For i = 1 To 12 Step 1   
        a=Browser("Login @ 3.9.0").Page("Order card").WebElement("X_3").GetROProperty("innertext")
        b=len(a)
        u=instrrev(a,",")
        sou=u-b
        e=left(a,u-1)	
           If f=e Then
    Exit for
           else
                Browser("Login @ 3.9.0").Page("Order card").WebElement("X").Click            
           End If
    Next

'Find year

idate=datatable.Value("D_date","Action1")                                                                                                 
idatevalue=Split(idate,"/")                                                                                                        
idateval=Trim(idatevalue(2))
f=idateval
     For i = 1 To 3 Step 1   
         a=Browser("Login @ 3.9.0").Page("Order card").WebElement("X_3").GetROProperty("innertext")
            do
              u=instr(a,",")
              a=mid(a,u+1)
            Loop until u=0
         a=trim(a)
            If f=a Then
    Exit for
            else
                Browser("Login @ 3.9.0").Page("Order card").WebElement("X_2").Click
            End If
    Next

'Click on date

Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "TD"
Set object=Browser("Login @ 3.9.0").Page("Order").ChildObjects(object)  
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("innertext")
        idate=datatable.Value("D_date","Action1")                                                                                                 
        idatevalue=Split(idate,"/")                                                                                                        
        idateval=Trim(idatevalue(1)) 
          If D_link=idateval Then
             object(i).click
    Exit for      	 
          End If          
    next 

Browser("Login @ 3.9.0").Page("Order").WebList("cond_reglement_id").Select datatable.Value("Payment_dur","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Order").WebList("cond reglement id")_;_script infofile_;_ZIP::ssf52.xml_;_
Browser("Login @ 3.9.0").Page("Order").WebList("mode_reglement_id").Select datatable.Value("Payment_mode","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Order").WebList("mode reglement id")_;_script infofile_;_ZIP::ssf53.xml_;_
Browser("Login @ 3.9.0").Page("Order").WebList("shipping_method_id").Select datatable.Value("Method","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Order").WebList("shipping method id")_;_script infofile_;_ZIP::ssf54.xml_;_
Browser("Login @ 3.9.0").Page("Order").WebList("demand_reason_id").Select datatable.Value("Source","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Order").WebList("demand reason id")_;_script infofile_;_ZIP::ssf55.xml_;_
Browser("Login @ 3.9.0").Page("Order").WebButton("Create draft").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Order").WebButton("Create draft")_;_script infofile_;_ZIP::ssf56.xml_;_

'Select product for order

Browser("Login @ 3.9.0").Page("Order_2").WebRadioGroup("prod_entry_mode").Select "predef" @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Order 2").WebRadioGroup("prod entry mode")_;_script infofile_;_ZIP::ssf57.xml_;_
Browser("Login @ 3.9.0").Page("Order_2").WebList("idprod").Select datatable.Value("Product","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Order 2").WebList("idprod")_;_script infofile_;_ZIP::ssf58.xml_;_
Browser("Login @ 3.9.0").Page("Order_2").WebButton("Add").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Order 2").WebButton("Add")_;_script infofile_;_ZIP::ssf59.xml_;_
Browser("Login @ 3.9.0").Page("Order_3").Link("Validate").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Order 3").Link("Validate")_;_script infofile_;_ZIP::ssf60.xml_;_
Browser("Login @ 3.9.0").Page("Order_4").WebButton("Yes").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Order 4").WebButton("Yes")_;_script infofile_;_ZIP::ssf61.xml_;_

'Create invoice

Browser("Login @ 3.9.0").Page("Order_5").Link("Create Invoice").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Order 5").Link("Create Invoice")_;_script infofile_;_ZIP::ssf74.xml_;_
Browser("Login @ 3.9.0").Page("Invoice").WebRadioGroup("type").Select "3" @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Invoice").WebRadioGroup("type")_;_script infofile_;_ZIP::ssf75.xml_;_
Browser("Login @ 3.9.0").Page("Invoice").WebEdit("valuedeposit").Set datatable.Value("Amount","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Invoice").WebEdit("valuedeposit")_;_script infofile_;_ZIP::ssf76.xml_;_
Browser("Login @ 3.9.0").Page("Invoice").WebButton("WebButton").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Invoice").WebButton("WebButton")_;_script infofile_;_ZIP::ssf77.xml_;_

'Find month

idate=datatable.Value("D_date","Action1")                                                                                                 
idatevalue=Split(idate,"/")                                                                                                        
idateval=Trim(idatevalue(0))
f=MonthName(idateval)
     For i = 1 To 12 Step 1   
         a=Browser("Login @ 3.9.0").Page("Order card").WebElement("X_3").GetROProperty("innertext")
         b=len(a)
         u=instrrev(a,",")
         sou=u-b
         e=left(a,u-1)	
            If f=e Then
     Exit for
            else
               Browser("Login @ 3.9.0").Page("Order card").WebElement("X").Click            
            End If
     Next

'Find year

idate=datatable.Value("D_date","Action1")                                                                                                 
idatevalue=Split(idate,"/")                                                                                                        
idateval=Trim(idatevalue(2))
f=idateval
    For i = 1 To 3 Step 1   
        a=Browser("Login @ 3.9.0").Page("Order card").WebElement("X_3").GetROProperty("innertext")
          do
            u=instr(a,",")
            a=mid(a,u+1)
          Loop until u=0
        a=trim(a)
          If f=a Then
    Exit for
          else
             Browser("Login @ 3.9.0").Page("Order card").WebElement("X_2").Click
          End If
    Next

'Click on date

Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "TD"
Set object=Browser("Login @ 3.9.0").Page("Order").ChildObjects(object)  
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("innertext")
        idate=datatable.Value("D_date","Action1")                                                                                                 
        idatevalue=Split(idate,"/")                                                                                                        
        idateval=Trim(idatevalue(1)) 
          If D_link=idateval Then
             object(i).click
    Exit for      	 
          End If          
    next 

Browser("Login @ 3.9.0").Page("Invoice").WebList("fk_account").Select datatable.Value("Bank","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Invoice").WebList("fk account")_;_script infofile_;_ZIP::ssf79.xml_;_
Browser("Login @ 3.9.0").Page("Invoice").WebButton("Create draft").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Invoice").WebButton("Create draft")_;_script infofile_;_ZIP::ssf80.xml_;_

'Select product for invoice

Browser("Login @ 3.9.0").Page("Invoice_2").WebRadioGroup("prod_entry_mode").Select "predef" @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Invoice 2").WebRadioGroup("prod entry mode")_;_script infofile_;_ZIP::ssf81.xml_;_
Browser("Login @ 3.9.0").Page("Invoice_2").WebList("idprod").Select datatable.Value("Product","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Invoice 2").WebList("idprod")_;_script infofile_;_ZIP::ssf82.xml_;_
Browser("Login @ 3.9.0").Page("Invoice_2").WebButton("Add").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Invoice 2").WebButton("Add")_;_script infofile_;_ZIP::ssf83.xml_;_
Browser("Login @ 3.9.0").Page("Invoice_3").Link("Validate").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Invoice 3").Link("Validate")_;_script infofile_;_ZIP::ssf84.xml_;_
Browser("Login @ 3.9.0").Page("Invoice_4").WebButton("Yes").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Invoice 4").WebButton("Yes")_;_script infofile_;_ZIP::ssf85.xml_;_
environment.Value("Amount")=Browser("Login @ 3.9.0").Page("Invoice_7").WebTable("Payments").GetROProperty("text")

'Select  payment

Browser("Login @ 3.9.0").Page("Invoice_5").Link("Do payment").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Invoice 5").Link("Do payment")_;_script infofile_;_ZIP::ssf86.xml_;_
Browser("Login @ 3.9.0").Page("Dolibarr").WebButton("WebButton").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Dolibarr").WebButton("WebButton")_;_script infofile_;_ZIP::ssf87.xml_;_

'Find month

idate=datatable.Value("D_date","Action1")                                                                                                 
idatevalue=Split(idate,"/")                                                                                                        
idateval=Trim(idatevalue(0))
f=MonthName(idateval)
    For i = 1 To 12 Step 1   
        a=Browser("Login @ 3.9.0").Page("Dolibarr_4").WebElement("X").GetROProperty("innertext")
        b=len(a)
        u=instrrev(a,",")
        sou=u-b
        e=left(a,u-1)	
           If f=e Then
    Exit for
           else
               Browser("Login @ 3.9.0").Page("Dolibarr_4").WebElement("X_2").Click
           End If
    Next

'Find year

idate=datatable.Value("D_date","Action1")                                                                                                 
idatevalue=Split(idate,"/")                                                                                                        
idateval=Trim(idatevalue(2))
f=idateval
    For i = 1 To 3 Step 1   
        a=Browser("Login @ 3.9.0").Page("Dolibarr_4").WebElement("X").GetROProperty("innertext")
          do
            u=instr(a,",")
            a=mid(a,u+1)
          Loop until u=0
        a=trim(a)
          If f=a Then
    Exit for
          else
              Browser("Login @ 3.9.0").Page("Dolibarr_4").WebElement("X_3").Click
          End If
    Next

'Click on date

Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "TD"
Set object=Browser("Login @ 3.9.0").Page("Order").ChildObjects(object)  
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("innertext")
        idate=datatable.Value("D_date","Action1")                                                                                                 
        idatevalue=Split(idate,"/")                                                                                                        
        idateval=Trim(idatevalue(1)) 
          If D_link=idateval Then
             object(i).click
    Exit for      	 
          End If          
    next 

Browser("Login @ 3.9.0").Page("Dolibarr_3").WebList("paiementcode").Select datatable.Value("Payment_mode","Action1")
Browser("Login @ 3.9.0").Page("Dolibarr").WebEdit("num_paiement").Set datatable.Value("Ac_number","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Dolibarr").WebEdit("num paiement")_;_script infofile_;_ZIP::ssf89.xml_;_
Browser("Login @ 3.9.0").Page("Dolibarr").WebEdit("chqbank").Set datatable.Value("Bank","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Dolibarr").WebEdit("chqbank")_;_script infofile_;_ZIP::ssf90.xml_;_

amount=environment.Value("Amount")
  do
    u=instr(amount,":")
    amount=mid(amount,u+1)
  Loop until u=0
environment.Value("Amount")=amount
Browser("Login @ 3.9.0").Page("Dolibarr_2").WebEdit("amount_4").Set environment.Value("Amount")

Browser("Login @ 3.9.0").Page("Dolibarr").WebButton("Pay").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Dolibarr 2").WebButton("Pay")_;_script infofile_;_ZIP::ssf93.xml_;_
Browser("Login @ 3.9.0").Page("Dolibarr").WebButton("Validate").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Dolibarr 2").WebButton("Validate")_;_script infofile_;_ZIP::ssf94.xml_;_