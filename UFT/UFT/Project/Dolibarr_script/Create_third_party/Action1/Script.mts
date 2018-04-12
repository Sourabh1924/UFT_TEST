Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("username").Set datatable.Value("Username","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("username")_;_script infofile_;_ZIP::ssf46.xml_;_
Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("password").Set datatable.Value("Password","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebEdit("password")_;_script infofile_;_ZIP::ssf47.xml_;_
Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebButton("Connection").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Login @ 3.9.0").WebButton("Connection")_;_script infofile_;_ZIP::ssf48.xml_;_

Browser("Login @ 3.9.0").Page("Dolibarr").Link("Third parties").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Dolibarr").Link("Third parties")_;_script infofile_;_ZIP::ssf49.xml_;_
Browser("Login @ 3.9.0").Page("Third parties").Link("New third party").Click @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third parties").Link("New third party")_;_script infofile_;_ZIP::ssf50.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebEdit("name").Set datatable.Value("Company_name","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebEdit("name")_;_script infofile_;_ZIP::ssf51.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebList("client").Select datatable.Value("Client","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebList("client")_;_script infofile_;_ZIP::ssf52.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebEdit("code_client").Set datatable.Value("Client_code","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebEdit("code client")_;_script infofile_;_ZIP::ssf53.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebEdit("address").Set datatable.Value("Address","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebEdit("address")_;_script infofile_;_ZIP::ssf54.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebEdit("zipcode").Set datatable.Value("Zipcode","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebEdit("zipcode")_;_script infofile_;_ZIP::ssf55.xml_;_
Browser("Login @ 3.9.0").Page("Third party").WebEdit("town").Set datatable.Value("Town","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebEdit("town")_;_script infofile_;_ZIP::ssf56.xml_;_
Browser("Login @ 3.9.0").Page("Third party").Link("Link").Click

Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "DIV"
Set object=Browser("Login @ 3.9.0").Page("Third party").ChildObjects(object)
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("innertext")
        D_link1=trim(D_link)
          If D_link1=datatable.Value("Country","Action1") Then
          	object(i).click
    Exit for
          End If            
    next

Browser("Login @ 3.9.0").Page("Third party_2").Link("Link").Click
Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "DIV"
Set object=Browser("Login @ 3.9.0").Page("Third party_2").ChildObjects(object)
    For i = 0 To object.count-1
        D_link=object(i).getroproperty("innertext")
        D_link1=trim(D_link)
        print D_link1
          If D_link1=datatable.Value("Town","Action1") Then
          	object(i).click
    Exit for
          End If            
    next  
      @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf58.xml_;_
Browser("Login @ 3.9.0").Page("Third party_2").Link("Link").Click
Browser("Login @ 3.9.0").Page("Third party_2").WebEdit("email").Set datatable.Value("Email","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party 2").WebEdit("email")_;_script infofile_;_ZIP::ssf59.xml_;_
Browser("Login @ 3.9.0").Page("Third party_2").WebEdit("phone").Set datatable.Value("Phone","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party 2").WebEdit("phone")_;_script infofile_;_ZIP::ssf60.xml_;_
Browser("Login @ 3.9.0").Page("Third party_2").WebList("typent_id").Select datatable.Value("Company_type","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party 2").WebList("typent id")_;_script infofile_;_ZIP::ssf61.xml_;_
Browser("Login @ 3.9.0").Page("Third party_2").WebList("effectif_id").Select datatable.Value("Staff","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party 2").WebList("effectif id")_;_script infofile_;_ZIP::ssf62.xml_;_
Browser("Login @ 3.9.0").Page("Third party_2").WebEdit("capital").Set datatable.Value("Capital","Action1") @@ hightlight id_;_Browser("Login @ 3.9.0").Page("Third party 2").WebEdit("capital")_;_script infofile_;_ZIP::ssf63.xml_;_
Browser("Third party").Page("Third party").WebButton("Create third party").Click

Browser("Third party").Page("Third party").Image("Logout").Click