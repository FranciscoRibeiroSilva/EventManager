// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('teste_email_vazio', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('teste_email_vazio', async function() {
    await driver.get("http://localhost:8081/login")
    await driver.manage().window().setRect(1080, 684)
    await driver.findElement(By.css(".container:nth-child(1) > .row")).click()
    await driver.findElement(By.css(".container:nth-child(1) > .row")).click()
    await driver.findElement(By.css(".container:nth-child(1) > .row")).click()
    await driver.findElement(By.id("e-mail")).click()
    await driver.findElement(By.id("e-mail")).click()
    await driver.findElement(By.name("senha")).click()
    await driver.findElement(By.name("senha")).click()
    {
      const element = await driver.findElement(By.name("senha"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.name("senha")).sendKeys("1234r5t6y7u8")
    await driver.findElement(By.css(".btn-outline-secondary")).click()
    await driver.findElement(By.css("center:nth-child(2) > div")).click()
    await driver.findElement(By.css("center:nth-child(2) > div")).click()
    await driver.findElement(By.css(".alert")).click()
    assert(await driver.findElement(By.css(".alert")).getText() == "Email inválido")
  })
})
