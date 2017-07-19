export default () => ({ // eslint-disable-line

  // link file UUID
  id: '$uuid',

  // canonical URL of the published page
  // "$url" get filled in by the ./configure script
  url: '$url',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'German federal election 2017 polltracker',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Angela Merkel is vying for a fourth term as Chancellor ' +
           'when Germany elects a new Bundestag on September 24.',

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
    uuid: '',

    // You can also provide a URL
    // url: 'https://image.webservices.ft.com/v1/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fc4bf0be4-7c15-11e4-a7b8-00144feabdc0?source=ig&fit=scale-down&width=700',
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Anna Leach', url: 'https://www.ft.com/stream/e5d0bbfe-4265-3f06-8337-6ba184e4f7b1' },
    { name: 'Martin Stabe', url: 'https://www.ft.com/martin-stabe' },
  ],

  // Appears in the HTML <title>
  title: '',

  // meta data
  description: '',

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
  socialImage: 'http://ft-ig-content-prod.s3-website-eu-west-1.amazonaws.com/v2/ft-interactive/germany-2017-polltracker/master/germany-2017-latest-medium.svg',
  socialHeadline: "German 2017 elections - who's leading the polls?",
  socialDescription: 'How will Germans vote in 2017?',
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
    gptAdunit: 'ft.com/companies/european',
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
