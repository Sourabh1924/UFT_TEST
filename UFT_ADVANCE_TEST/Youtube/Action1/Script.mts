max = "30"
Search = "automation testing"
Browser("YouTube").Page("YouTube").WebEdit("Search").Set Search
Browser("YouTube_2").Page("YouTube").WebButton("Search").Click
Set obj = description.Create
obj("micclass").value = "Link"
obj("class").value = "yt-uix-sessionlink  yt-ui-ellipsis yt-ui-ellipsis-2       spf-link "
obj("html tag").value = "A"
Set Link_obj = Browser("YouTube_2").Page("YouTube").ChildObjects(obj)
For i = 1 To Link_obj.count Step 1
    If i = "5" Then
       Link_obj(i).click	
    End If	
Next
Browser("YouTube").Page("QTP Tutorial 1 Testing").Object(
For i = 1 To 6 Step 1
Set DeviceReplay = CreateObject("Mercury.DeviceReplay")
abs_x = Browser("YouTube").Page("QTP Tutorial 1 Testing").WebElement("Seek slider").GetROProperty("abs_x")
abs_y = Browser("YouTube").Page("QTP Tutorial 1 Testing").WebElement("Seek slider").GetROProperty("abs_y")
DeviceReplay.MouseClick abs_x+max,abs_y,RIGHT_MOUSE_BUTTON 	
max = max + 100
Next
