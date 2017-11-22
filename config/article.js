export default () => ({ // eslint-disable-line

  // link file UUID
  id: '10d73870-6cb0-11e7-bfeb-33fe0c5b7eaa',

  // canonical URL of the published page
  // "$url" get filled in by the ./configure script
  url: 'https://ig.ft.com/germany-poll-tracker',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2017-11-20T15:09:38.860Z'),

  headline: 'German political poll tracker',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'What outcomes are likely if there are fresh elections?',

  topic: {
    name: 'Germany politics',
    url: 'https://www.ft.com/topics/themes/Germany_politics',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: '',
    description: '',
    credit: '',

    // You can provide a UUID to an image and it was populate everything else
    uuid: '8c6b537c-cde5-11e7-b781-794ce08b24dc',

    // You can also provide a URL
    // url: 'https://image.webservices.ft.com/v1/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fc4bf0be4-7c15-11e4-a7b8-00144feabdc0?source=ig&fit=scale-down&width=700',
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Anna Leach', url: 'https://www.ft.com/anna-leach' },
    { name: 'Martin Stabe', url: 'https://www.ft.com/martin-stabe' },
  ],

  // Appears in the HTML <title>
  title: 'Germany politics poll tracker',

  // meta data
  description: 'Tracking German voting intention polls since the Bundestag election on Septmber 24, 2017.',

  /*
  TODO: Select Twitter card type -
        "summary" or "summary_large_image"

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A8c6b537c-cde5-11e7-b781-794ce08b24dc?source=ig&width=1400&gravity=faces&format=png',
  socialHeadline: "THe @ft German political poll tracker",
  socialDescription: 'How popular are Germany’s political parties right now?',
  //twitterCreator: '@author's_account', // shows up in summary_large_image cards

  // TWEET BUTTON CUSTOM TEXT
  // tweetText: '',
  // twitterRelatedAccounts: ['authors_account_here', 'ftdata'], // Twitter lists these as suggested accounts to follow after a user tweets (do not include @)

  // Fill out the Facebook/Twitter metadata sections below if you want to
  // override the "General social" options above

  // TWITTER METADATA (for Twitter cards)
  // twitterImage: '',
  // twitterHeadline: '',
  // twitterDescription: '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',
  // facebookDescription: '',

  //ADVERTISING
  ads: {
    // ad unit hierarchy makes ads more granular. Start with ft.com and /companies /markets /world as appropriate to your story
    gptAdunit: 'ft.com/world/europe',
    // granular targeting is optional and will be specified by the ads team
    dftTargeting: '',
  },

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to "IG"
    however another value may be needed
    */
    // product: '',
  },
});
