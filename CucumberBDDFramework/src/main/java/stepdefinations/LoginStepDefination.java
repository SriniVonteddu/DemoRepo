package stepdefinations;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
	
	
	WebDriver driver;
	
	@Given("^user is already on login page$")
	public void user_already_on_login_page(){
		
		System.setProperty("webdriver.chrome.driver", "C:/Windows/System32/test/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://classic.crmpro.com");
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	
	@When("^title of login page is free CRM$")
	public void title_of_login_page_is_free_CRM() {
	    String title = driver.getTitle();
	    System.out.println(title);
	    Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	}
	
	//without regular expression
	
//	@Then("^user enters username and password$")
//	public void user_enters_username_and_password() {
//		driver.findElement(By.xpath("//input[@name = 'username']")).sendKeys("srinicrm");
//		driver.findElement(By.xpath("//input[@name = 'password']")).sendKeys("srinicrm");
//	}
	
	
	//with regular expression and passing values thru parameter
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) {
		driver.findElement(By.xpath("//input[@name = 'username']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@name = 'password']")).sendKeys(password);
	}
	
	
	@Then("^user clicks on log in button$")
	public void user_clicks_on_log_in_button() {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() {
	    String homePageTitle = driver.getTitle();
	    System.out.println(homePageTitle);
	    Assert.assertEquals("CRMPRO", homePageTitle);
	}
	
	@Then("^user moves to new contacts page$")
	public void user_moves_to_new_contacts_page() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(), 'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(), 'New Contact')]")).click();
	    
	}
	
	
	@Then("^user enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_enters_contact_details(String firstname, String lastname, String position){
		driver.findElement(By.id("first_name")).sendKeys(firstname);
		driver.findElement(By.id("surname")).sendKeys(lastname);
		driver.findElement(By.id("company_position")).sendKeys(position);
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
		
	}
			
	
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}
	


}
