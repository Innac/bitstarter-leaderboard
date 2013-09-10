0cvar Constants = {
  APP_NAME: "activfits", 
  FUNDING_TARGET: 2000000.00,
  FUNDING_UNIT_SYMBOL: "mBTC",
  FUNDING_SI_SCALE: 1000,
  FUNDING_END_DATE: new Date("September 30, 2013"),
  PRODUCT_NAME: "Activfits: Development Version",
  PRODUCT_SHORT_DESCRIPTION: "Activfits is an app that helps elder people stay active and healthy",
  TWITTER_USERNAME: "innac_lt",
  TWITTER_TWEET: "This student crowdfunder looks interesting.",
  COINBASE_PREORDER_DATA_CODE: "a6ce055b27c6bacc2a9f7f2627d5e024",
  days_left: function() {
      return Math.max(Math.ceil((this.FUNDING_END_DATE - new Date()) / (1000*60*60*24)), 0);
  }
};

module.exports = Constants;
