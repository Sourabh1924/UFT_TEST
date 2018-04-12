Passenger_name = datatable.Value("Passenger_name")
WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").SelectCell 4,1
WpfWindow("HP MyFlight Sample Application").WpfButton("SELECT FLIGHT").Click
WpfWindow("HP MyFlight Sample Application").WpfEdit("passengerName").Set Passenger_name 
WpfWindow("HP MyFlight Sample Application").WpfButton("ORDER").Click
