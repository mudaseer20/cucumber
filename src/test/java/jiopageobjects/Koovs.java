package jiopageobjects;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Koovs {
	WebDriver driver;
	public Koovs(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	@FindBy(xpath="//a[text()='MEN']")
	WebElement men;
@FindBy(xpath="//a[contains(text(),' & Polo')]")
WebElement polo;
@FindBy(css=".algolia-autocomplete>input")
WebElement search1;
@FindBy(css=".product_price")
List<WebElement> finalprice;
@FindBy(id="search-input-field")
WebElement searchname;

@FindBy(xpath="//span[contains(text(),'All Over Printed Round Neck T-shirts')]/parent::div")
WebElement shirt;
public void search(String brand) {
searchname.sendKeys(brand);
}
	public void hover() {
		Actions a=new Actions(driver);
		a.moveToElement(men).perform();
	}
	
	public void poloshirt() {
		polo.click();
	}
	
	public void price() {
		
		for(int i=0;i<finalprice.size();i++) {
			System.out.println(finalprice.get(i).getText());
		}
	}
	
	public void shirt() {
		shirt.click();
	}
	public void addtobag() {
		Set<String>v=driver.getWindowHandles();
		Iterator<String>id=v.iterator();
		ArrayList<String>a=new ArrayList<String>();
		while(id.hasNext()) {
			a.add(id.next());
			
		}
		driver.switchTo().window(a.get(1));
	}
	
	
	
}
