package jiopageobjects;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.*;


public class Stepdefintion {
	public WebDriver driver;
	Koovs obj=new Koovs(driver);
	@Given("^open the browser$")
	public void open_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver","C:\\Users\\HP\\Music\\chromedriver\\chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	}

	@Then("^navigate to \"([^\"]*)\"$")
	public void navigate_to(String url) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  driver.get(url);
	  String title=driver.getTitle();
	  Assert.assertEquals("Online Shopping - Shop for Clothing, Shoes & Accessories in India at Koovs", title);
	  Thread.sleep(2000);
	}
	@Then("^enter \"([^\"]*)\"$")
	public void enter(String brandname) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Koovs obj=new Koovs(driver);
		obj.search(brandname);
		
	}

	@Then("^hover mouse on men$")
	public void hover_mouse_on_men()throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Koovs obj=new Koovs(driver);
		
		obj.hover();
	}

	@Then("^click on jeans$")
	public void click_on_jeans() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	//	Jiomasalaobject obj=new Jiomasalaobject(driver);
	Koovs obj=new Koovs(driver);
	obj.poloshirt();
	}

	@Then("^print all the final prices of the masala spices$")
	public void print_all_the_final_prices_of_the_masala_spices() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 // Write code here that turns the phrase above into concrete actions
	//	Jiomasalaobject obj=new Jiomasalaobject(driver);
		//obj.price();
		Koovs obj=new Koovs(driver);
		obj.price();
		obj.shirt();
		//obj.addtobag();
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	driver.quit();
	}
}
