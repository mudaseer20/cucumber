package Pageobjects1;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Fishpages {
	public WebDriver driver;
	public Fishpages(WebDriver driver) {
		this.driver=driver;
		
		PageFactory.initElements(driver, this);
		
	}
@FindBy(id="14")
public WebElement city;
@FindBy(css=".price")
List<WebElement> price;

	  //driver.findElement(By.id("14")).click();
public void clickm() {
	city.click();
}
public void countprice() {
	for(int i=0;i<price.size();i++) {
		System.out.println(price.get(i).getText());
	}
}
}
