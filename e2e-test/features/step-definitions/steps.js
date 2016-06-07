module.exports = function () {
  this.Given(/^I am on the frontend$/, function () {
    return browser.url(JSON.parse(process.env['chimp.config']).frontend);
  });

  this.Then(/^I see "([^"]*)" in the title$/, (title) =>
    expect(browser.getText('h1')[0]).contains(title)
  );
};
