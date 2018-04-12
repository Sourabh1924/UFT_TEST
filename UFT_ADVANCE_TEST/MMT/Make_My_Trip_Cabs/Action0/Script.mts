RunAction "Cab_Search", oneIteration
RunAction "Cab_Booking", oneIteration
RunAction "Contact_details", oneIteration, DataTable("Counter", dtGlobalSheet), DataTable("Cab_book", dtGlobalSheet)
RunAction "Cab_payment", oneIteration
