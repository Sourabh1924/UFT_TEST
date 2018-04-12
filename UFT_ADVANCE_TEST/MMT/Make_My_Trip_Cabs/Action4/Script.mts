
Set pagobj = Browser("MakeMytrip Payment : Safe").Page("MakeMytrip Payment : Safe")

Card_number = "123456785"
Cust_name = "sourabh"
Card_expiry = "05/2019"
CVV_number = "456"
NetBanking_bank = "Axis Bank"
Debit_card_bank = "HDFC Bank"

Card_expiry = replace(Card_expiry,"-","/")
Expiry = split(Card_expiry,"/")

If lcase(Payment_method)="credit card" Then
	
	pagobj.WebEdit("Credit_cardnumber").Set Card_numbCust_name
	pagobj.WebList("Credit_expiryMonth").Select Expiry(0)
	pagobj.WebList("Credit_expiryYear").Select Expiry(1)
	pagobj.WebEdit("Credit_cvv").Set CVV_number

ElseIf lcase(Payment_method)="netbanking" then

	pagobj.Link("Net Banking").Click
	pagobj.WebList("Bank_options").Select NetBanking_bank

ElseIf lcase(Payment_method)="Debit card" then 

	pagobj.Link("Debit+ATM Pin").Click
	pagobj.WebList("ATM_options").Select Debit_card_bank

End If
