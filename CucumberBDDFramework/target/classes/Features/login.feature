Feature: Free CRM Login Feature

#without examples keyword

#Scenario: Free CRM Login Test Scenario

#Given user is already on login page
#When title of login page is free CRM
##Then user enters username and password
#Then user enters "srinicrm" and "srinicrm"
#Then user clicks on log in button
#Then user is on home page

#with Examples Keyword
Scenario Outline: Free CRM Login Test Scenario

Given user is already on login page
When title of login page is free CRM
Then user enters "<username>" and "<password>"
Then user clicks on log in button
Then user is on home page
Then close the browser


Examples:

	| username | password |
	| srinicrm | srinicrm |
	| ananya   | ananya   |



