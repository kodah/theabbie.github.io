self.addEventListener('fetch', async function(event) {
if (event.request.url=="https://theabbie.github.io/offline") {
event.respondWith(new Response(code,{headers: {"Content-Type": "text/html"}}))
}
});

var code = 
`<html>
<head>
<title>The Abbie</title>
<link rel="shortcut icon" type="image/x-icon" href="https://cdn.jsdelivr.net/gh/theabbie/awto@gh-pages/files/circle-cropped.png">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="google-site-verification" content="7p3rfqoGeRsHFPzcn-BYzTutdo6rUhJNRttDAGIkt5M" />
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
<meta name="mobile-web-app-capable" content="yes">
<meta name="description" content="@TheAbbie Is A Developer And A Web Designer Known For Machine Learning And AI Developement" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="https://kit.fontawesome.com/473e8f3a80.js" crossorigin="anonymous"></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
  {
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://google.com/article"
  },
  "headline": "Article headline",
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
   ],
  "datePublished": "2015-02-05T08:00:00+08:00",
  "dateModified": "2015-02-05T09:20:00+08:00",
  "author": {
    "@type": "Person",
    "name": "John Doe"
  },
   "publisher": {
    "@type": "Organization",
    "name": "Google",
    "logo": {
      "@type": "ImageObject",
      "url": "https://google.com/logo.jpg"
    }
  },
  "description": "A most wonderful article"
  },
  {
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Books",
    "item": "https://example.com/books"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Authors",
    "item": "https://example.com/books/authors"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Ann Leckie",
    "item": "https://example.com/books/authors/annleckie"
  },{
    "@type": "ListItem",
    "position": 4,
    "name": "Ancillary Justice",
    "item": "https://example.com/books/authors/ancillaryjustice"
  }]
},
{
  "@type":"Book",
  "name" : "The Catcher in the Rye",
  "author": {
    "@type":"Person",
    "name":"J.D. Salinger"
  },
  "url" : "http://www.barnesandnoble.com/store/info/offer/JDSalinger",
  "workExample" : [{
    "@type": "Book",
    "isbn": "031676948",
    "bookEdition": "2nd Edition",
    "bookFormat": "https://schema.org/Hardcover",
    "potentialAction":{
    "@type":"ReadAction",
    "target":
      {
        "@type":"EntryPoint",
        "urlTemplate":"http://www.barnesandnoble.com/store/info/offer/0316769487?purchase=true",
        "actionPlatform":[
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "expectsAcceptanceOf":{
        "@type":"Offer",
        "Price":6.99,
        "priceCurrency":"USD",
        "eligibleRegion" : {
          "@type":"Country",
          "name":"US"
        },
        "availability": "https://schema.org/InStock"
      }
    }
  },{
    "@type": "Book",
    "isbn": "031676947",
    "bookEdition": "1st Edition",
    "bookFormat": "https://schema.org/EBook",
    "potentialAction":{
    "@type":"ReadAction",
    "target":
      {
        "@type":"EntryPoint",
        "urlTemplate":"http://www.barnesandnoble.com/store/info/offer/031676947?purchase=true",
        "actionPlatform":[
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "expectsAcceptanceOf":{
        "@type":"Offer",
        "Price":1.99,
        "priceCurrency":"USD",
        "eligibleRegion" : {
          "@type":"Country",
          "name":"UK"
        },
        "availability": "https://schema.org/InStock"
      }
    }
  }]
},

{
  "@type": "Organization",
  "url": "http://www.your-company-site.com",
  "logo": "http://www.example.com/logo.png",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+1-401-555-1212",
    "contactType": "customer service"
  }]
},
{
  "@type": "Course",
  "name": "Introduction to Computer Science and Programming",
  "description": "Introductory CS course laying out the basics.",
  "provider": {
    "@type": "Organization",
    "name": "University of Technology - Eureka",
    "sameAs": "http://www.ut-eureka.edu"
  }
},
{
  "@type":"Review",
  "author": {
    "@type":"Person",
    "name":"Lisa Kennedy",
    "sameAs":"https://plus.google.com/114108465800532712602"
  },
  "url": "http://www.localreviews.com/restaurants/1/2/3/daves-steak-house.html",
  "datePublished":"2014-03-13T20:00",
  "publisher": {
      "@type":"Organization",
      "name":"Denver Post",
      "sameAs":"http://www.denverpost.com"
  },
  "description":"Great old fashioned steaks but the salads are sub par.",
  "inLanguage":"en",
  "itemReviewed": {
    "@type":"Restaurant",
    "name": "Dave's Steak House",
    "sameAs": "http://davessteakhouse.example.com",
    "image": "http://davessteakhouse.example.com/logo.jpg",
    "servesCuisine": "Steak House",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "148 W 51st St",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10019",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.761293,
      "longitude": -73.982294
    },
    "telephone": "+12122459600",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "88",
      "bestRating": "100",
      "ratingCount": "20"
    }
  },
  "reviewRating": {
     "@type":"Rating",
     "worstRating":1,
     "bestRating":4,
     "ratingValue":3.5
  }
},
{
  "@type":"Dataset",
  "license": "ABC",
  "name":"NCDC Storm Events Database",
  "description":"Storm Data is provided by the National Weather Service (NWS) and contain statistics on...",
  "url":"https://catalog.data.gov/dataset/ncdc-storm-events-database",
  "sameAs":"https://gis.ncdc.noaa.gov/geoportal/catalog/search/resource/details.page?id=gov.noaa.ncdc:C00510",
  "identifier": ["https://doi.org/10.1000/182",
                 "https://identifiers.org/ark:/12345/fk1234"],
  "keywords":[
     "ATMOSPHERE > ATMOSPHERIC PHENOMENA > CYCLONES",
     "ATMOSPHERE > ATMOSPHERIC PHENOMENA > DROUGHT",
     "ATMOSPHERE > ATMOSPHERIC PHENOMENA > FOG",
     "ATMOSPHERE > ATMOSPHERIC PHENOMENA > FREEZE"
  ],
  "creator":{
     "@type":"Organization",
     "url": "https://www.ncei.noaa.gov/",
     "name":"OC/NOAA/NESDIS/NCEI > National Centers for Environmental Information, NESDIS, NOAA, U.S. Department of Commerce",
     "contactPoint":{
        "@type":"ContactPoint",
        "contactType": "customer service",
        "telephone":"+1-828-271-4800",
        "email":"ncei.orders@noaa.gov"
     }
  },
  "includedInDataCatalog":{
     "@type":"DataCatalog",
     "name":"data.gov"
  },
  "distribution":[
     {
        "@type":"DataDownload",
        "encodingFormat":"CSV",
        "contentUrl":"http://www.ncdc.noaa.gov/stormevents/ftp.jsp"
     },
     {
        "@type":"DataDownload",
        "encodingFormat":"XML",
        "contentUrl":"http://gis.ncdc.noaa.gov/all-records/catalog/search/resource/details.page?id=gov.noaa.ncdc:C00510"
     }
  ],
  "temporalCoverage":"1950-01-01/2013-12-18",
  "spatialCoverage":{
     "@type":"Place",
     "geo":{
        "@type":"GeoShape",
        "box":"18.0 -65.0 72.0 172.0"
     }
  }
},
{
  "@type": "EmployerAggregateRating",
  "itemReviewed": {
    "@type": "Organization",
    "name" : "World's Best Coffee Shop",
    "sameAs" : "http://www.worlds-best-coffee-shop.example.com"
  },
  "ratingValue": "91",
  "bestRating": "100",
  "worstRating": "1",
  "ratingCount" : "10561"
},
{
  "@type": "Event",
  "name": "The Adventures of Kira and Morrison",
  "startDate": "2025-07-21T19:00",
  "endDate": "2025-07-21T23:00",
  "location": {
    "@type": "Place",
    "name": "Snickerpark Stadium",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 West Snickerpark Dr",
      "addressLocality": "Snickertown",
      "postalCode": "19019",
      "addressRegion": "PA",
      "addressCountry": "US"
    }
  },
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
   ],
  "description": "The Adventures of Kira and Morrison is coming to Snickertown in a can’t miss performance.",
  "offers": {
    "@type": "Offer",
    "url": "https://www.example.com/event_offer/12345_201803180430",
    "price": "30",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "validFrom": "2024-05-21T12:00"
  },
  "performer": {
    "@type": "PerformingGroup",
    "name": "Kira and Morrison"
  }
},
{
  "@type": "ClaimReview",
  "datePublished": "2016-06-22",
  "url": "http://example.com/news/science/worldisflat.html",
  "claimReviewed": "The world is flat",
  "itemReviewed": {
    "@type": "Claim",
    "author": {
      "@type": "Organization",
      "name": "Square World Society",
      "sameAs": "https://example.flatworlders.com/we-know-that-the-world-is-flat"
    },
    "datePublished": "2016-06-20",
    "appearance": {
      "@type": "OpinionNewsArticle",
      "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://iferr.now.sh/"
       },
      "dateModified": "2016-06-22",
      "headline":"abc",
      "image": "https://example.com",
      "publisher": {},
      "url": "http://skeptical.example.net/news/a122121",
      "name": "Square Earth - Flat earthers for the Internet age",
      "datePublished": "2016-06-22",
      "author": {
        "@type": "Person",
        "name": "T. Tellar"
      }
    }
  },
  "author": {
    "@type": "Organization",
    "name": "Example.com science watch"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "1",
    "bestRating": "5",
    "worstRating": "1",
    "alternateName": "False"
  }
},
  {
  "@type": "HowTo",
  "name": "How to tile a kitchen backsplash",
  "description": "Any kitchen can be much more vibrant with a great tile backsplash. This guide will help you install one with beautiful results, like our example kitchen seen here.",
  "image": {
    "@type": "ImageObject",
    "url": "https://example.com/photos/1x1/photo.jpg",
    "height": "406",
    "width": "305"
  },
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "100"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "tiles"
    }, {
      "@type": "HowToSupply",
      "name": "thin-set mortar"
    }, {
      "@type": "HowToSupply",
      "name": "tile grout"
    }, {
      "@type": "HowToSupply",
      "name": "grout sealer"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "notched trowel"
    }, {
      "@type": "HowToTool",
      "name": "bucket"
    },{
      "@type": "HowToTool",
      "name": "large sponge"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "url": "https://example.com/kitchen#step1",
      "name": "Prepare the surfaces",
      "itemListElement": [{
        "@type": "HowToDirection",
        "text": "Turn off the power to the kitchen and then remove everything that is on the wall, such as outlet covers, switchplates, and any other item in the area that is to be tiled."
      }, {
        "@type": "HowToDirection",
        "text": "Then clean the surface thoroughly to remove any grease or other debris and tape off the area."
      }],
      "image": {
        "@type": "ImageObject",
        "url": "https://example.com/photos/1x1/photo-step1.jpg",
        "height": "406",
        "width": "305"
      }
    }, {
      "@type": "HowToStep",
      "name": "Plan your layout",
      "url": "https://example.com/kitchen#step2",
      "itemListElement": [{
        "@type": "HowToTip",
        "text": "The creases created up until this point will be guiding lines for creating the four walls of your planter box."
      }, {
        "@type": "HowToDirection",
        "text": "Lift one side at a 90-degree angle, and fold it in place so that the point on the paper matches the other two points already in the center."
      }, {
        "@type": "HowToDirection",
        "text": "Repeat on the other side."
      }],
      "image": {
        "@type": "ImageObject",
        "url": "https://example.com/photos/1x1/photo-step2.jpg",
        "height": "406",
        "width": "305"
      }
    }, {
      "@type": "HowToStep",
      "name": "Prepare your and apply mortar (or choose adhesive tile)",
      "url": "https://example.com/kitchen#step3",
      "itemListElement": [{
        "@type": "HowToDirection",
        "text": "Follow the instructions on your thin-set mortar to determine the right amount of water to fill in your bucket. Once done, add the powder gradually and make sure it is thoroughly mixed."
      }, {
        "@type": "HowToDirection",
        "text": "Once mixed, let it stand for a few minutes before mixing it again. This time do not add more water. Double check your thin-set mortar instructions to make sure the consistency is right."
      }, {
        "@type": "HowToDirection",
        "text": "Spread the mortar on a small section of the wall with a trowel."
      }, {
        "@type": "HowToTip",
        "text": "Thinset and other adhesives set quickly so make sure to work in a small area."
      }, {
        "@type": "HowToDirection",
        "text": "Once it’s applied, comb over it with a notched trowel."
      }],
      "image": {
        "@type": "ImageObject",
        "url": "https://example.com/photos/1x1/photo-step3.jpg",
        "height": "406",
        "width": "305"
      }
    }, {
      "@type": "HowToStep",
      "name": "Add your tile to the wall",
      "url": "https://example.com/kitchen#step4",
      "itemListElement": [{
        "@type": "HowToDirection",
        "text": "Place the tile sheets along the wall, making sure to add spacers so the tiles remain lined up."
      }, {
        "@type": "HowToDirection",
        "text": "Press the first piece of tile into the wall with a little twist, leaving a small (usually one-eight inch) gap at the countertop to account for expansion. use a rubber float to press the tile and ensure it sets in the adhesive."
      }, {
        "@type": "HowToDirection",
        "text": "Repeat the mortar and tiling until your wall is completely tiled, Working in small sections."
      }],
      "image": {
        "@type": "ImageObject",
        "url": "https://example.com/photos/1x1/photo-step4.jpg",
        "height": "406",
        "width": "305"
      }
    }, {
      "@type": "HowToStep",
      "name": "Apply the grout",
      "url": "https://example.com/kitchen#step5",
      "itemListElement": [{
        "@type": "HowToDirection",
        "text": "Allow the thin-set mortar to set. This usually takes about 12 hours. Don’t mix the grout before the mortar is set, because you don’t want the grout to dry out!"
      }, {
        "@type": "HowToDirection",
        "text": "To apply, cover the area thoroughly with grout and make sure you fill all the joints by spreading it across the tiles vertically, horizontally, and diagonally. Then fill any remaining voids with grout."
      }, {
        "@type": "HowToDirection",
        "text": "Then, with a moist sponge, sponge away the excess grout and then wipe clean with a towel. For easier maintenance in the future, think about applying a grout sealer."
      }],
      "image": {
        "@type": "ImageObject",
        "url": "https://example.com/photos/1x1/photo-step5.jpg",
        "height": "406",
        "width": "305"
      }
    }
  ],
  "totalTime": "P2D"
},
{
  "@type" : "JobPosting",
  "title" : "Software Engineer",
  "description" : "<p>Google aspires to be an organization that reflects the globally diverse audience that our products and technology serve. We believe that in addition to hiring the best talent, a diversity of perspectives, ideas and cultures leads to the creation of better products and services.</p>",
  "identifier": {
    "@type": "PropertyValue",
    "name": "MagsRUs Wheel Company",
    "value": "1234567"
  },
  "datePosted" : "2017-01-18",
  "validThrough" : "2017-03-18T00:00",
  "employmentType" : "CONTRACTOR",
  "hiringOrganization" : {
    "@type" : "Organization",
    "name" : "Google",
    "sameAs" : "http://www.google.com",
    "logo" : "http://www.example.com/images/logo.png"
  },
  "jobLocation": {
  "@type": "Place",
    "address": {
    "@type": "PostalAddress",
    "streetAddress": "1600 Amphitheatre Pkwy",
    "addressLocality": ", Mountain View",
    "addressRegion": "CA",
    "postalCode": "94043",
    "addressCountry": "US"
    }
  },
 "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": {
      "@type": "QuantitativeValue",
      "value": 40.00,
      "unitText": "HOUR"
    }
  }
},
{
  "@type": "WorkBasedProgram",
  "name": "IBEW Apprenticeship",
  "description": "a piece of text about what it might mean to take this program",
  "url": "http://www.acme.edu/CS",
  "identifier": [{
     "@type": "PropertyValue",
     "PropertyID": "CIP2010",
     "Value": "12.3456"
  }, {
     "@type": "PropertyValue",
     "PropertyID": "ProgramID",
     "Value": "CS-101"
  }],
  "provider": {
    "@type": "WorkersUnion",
    "name": "International Brotherhood of Electrical Workers",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Boston",
      "addressRegion": "MA",
      "postalCode": "02134"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Admissions",
      "telephone": "+1-555-123-4567"
    }
  },
  "timeToComplete": "P4Y",
  "occupationalCredentialAwarded": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Welding Licence"
  },
  "programPrerequisites": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "High school diploma"
    },
    "another pre-requisite, which is just text"
  ],
  "offers": [
    {
      "@type": "Offer",
      "category": "Tuition",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": 16278,
        "priceCurrency": "USD"
      },
      "availabilityStarts": "2019-09-14",
      "inventoryLevel": 30
   }, {
      "@type": "Offer",
      "category": "Program Fees",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": 200,
        "priceCurrency": "USD"
      }
   }
 ],
 "trainingSalary" : {
    "@type": "MonetaryAmountDistribution",
    "currency": "USD",
    "duration": "P1H",
    "median": 16.00
 },
 "salaryUponCompletion": {
    "@type": "MonetaryAmountDistribution",
    "currency": "USD",
    "duration": "P1H",
    "median": 20.00
  }
},
{
  "@type": "VideoObject",
  "contentURL": "https://example.com/bald-eagle-at-the-park.mp4",
  "description": "Bald eagle at the park livestream.",
  "duration": "PT37M14S",
  "embedUrl": "https://example.com/bald-eagle-at-the-park",
  "expires": "2016-10-30T14:37:14+00:00",
  "interactionCount": "4756",
  "name": "Bald eagle nest livestream!",
  "thumbnailUrl": "https://example.com/bald-eagle-at-the-park",
  "uploadDate": "2018-02-27T14:00:00+00:00",
  "publication": [{
      // The current broadcast.
      "@type": "BroadcastEvent",
      "isLiveBroadcast": true,
      "startDate": "2018-02-27T14:00:00+00:00",
      "endDate": "2016-10-27T14:37:14+00:00"
    },
    {
      // The next scheduled broadcast (also live, not retransmission).
      "@type": "BroadcastEvent",
      "isLiveBroadcast": true,
      "startDate": "2016-10-27T18:00:00+00:00"
  	}]
},
{
  "@type": "Restaurant",
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
   ],
  "@id": "http://davessteakhouse.example.com",
  "name": "Dave's Steak House",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "148 W 51st St",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10019",
    "addressCountry": "US"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Lillian Ruiz"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.761293,
    "longitude": -73.982294
  },
  "url": "http://www.example.com/restaurant-locations/manhattan",
  "telephone": "+12122459600",
  "servesCuisine": "American",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday"
      ],
      "opens": "11:30",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "11:30",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "16:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "16:00",
      "closes": "22:00"
    }
  ],
  "menu": "http://www.example.com/menu",
  "acceptsReservations": "True"
},
{
  "@type": "Organization",
  "url": "http://www.example.com",
  "logo": "http://www.example.com/images/logo.png"
},
{
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": "1",
      "item": {
        "@type": "Movie",
        "url": "https://example.com/2019-best-picture-noms",
        "name": "A Star Is Born",
        "image": "https://example.com/photos/6x9/photo.jpg",
        "dateCreated": "2018-10-05",
        "director": {
            "@type": "Person",
            "name": "Bradley Cooper"
          },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "John D."
          },
          "reviewBody": "Heartbreaking, inpsiring, moving. Bradley Cooper is a triple threat."
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "90",
            "bestRating": "100",
            "ratingCount": "19141"
          }
        }
      },
    {
      "@type": "ListItem",
      "position": "2",
      "item": {
        "@type": "Movie",
        "name": "Bohemian Rhapsody",
        "url": "https://example.com/2019-best-picture-noms",
        "image": "https://example.com/photos/6x9/photo.jpg",
        "dateCreated": "2018-11-02",
        "director": {
            "@type": "Person",
            "name": "Bryan Singer"
          },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "3"
          },
          "author": {
            "@type": "Person",
            "name": "Vin S."
          },
          "reviewBody": "Rami Malek's performance is overrated, at best."
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "61",
            "bestRating": "100",
            "ratingCount": "21985"
          }
        }
      },
    {
      "@type": "ListItem",
      "position": "3",
      "item": {
        "@type": "Movie",
        "name": "Black Panther",
        "url": "https://example.com/2019-best-picture-noms",
        "image": "https://example.com/photos/6x9/photo.jpg",
        "dateCreated": "2018-02-16",
        "director": {
            "@type": "Person",
            "name": "Ryan Coogler"
          },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "2"
          },
          "author": {
            "@type": "Person",
            "name": "Trevor R."
          },
          "reviewBody": "I didn't like the lighting and CGI in this movie."
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "96",
            "bestRating": "100",
            "ratingCount": "88211"
          }
        }
      }
  ]
},
{
  "@type": "Occupation",
  "name": "Software Developer, Applications",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "lastReviewed": "2017-07-23T14:20:00-05:00"
  },
  "description": "Develops information systems by designing, developing, and installing software solutions",
  "estimatedSalary": [
    {
      "@type": "MonetaryAmountDistribution",
      "name": "base",
      "currency": "USD",
      "unitText": "YEAR",
      "percentile10": "100000.5",
      "percentile25": "115000",
      "median": "120000.28",
      "percentile75": "130000",
      "percentile90": "150000"
    }
  ],
  "occupationLocation": [
    {
      "@type": "City",
      "name": "Mountain View"
    }
  ]
},
{
  "@type": "Product",
  "name": "Executive Anvil",
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
   ],
  "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
  "sku": "0446310786",
  "mpn": "925872",
  "brand": {
    "@type": "Thing",
    "name": "ACME"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Fred Benson"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.4",
    "reviewCount": "89"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/anvil",
    "priceCurrency": "USD",
    "price": "119.99",
    "priceValidUntil": "2020-11-05",
    "itemCondition": "https://schema.org/UsedCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Executive Objects"
    }
  }
},
{
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": "How many ounces are there in a pound?",
      "text": "I have taken up a new interest in baking and keep running across directions in ounces and pounds. I have to translate between them and was wondering how many ounces are in a pound?",
      "answerCount": 3,
      "upvoteCount": 26,
      "dateCreated": "2016-07-23T21:11Z",
      "author": {
        "@type": "Person",
        "name": "New Baking User"
      },
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1 pound (lb) is equal to 16 ounces (oz).",
        "dateCreated": "2016-11-02T21:11Z",
        "upvoteCount": 1337,
        "url": "https://example.com/question1#acceptedAnswer",
        "author": {
          "@type": "Person",
          "name": "SomeUser"
        }
      },
      "suggestedAnswer": [
        {
          "@type": "Answer",
          "text": "Are you looking for ounces or fluid ounces? If you are looking for fluid ounces there are 15.34 fluid ounces in a pound of water.",
          "dateCreated": "2016-11-02T21:11Z",
          "upvoteCount": 42,
          "url": "https://example.com/question1#suggestedAnswer1",
          "author": {
            "@type": "Person",
            "name": "AnotherUser"
          }
        }, {
          "@type": "Answer",
          "text": " I can't remember exactly, but I think 18 ounces in a lb. You might want to double check that.",
          "dateCreated": "2016-11-06T21:11Z",
          "upvoteCount": 0,
          "url": "https://example.com/question1#suggestedAnswer2",
          "author": {
            "@type": "Person",
            "name": "ConfusedUser"
          }
        }
      ]
    }
  },
  {
  "@type": "Recipe",
  "name": "Party Coffee Cake",
  "image": [
  "https://example.com/photos/1x1/photo.jpg",
  "https://example.com/photos/4x3/photo.jpg",
  "https://example.com/photos/16x9/photo.jpg"
  ],
  "author": {
  	"@type": "Person",
    "name": "Mary Stone"
  },
  "datePublished": "2018-03-10",
  "description": "This coffee cake is awesome and perfect for parties.",
  "prepTime": "PT20M",
  "cookTime": "PT30M",
  "totalTime": "PT50M",
  "keywords": "cake for a party, coffee",
  "recipeYield": "10 servings",
  "recipeCategory": "Dessert",
  "recipeCuisine": "American",
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "270 calories"
  },
  "recipeIngredient": [
    "2 cups of flour",
    "3/4 cup white sugar",
    "2 teaspoons baking powder",
    "1/2 teaspoon salt",
    "1/2 cup butter",
    "2 eggs",
    "3/4 cup milk"
    ],
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan."
    },
    {
      "@type": "HowToStep",
      "text": "In a large bowl, combine flour, sugar, baking powder, and salt."
    },
    {
      "@type": "HowToStep",
      "text": "Mix in the butter, eggs, and milk."
    },
    {
      "@type": "HowToStep",
      "text": "Spread into the prepared pan."
    },
    {
      "@type": "HowToStep",
      "text": "Bake for 30 to 35 minutes, or until firm."
    },
    {
      "@type": "HowToStep",
      "text": "Allow to cool."
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "18"
  },
  "video": [
    {
    "@type": "VideoObject",
    "name": "How to make a Party Coffee Cake",
    "description": "This is how you make a Party Coffee Cake.",
    "thumbnailUrl": [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg"
     ],
    "contentUrl": "http://www.example.com/video123.mp4",
    "embedUrl": "http://www.example.com/videoplayer?video=123",
    "uploadDate": "2018-02-05T08:00:00+08:00",
    "duration": "PT1M33S",
    "interactionCount": "2347",
    "expires": "2019-02-05T08:00:00+08:00"
   }
  ]
},
{
  "@type": "Review",
  "itemReviewed": {
    "@type": "Restaurant",
    "priceRange": "abc",
    "image": "http://www.example.com/seafood-restaurant.jpg",
    "name": "Legal Seafood",
    "servesCuisine": "Seafood",
    "telephone": "1234567",
    "address" :{
      "@type": "PostalAddress",
      "streetAddress": "123 William St",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10038",
      "addressCountry": "US"
    }
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4"
  },
  "name": "A good seafood place.",
  "author": {
    "@type": "Person",
    "name": "Bob Smith"
  },
  "reviewBody": "The seafood is great.",
  "publisher": {
    "@type": "Organization",
    "name": "Washington Times"
  }
},
{
  "@type": "WebSite",
  "url": "https://www.example.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://query.example.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
},
{
  "@type": "Person",
  "name": "your name",
  "url": "http://www.your-site.com",
  "sameAs": [
    "http://www.facebook.com/your-profile",
    "http://instagram.com/yourProfile",
    "http://www.linkedin.com/in/yourprofile",
    "http://plus.google.com/your_profile"
  ]
},
{
  "@type":"HealthClub",
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
   ],
  "@id":"http://daveshouseofyoga.example.com/",
  "name":"Dave's House of Yoga",
  "address":{
    "@type":"PostalAddress",
    "streetAddress":"3986 Rivermark Pkwy",
    "addressLocality":"Santa Clara",
    "addressRegion":"CA",
    "postalCode":"95054",
    "addressCountry":"US"
  },
  "geo":{
    "@type":"GeoCoordinates",
    "latitude":37.3952149,
    "longitude":-121.9474023
  },
  "telephone":"+14085551135",
  "potentialAction":{
    "@type":"ReserveAction",
    "target":{
      "@type":"EntryPoint",
      "urlTemplate":"https://www.example.com/reserve?merchantId=20373",
      "inLanguage":"en-US",
      "actionPlatform":[
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/IOSPlatform",
        "http://schema.org/AndroidPlatform"
      ]
    },
    "result":{
      "@type":"Reservation",
      "name":"Book a class"
    }
  }
},
{
  "@type": "SoftwareApplication",
  "name": "Angry Birds",
  "operatingSystem": "ANDROID",
  "applicationCategory": "https://schema.org/GameApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "ratingCount": "8864"
  },
  "offers": {
    "@type": "Offer",
    "price": "1.00",
    "priceCurrency": "USD"
  }
},
{
 "@type": "WebPage",
 "name": "Quick Brown Fox",
 "speakable":
 {
  "@type": "SpeakableSpecification",
  "xpath": [
    "/html/head/title",
    "/html/head/meta[@name='description']/@content"
    ]
  },
 "url": "http://www.quickbrownfox_example.com/quick-brown-fox"
 },
 {
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.org/article"
  },
  "headline": "Article headline",
  "image": "https://example.org/thumbnail1.jpg",
  "datePublished": "2025-02-05T08:00:00+08:00",
  "dateModified": "2025-02-05T09:20:00+08:00",
  "author": {
    "@type": "Person",
    "name": "John Doe"
  },
  "publisher": {
     "name": "The Exemplary Times",
     "@type": "Organization",
     "logo": {
        "@type": "ImageObject",
        "url": "https://example.org/logo.jpg"
     }
  },
  "description": "A most wonderful article",
  "isAccessibleForFree": "False",
  "hasPart":
    {
    "@type": "WebPageElement",
    "isAccessibleForFree": "False",
    "cssSelector" : ".paywall"
    }
},
{
  "@type": "VideoObject",
  "name": "Introducing the self-driving bicycle in the Netherlands",
  "description": "This spring, Google is introducing the self-driving bicycle in Amsterdam, the world’s premier cycling city. The Dutch cycle more than any other nation in the world, almost 900 kilometres per year per person, amounting to over 15 billion kilometres annually. The self-driving bicycle enables safe navigation through the city for Amsterdam residents, and furthers Google’s ambition to improve urban mobility with technology. Google Netherlands takes enormous pride in the fact that a Dutch team worked on this innovation that will have great impact in their home country.",
  "thumbnailUrl": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
   ],
  "uploadDate": "2016-03-31T08:00:00+08:00",
  "duration": "PT1M54S",
  "contentUrl": "https://www.example.com/video/123/file.mp4",
  "embedUrl": "https://www.example.com/embed/123",
  "interactionCount": "5647018"
}
  ]
}
</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-2455012527087318",
          enable_page_level_ads: true
     });
</script>
<style>
 @font-face {
	font-family: kirvy;
        font-display: swap;
	src: url('https://cdn.jsdelivr.net/gh/theabbie/example@gh-pages/files/kirvy.otf');
}
html {scroll-behavior: smooth;}
* {font-size: 15px; letter-spacing: 6px; word-spacing: 12px; line-height: 125%;}
body {margin: 0 0 0 0; background-color: rgb(248,248,248); color: black; font-family: kirvy;}
.header {display: block; width: 100%; text-align: center; padding: 20 0 20 0;font-weight: bolder;font-size: 30px; background-color: rgb(72,113,197); color: white;}
</style>
</head>
<body>
<div class="header">@TheAbbie</div>
<div class="list-group list-group-flush">
<a class="list-group-item list-group-item-action" href="https://www.patreon.com/theabbie"><i class="fab fa-patreon" style="font-size:24px;"></i><b> Become a Patron!</b></a>
<a class="list-group-item list-group-item-action" href="https://youtube.com/theabbie"><i class="fab fa-youtube" style="font-size:24px;"></i><b> Youtube</b></a>
<a class="list-group-item list-group-item-action" href="https://m.facebook.com/abhishek.vice.versa"><i class="fab fa-facebook-square" style="font-size:24px;"></i><b> Facebook</b></a>
<a class="list-group-item list-group-item-action" href="https://www.instagram.com/sasta_abbie/"><i class="fab fa-instagram" style="font-size:24px;"></i><b> Instagram</b></a>
<a class="list-group-item list-group-item-action" href="https://mobile.twitter.com/TheAbbiee"><i class="fab fa-twitter" style="font-size:24px;"></i><b> Twitter</b></a>
<a class="list-group-item list-group-item-action" href="https://github.com/theabbie"><i class="fab fa-github" style="font-size:24px;"></i><b> Github</b></a>
<a class="list-group-item list-group-item-action" href="https://www.linkedin.com/in/theabbie"><i class="fab fa-linkedin" style="font-size:24px;"></i><b> Linkedin</b></a>
<a class="list-group-item list-group-item-action" href="https://www.npmjs.com/~theabbie"><i class="fab fa-npm" style="font-size:24px;"></i><b> NPM</b></a>
<a class="list-group-item list-group-item-action" href="https://vk.com/id569817292"><i class="fab fa-vk" style="font-size:24px;"></i><b> VK</b></a>
<a class="list-group-item list-group-item-action" href="https://en.m.wikipedia.org/wiki/User:Theabbie"><i class="fab fa-wikipedia-w" style="font-size:24px;"></i><b> Wikipedia</b></a>
<a class="list-group-item list-group-item-action" href="mailto:abhishek7gg7@gmail.com"><i class="fas fa-envelope" style="font-size:24px;"></i><b> Mail</b></a>
<a class="list-group-item list-group-item-action" href="tel:+918928412138"><i class="fas fa-phone" style="font-size:24px;"></i><b> Phone</b></a>
<a class="list-group-item list-group-item-action" href="https://t.me/theabbie"><i class="fab fa-telegram" style="font-size:24px;"></i><b> Telegram</b></a>
<a class="list-group-item list-group-item-action" href="https://t.me/therawbot"><i class="fas fa-robot" style="font-size:24px;"></i><b> Telegram Bot</b></a>
<a class="list-group-item list-group-item-action" onclick="share()"><i class="fas fa-share-alt" style="font-size:24px;"></i><b> Share</b></a>
</div>
</body>
<script>
var scope = {
  scope: './'
};
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(
    'sw.js',
    scope
  ).then( function(serviceWorker) {
    console.log('successful');
  }).catch(function(error) {
    alert("error");
  });
} else {
  console.log('unavailable');
}
var path = document.referrer.split("https://theabbie.github.io/").reverse()[0];
fetch("https://api.github.com/repos/theabbie/theabbie.github.io/contents/"+path).then(value => value.json()).then(function(t) {
t.map(a=>[a.name,a.type]).forEach(function(x) {document.querySelector(".list-group").innerHTML+=`<a href="${path+x[0]}" ${x[1]=="dir"?'':'target="_blank"'} class="list-group-item list-group-item-action" oncontextmenu="(function(e) {window.open('${'https://github.com/theabbie/theabbie.github.io/blob/master/'+path+x[0]}','_blank');e.preventDefault();})()" style="word-break: break-all;">${x[1]=="dir"?'<i class="fas fa-folder" style="font-size:24px;"></i>':'<i class="fas fa-file-alt" style="font-size:24px;"></i>'}<b> ${x[0]}</b></a>`})
}).catch(function(err) {
location.href="https://theabbie.github.io/";
})
function share() {
if (navigator.share) {
  navigator.share({
      title: '@TheAbbie',
      text: '@TheAbbie',
      url: 'https://theabbie.github.io',
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
}
}
</script>
</html>`;
