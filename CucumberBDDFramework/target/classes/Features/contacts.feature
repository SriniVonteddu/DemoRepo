Feature: Free CRM Create Contacts

Scenario Outline: Free CRM Create a new contact scenario

Given user is already on login page
When title of login page is free CRM
Then user enters "<username>" and "<password>"
Then user clicks on log in button
Then user is on home page
Then user moves to new contacts page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then close the browser


Examples:

	| username | password | firstname | lastname | position |
	| srinicrm | srinicrm | Srinivas  | Reddy    | Manager  |
	| srinicrm | srinicrm | Arun      | Joe      | Supervisor|
