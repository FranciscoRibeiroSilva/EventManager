// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('teste_usuario_nao_encontrado', function() {
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
  it('teste_usuario_nao_encontrado', async function() {
    await driver.get("http://localhost:8081/login")
    await driver.manage().window().setRect(1080, 684)
    await driver.findElement(By.css(".container:nth-child(1) > .row")).click()
    await driver.findElement(By.id("e-mail")).click()
    await driver.findElement(By.id("e-mail")).click()
    await driver.findElement(By.id("e-mail")).sendKeys("jobisvaldo@gmail.com")
    await driver.findElement(By.name("senha")).click()
    await driver.findElement(By.name("senha")).sendKeys("123e4r5t6y7u")
    await driver.findElement(By.css(".letrasespac")).click()
    await driver.findElement(By.css(".btn-outline-secondary")).click()
    await driver.findElement(By.css(".container:nth-child(1) > .row")).click()
    await driver.findElement(By.css(".alert")).click()
    assert(await driver.findElement(By.css(".alert")).getText() == "Usuario não encotrador")
  })
})
