WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").Select datatable.Value("From")
WpfWindow("HP MyFlight Sample Application").WpfComboBox("toCity").Select datatable.Value("To")
WpfWindow("HP MyFlight Sample Application").WpfComboBox("Class").Select datatable.Value("Class")
WpfWindow("HP MyFlight Sample Application").WpfCalendar("datePicker").Setdate datatable.Value("Date")
WpfWindow("HP MyFlight Sample Application").WpfComboBox("numOfTickets").Select datatable.Value("Tickets")
WpfWindow("HP MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click

