$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/workspace/Test/CucumberBDDFramework/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on log in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "srinicrm",
        "srinicrm",
        "Srinivas",
        "Reddy",
        "Manager"
      ],
      "line": 18,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "srinicrm",
        "srinicrm",
        "Arun",
        "Joe",
        "Supervisor"
      ],
      "line": 19,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"srinicrm\" and \"srinicrm\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on log in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Srinivas\" and \"Reddy\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 6394013285,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 53726582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "srinicrm",
      "offset": 13
    },
    {
      "val": "srinicrm",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1103984254,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 2074702850,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 66054834,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 1786133038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Srinivas",
      "offset": 29
    },
    {
      "val": "Reddy",
      "offset": 44
    },
    {
      "val": "Manager",
      "offset": 56
    }
  ],
  "location": "LoginStepDefination.user_enters_contact_details(String,String,String)"
});
formatter.result({
  "duration": 1699501262,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 672410551,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"srinicrm\" and \"srinicrm\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on log in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Arun\" and \"Joe\" and \"Supervisor\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 4588989710,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 53861402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "srinicrm",
      "offset": 13
    },
    {
      "val": "srinicrm",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1098143181,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 2681318409,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 18086287,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 1413398314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arun",
      "offset": 29
    },
    {
      "val": "Joe",
      "offset": 40
    },
    {
      "val": "Supervisor",
      "offset": 50
    }
  ],
  "location": "LoginStepDefination.user_enters_contact_details(String,String,String)"
});
formatter.result({
  "duration": 1397914642,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 655383225,
  "status": "passed"
});
});