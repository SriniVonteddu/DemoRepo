package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:/workspace/Test/CucumberBDDFramework/src/main/java/Features/contacts.feature",	// the path of feature file
		glue={"stepdefinations"},	// the path of step definition file
		format={"pretty", "html:test-output", "json:json_input/cucumber.json", "junit:junit.xml/cucumber.xml"}, //to generate different types of reports
		monochrome = true,  	// display the console output in a proper readable format
		strict = true, // it will check if any step is not defined in step definition
		dryRun = false  //to check the mapping is proper between feature file and step definition file
		
		)

public class TestRunner {
	
	
	

}
