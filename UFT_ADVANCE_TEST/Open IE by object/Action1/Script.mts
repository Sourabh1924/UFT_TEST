StartURL = "http://www.yahoo.com"
Set IE = CreateObject("InternetExplorer.Application")
IE.Visible = True
IE.Navigate StartURL
Set IE = Nothing

