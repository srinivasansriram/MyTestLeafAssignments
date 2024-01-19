import { chromium, test  } from "@playwright/test";



test('04_Assignment_Edit Individuals',async () => {


    //setup
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();


    //Test steps
    await page.goto("https://login.salesforce.com/?locale=in");
    
    //Login
    await page.fill("#username", "nivas@microsoft.sandbox");
    await page.fill("[id='password']", "Pas@12345");
    await page.click("#Login");
    await page.waitForLoadState("load");

    //Click App Launcher
    await page.click(".slds-icon-waffle");
    await page.waitForLoadState("domcontentloaded");
    await page.click("//lightning-button[contains(@class,'slds-button slds-p-horizontal--small')]");
    //Click Individuals
    await page.waitForLoadState("domcontentloaded");
    await page.click("//*[normalize-space(text())='Individuals']");
    await page.waitForLoadState("domcontentloaded");
    await page.fill("//*[contains(@name,'Individual-search-input')]", "Srini");
    await page. locator("//a[contains(@class,'slds-button slds-button--icon-x-small slds-button--icon-border-filled')]").nth(0).click();
    await page. locator("//a[contains(@data-target-selection-name,'sfdc:StandardButton.Individual.Edit')]").click();
    await page.waitForLoadState("load");
    //Enter the Details
    await page.locator("//*[normalize-space(text())='Salutation']").click();
    await page.locator("//*[normalize-space(text())='Mr.']").click();
    await page.fill("//*[normalize-space(text())='First Name']", "Nivas");
    await page.locator("//*[normalize-space(text())='Save']").nth(1).click();
    await page.waitForLoadState("domcontentloaded");
   const check =  page.locator("//*[contains(@class,'toastMessage slds-text-heading--small forceActionsText')]");
     await check.isVisible(); 
    
     


})