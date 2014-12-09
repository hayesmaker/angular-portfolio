angular.module('portfolio')
  .factory('Articles', [function() {
    var articles = {

      model: [
        {
          title: "FLASH Heart of Vegas: iOS Free Casino Slots",
          date: 'Mar-Jul 2014',
          company: 'Product Madness',
          desc: "10 real Las Vegas casino slot games ported from Web to iOS using Adobe AIR SDK.  Actionscript, Starling 2D For GPU accelerated 2D Rendering. Top 10 new Facebook game of 2013",
          thumb: {
            src:'images/hov2.jpeg',
            size:'240x180'
          },
          link: 'https://itunes.apple.com/gb/app/heart-vegas-play-free-casino/id785537179?mt=8'
        },
        {
          title: 'HTML5 Demo: Slot Animation in Pixi.js',
          date: 'Jan 2014',
          company: 'Hayesaker Media',
          desc: 'CANVAS based HTML5 Slot reel animation demo. Demo is served by Node.js server, and is intended to demonstrate Flash quality Slot reel animation in native HTML5. Uses PIXI.js rendering engine.  Uses Require.js based AMD Module',
          thumb: {
            src:'images/slotsThumb.jpg',
            size:'209x135'
          },
          link: 'https://party-pokie.herokuapp.com/slots/'
        },
        {
          title: "HTML5 Demo: Conway's Game Of Life in Angular.js",
          date: 'Jan 2014',
          company: 'Hayesaker Media',
          desc: "HTML5 implementation of Conway's Game of Life, written with Angular.js.",
          thumb: {
            src:'images/gameOfLife.gif',
            size:'209x135'
          },
          link: 'http://andy-hayes.com/web/angular-game-of-life/'
        },
        {
          title: "HTML5 Baker Technology Software Engineer (Banking)",
          date: "Aug 2013 - Jan 2014",
          company: "Baker Technology",
          desc: "Building large scale big data front end system for major high street banks. Using Node, Grunt, CI, Typescript",
          thumb: {
            src: 'images/002_thumb.jpg',
            size: '235x135'
          },
          link: 'http://www.baker-technology.ltd.uk/'
        },
        {
          title: "HTML5 Beamly iOS, Android and Web",
          date: "Mar-Jun 2013",
          company: "Beamly",
          desc: "Writing interactive games and widgets to run on the Beamly website and mobile application.",
          thumb: {
            src: 'images/beamly.jpg',
            size: '400x258'
          },
          link: 'https://uk.beamly.com/'
        },
        {
          title: "HTML5 Sports Betting Web Application - Press Association",
          date: "Sep 2012 - Feb 13",
          company: "Press Association",
          desc: "Business to business web application for listing the Horse Racing schedules and recording real time live odds.  Generated feeds are then sent to most major book makers and the press for reporting.  Written as a single page web application in Backbone.js.  I worked as part of a small team, on most of the application's features.",
          thumb: {
            src: 'images/frankel.jpg',
            size: '400x271'
          },
          link: 'http://www.pressassociation.com/Sport/HorseRacing/Data/'
        },
        {
          title: "HTML5 Press distribution service - Press Association",
          date: "Sep 2012 - Feb 2013",
          company: "Press Association",
          desc: "Press Association's ambitious web based distribution tool for journalists.  The goal was to have one application for compiling news stories, press releases, and journalists' photographs by allowing them to upload stories and photos. Users could also browse 'packs' of existing media for stories and download them for their own newspaper or media outlet.  Front end used Backbone.js and server powered by Java Spring. I was working as part of a large team on both front and back end features, including the photo uploader and gallery.",
          thumb: {
            src: 'images/torch.jpg',
            size: '400x260'
          },
          link: 'http://www.pressassociation.com/BusinessPRServices/Distribution/'
        },
        {
          title: "UNITY3D Desert Robot Wars",
          date: "2012",
          company: "Hayesmaker Media",
          desc: "Shoot the marauding robots in beautifully rendered 3D thanks to Unity3D.",
          thumb: {
            src: 'images/robot.jpg',
            size: '175x135'
          },
          link: 'http://andy-hayes.com/unity/robotwars/desert_robot_wars.html'
        },
        {
          title: "FLASH Yazino: Synchronous multiplayer Facebook games.",
          date: "Sep 2010 - Aug 2012",
          company: "Yazino",
          desc: "Flash team lead position involved hiring a team of dedicated Flash game developers, integrating the art team closer to the development process using established best practices.  Coding many of Yazino's multiplayer games, and porting them to Android, using Adobe Flex and AIR SDK",
          thumb: {
            src: 'images/yazino.jpg',
            size: '400x252'
          },
          link: 'https://www.yazino.com/'
        },
        {
          title: "FLEX Demo: Particle Machine",
          date: "2011",
          company: "Hayesmaker Media",
          desc: "Customise Flash particle animations using this graphical interface created with Flex.",
          thumb: {
            src: "images/particleMachine.jpg",
            size: "175x131"
          },
          link: 'http://andy-hayes.com/hayesmaker_folio/swf/particleMachine/ParticleEngine.swf'
        },
        //review: http://www.winallpoker.com/online-craps-partycasino/
        {
          title: "FLASH 'Craps Pro': Real cash Craps for PartyCasino",
          date: "Apr-Sep 2010",
          company: "BWinParty",
          desc: "Senior Flash developer, and sole developer of Craps Pro, an award winning real cash Craps game, playable at PartyCasino. I Developed the front end including limitless dynamic dice roll animations, which had real collision based physics using JigLib (A 3D physics engine for Flash). Unavailable in US",
          thumb: {
            src: 'images/craps.jpg',
            size: '175x131'
          },
          link: 'http://www.partycasino.com/games/table-games/craps.html'
        },
        {
          title: "FLASH Amuso 'TriviaStar': Multiplayer cash quiz game for web.",
          date: "Oct 2009 - Mar 2010",
          company: "Amuso",
          desc: "I worked on a multiplayer quiz cash game for Social Media company Amuso. Based in Barcelona. Used Flex, Flash and Photoshop",
          thumb: {
            src: 'images/trivia.jpg',
            size: '400x307'
          },
          link: 'N/A'
        },
        {
          /*
           https://adaptcard.natwest.com/designer.aspx
           http://www.giftcardlab.com/designer.aspx
           http://www.capitalone.com/imagecard
           http://www.capitalone.com/creditcards
           https://revolvecard.rbs.co.uk/designer.aspx
           */
          title: "FLASH Bank card designer",
          date: "Aug 2008 – Oct 2009",
          company: "Serverside",
          desc: "A suite of credit card and gift card personalisation software, created for multiple clients such as RBS, Natwest, Capital One, ING, Gift Card lab and many more. Upload your own photo, or choose from themed galleries, create custom text and logos.",
          thumb: {
            src: 'images/card_design.jpg',
            size: '175x131'
          },
          link: 'https://adaptcard.natwest.com/designer.aspx'
        }, {
          title: "FLASH Pokerdice",
          date: "Mar–Jun 2008",
          company: "GameAccount Network",
          desc: "Pokerdice game written in Flash for multiple bookmaker clients including William Hill, SportingBet",
          thumb: {
            src: 'images/pokerdice.jpg',
            size: '175x131'
          },
          link: 'https://www.youtube.com/watch?v=W04oJr5QtsE'
        }
      ]


    };

    return articles;
  }
]);