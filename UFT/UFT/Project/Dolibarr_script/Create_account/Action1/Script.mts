Browser("Login @ 3.9.0").Page("Login @ 3.9.0").Image("dolibarr_logo").Check CheckPoint("dolibarr_logo")
 @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Login @ 3.9.0").Image("dolibarr logo")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("username").Set datatable.Value("Username","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("username")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("password").Set datatable.Value("Password","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("password")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebButton("Connection").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebButton("Connection")_;_script infofile_;_ZIP::ssf3.xml_;_
 
Browser("Login @ 3.9.0").Page("Setup_2").Link("Users & Groups").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Setup 2").Link("Users & Groups")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Login @ 3.9.0").Page("Dolibarr").Link("New user").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Dolibarr").Link("New user")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Login @ 3.9.0").Page("User card").WebEdit("lastname").Set datatable.Value("L_name","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebEdit("lastname")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Login @ 3.9.0").Page("User card").WebEdit("firstname").Set datatable.Value("F_name","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebEdit("firstname")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Login @ 3.9.0").Page("User card").WebList("employee").Select datatable.Value("Employee","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebList("employee")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Login @ 3.9.0").Page("User card").WebEdit("job").Set datatable.Value("Job","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebEdit("job")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Login @ 3.9.0").Page("User card").WebList("gender").Select datatable.Value("Gender","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebList("gender")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Login @ 3.9.0").Page("User card").WebEdit("login").Set datatable.Value("Login","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebEdit("login")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Login @ 3.9.0").Page("User card").WebEdit("password").Set datatable.Value("L_password","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebEdit("password")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Login @ 3.9.0").Page("User card").WebEdit("address").Set datatable.Value("Address","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebEdit("address")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Login @ 3.9.0").Page("User card").WebEdit("zipcode").Set datatable.Value("Zipcode","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebEdit("zipcode")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Login @ 3.9.0").Page("User card").WebEdit("town").Set datatable.Value("Town","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebEdit("town")_;_script infofile_;_ZIP::ssf16.xml_;_

Browser("Login @ 3.9.0").Page("User card").Link("Link").Click
Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "DIV"
Set object=Browser("Login @ 3.9.0").Page("User card").ChildObjects(object)
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("innertext")
        D_link1=trim(D_link)
          If D_link1=datatable.Value("Country","Action1") Then
          	object(i).click
    Exit for
          End If            
    next
    
Browser("Login @ 3.9.0").Page("User card").Link("Link_2").Click
Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "DIV"
Set object=Browser("Login @ 3.9.0").Page("User card").ChildObjects(object)
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("innertext")
          If D_link1=datatable.Value("State","Action1") Then
          	object(i).click
    Exit for
          End If            
    next  

Browser("Login @ 3.9.0").Page("User card").WebEdit("office_phone").Set datatable.Value("P_number","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebEdit("office phone")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Login @ 3.9.0").Page("User card").WebEdit("user_mobile").Set datatable.Value("M_number","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebEdit("user mobile")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Login @ 3.9.0").Page("User card").WebEdit("email").Set datatable.Value("Email","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebEdit("email")_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Login @ 3.9.0").Page("User card").WebEdit("salary").Set datatable.Value("Salary","Action1")
Browser("Login @ 3.9.0").Page("User card").WebButton("Create user").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("User card").WebButton("Create user")_;_script infofile_;_ZIP::ssf22.xml_;_
 @@ hightlight id_;_393744_;_script infofile_;_ZIP::ssf24.xml_;_