Set oDesc = Description.Create()

' Retrieve HTML tag <A>
oDesc("html tag").Value = "A"

Set obj = Browser("title:=Google.*").Page("title:=Google.*").ChildObjects(oDesc)

Itemcount = obj.Count() 'get the number of  link in a page

For i=0 to Itemcount-1
    print (obj(i).GetROProperty("name"))
Next

