package Pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;

public class Stepdefinition {
	public WebDriver driver;
	public Flipkarthomepage fp;
	
	
	@Given("^open the browser$")
	public void open_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver","C:\\Users\\HP\\Music\\chromedriver\\chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.manage().window().maximize();
	}

	@Then("^navigate to \"([^\"]*)\"$")
	public void navigate_to_https_www_flipkart_com(String url) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   driver.get(url);
	}

	@Then("^close the login page$")
	public void close_the_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Flipkarthomepage fp=new Flipkarthomepage(driver);
		fp.button();
	}

	@Then("^move the mouse to Electronics button and count the number of subitems in electronics$")
	public void move_the_mouse_to_Electronics_button_and_count_the_number_of_subitems_in_electronics() throws Throwable {
		Flipkarthomepage fp=new Flipkarthomepage(driver);
		fp.linkssize();
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
	}

}
