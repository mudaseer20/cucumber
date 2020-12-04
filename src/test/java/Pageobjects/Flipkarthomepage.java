package Pageobjects;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Flipkarthomepage{
	
	WebDriver driver;
	public Flipkarthomepage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}
	@FindBy(css="button[class='_2KpZ6l _2doB4z']")
	WebElement buttonclose;
	
	@FindBy(xpath="//span[contains(text(),'Electronics')]")
	WebElement electronics;
	@FindBy(css="a[class='_3QN6WI']")
	List<WebElement> Electronicsitems;
	@FindBy(xpath="//div[text()='ABOUT']/following::a")
	List<WebElement>links;
	@FindBy(id="search")
	WebElement search;
	public void button() {
		buttonclose.click();
	}
	public void search() {
		search.click();
	}
public void move() {
	Actions a=new Actions(driver);
	a.moveToElement(electronics).perform();
}

public void listitem() {
	for(int i=0;i<Electronicsitems.size();i++) {
		System.out.println(Electronicsitems.get(i).getText());
		
	}}
	public void linkssize() {
		for(int i=0;i<links.size();i++) {
			System.out.println(links.get(i).getText());
	}
}
}
