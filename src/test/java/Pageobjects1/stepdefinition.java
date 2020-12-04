package Pageobjects1;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.*;

public class stepdefinition {
	public WebDriver driver;
	public Fishpages fp;
	@Given("^open the browser$")
	public void open_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver","C:\\Users\\HP\\Music\\chromedriver\\chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.manage().window().maximize();
	}

	@Then("^navigate to \"([^\"]*)\"$")
	public void navigate_to(String url) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  driver.get(url);
	}
	@Then("^enter \"([^\"]*)\"$")
	public void enter(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^print the fish price$")
	public void print_the_fish_price() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    Fishpages fp=new Fishpages(driver);
	    fp.clickm();
	    fp.countprice();
	    
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	    driver.quit();
	}


}
