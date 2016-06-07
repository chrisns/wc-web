// module.exports = function () {
//   this.Given(/^I am on the frontend$/, function () {
//     return browser.url(JSON.parse(process.env['chimp.config']).frontend);
//   });
//
//   this.Then(/^I see "([^"]*)" in the title$/, (title) =>
//     expect(browser.getText('h1')[0]).contains(title)
//   );
// };
const expect = require('chai').expect;

module.exports = function () {
  this.Given(/^I am on the frontend$/, function () {
    return this.init();
  });

  this.Then(/^I see "([^"]*)" in the title$/, function (title) {
    // this.perform((client) => {
    //   return expect(client.getText('h1')).contains(title)
    //   done();
    // })
    this.assert.title(title)

    // this.waitForElementVisible('h1', 1000)
    // .assertContainsText('h1', title)
    // Wr
    // ite code here that turns the phrase above into concrete actions
    // this.page
    // expect(this.getText('h1')).contains(title)
  });

}
