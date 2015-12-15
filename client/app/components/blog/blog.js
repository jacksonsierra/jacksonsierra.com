'use strict';

angular.module('jacksonSierra.blog', ['ngSanitize'])

.controller('BlogCtrl', ['$scope', function($scope) {
  $scope.blogArray = [
      {
          'headline': 'The Lean Startup Conference 2015'
        , 'subhead':  'Takeaways from a millenial'
        , 'date': new Date('2015-11-23')
        , 'dateFormatted': moment('2015-11-23').format('dddd, MMMM Do YYYY')
        , 'tags': [
              'ENTREPRENEURSHIP'
            , 'MANAGEMENT'
            , 'DATA'
          ]
        , 'chrLimit': 815
        , 'body': 'The <a target="_blank" href="http://leanstartup.co/conferences/lean-startup-conference-2015/">2015 Lean Startup Conference</a>, based on Eric Ries\' <a href="http://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898/ref=sr_1_1?ie=UTF8&qid=1449682168&sr=8-1&keywords=lean+startup"><em>The Lean Startup</em></a>, was held in San Francisco, California from November 16th to 19th, 2015.<br>
                  <br>
                  Billed as "a gathering for entrepreneurs, innovators, and thought leaders from across sectors and structures...featuring the best of the Lean Startup community," the conference focused on proving Lean principles exist in companies as large and diverse as General Electric or the IRS, rather than just small tech startups used in many of the book\'s case studies.<br>
                  <br>
                  <blockquote><p>What are Lean principles?</p></blockquote>
                  In my view, the Lean methodology is an extension of the Scientific Method that develops a solution to a problem by repeating the following steps during development:<br>
                  <br>
                  <ol>
                    <li>Think of a solution to a problem</li>
                    <li>Prioritize assumptions about that solution</li>
                    <li>Hypothesize what happens to highest priority assumptions with your solution</li>
                    <li>Test hypotheses/run experiments</li>
                    <li>Verify hypotheses and assumptions with data</li>
                  </ol>
                  Great emphasis is placed on those final two points: <strong>testing hypotheses</strong> and <strong>making decisions with the data</strong> from those tests.  More tactically, the methodology encourages any solution to be driven by highly cross-functional teams so to encourage ideation from different backgrounds.<br>
                  <br>
                  That said, the rest of this post will focus on the main points and quotes I took from the sessions attended and classify them according to the above list.<br>
                  <br>
                  <blockquote><p>Find a pain or, even better, a workaround</p></blockquote>
                  This sentiment was echoed in a workshop designed for managers/executives, a session on bringing Lean to General Electric, and from a product manager for <a target="_blank" href="https://itunes.apple.com/us/app/adobe-voice-show-your-story/id852555131?mt=8">Adobe Voice</a> for iPad.  While noteworthy for its prevalence, it wasn\'t clear if this was advice for actors of change to find their next project, or affirmation of a worthwhile, yet pre-existing initiative.  Perhaps it can be both, but in any event, it\'s guidance to think of a solution to a problem.<br>
                  <br>
                  <blockquote><p>Build the right stuff, not just stuff</p></blockquote>
                  Or in other words, should we build, rather than can we build?  In today\'s day and age, particularly in the technology industry, virtually anything can be built.  The speakers wanted to affirm the need to prioritize assumptions and then validate whether or not the envisaged solution actually matters to the target audience.<br>
                  <br>
                  <blockquote><p>The Minimum Viable Product (MVP) is a process, not a one-time event</p></blockquote>
                  Most would agree a solution to a complex, multi-faceted problem is not the first thing that pops into one\'s mind.  Instead, it starts with something based on requirements gathered that is continually fine-tuned from input of stakeholders and customers into a final offering.<br>
                  <br>
                  This statement says something different though — rather than working for long periods of time perfecting an intermediate stage of a solution, soliciting feedback amongst internal or external persons, and then continuing, Lean argues that each product decision or feature should be the bare minimum of what is required to get opinions from early adopters.  Based on that feedback from early adopters, product decisions can then be made and new assumptions can be prioritized and formed into the next stage of the MVP.<br>
                  <br>
                  Perhaps the most interesting part of this process is that first iteration.  The testimony from speakers corroborated many of the case studies in the book — Lean advises to test the result or need of the product rather than the usability of the product itself, especially in the beginning.  The first MVP of that Adobe Voice app used for producing professional-looking home videos was simply a slideshow of still pictures with a voice over taken from a different professionally-produced video — there wasn\'t even a product.  That said, it provided the product manager ‘validated learning\' of whether individuals or corporations identified with the solution.<br>
                  <br>
                  <blockquote>
                    <p>"Oh the HealthCare.gov plan…I\'m sure it will work out great for you. — Eric Ries"</p>
                  </blockquote>
                  We\'re a couple of years removed from the <a target="_blank" href="http://www.nytimes.com/2013/10/02/us/health-insurance-marketplaces-open.html">beleaguered launch</a> of the website Americans were to use to sign up for health insurance under the <em>Affordable Care Act</em>.  Post-mortem analyses of Healthcare.gov\'s development found:<br>
                  <br>
                  <ul>
                    <li>Big requirements gathering upfront</li>
                    <li>Everyone working in separate, individual silos</li>
                    <li>Absence of integration tests</li>
                  </ul>
                  If we return to our first list of Lean principles, we see that each of the attributes of Healthcare.gov\'s development are anathema to Lean.  Let\'s go one by one:<br>
                  <br>
                  <blockquote class="blockquote-reverse"><p>Big requirements gathering upfront</p></blockquote>
                  Big requirements gathering begets a gigantic MVP to satisfy all those requirements, which would likely take a very long time, perhaps so long that the requirements may even change (HealthCare.gov took ~3 years to develop).  Lean would advise to hone in on the assumptions critical for understanding the website\'s viability, develop whatever the bare minimum is to test those most important assumptions, and further the product by building functionality and testing incremental assumptions.  HeathCare.gov did the opposite.<br>
                  <br>
                  <blockquote class="blockquote-reverse"><p>Everyone working in separate, individual silos</p></blockquote>
                  As mentioned previously, Lean advises for fully-dedicated, cross-functional teams in tackling any problem.  The thinking is it incubates ideas from different perspectives and encourages communication from stakeholders at every part of the solution.  The latter point is vital in ensuring the end-to-end integration tests are facilitated throughout the project\'s development, which brings us to the final point.<br>
                  <br>
                  <blockquote class="blockquote-reverse"><p>Absence of integration tests</p></blockquote>
                  Widely maligned as one of the inexplicable failures of HealthCare.gov, contractors responsible for the development <a target="_blank" href="http://energycommerce.house.gov/hearing/ppaca-implementation-failures-didn%E2%80%99t-know-or-didn%E2%80%99t-disclose">spent only two weeks testing</a> whether the site worked from start to finish, out of a development period of three years.  Had the project used Lean, testing would\'ve occurred at each MVP demonstrated to customers to see where the holes burrowed.<br>
                  <br>
                  Overall, the conference was a good experience, but like with most things, it is highly recommended to read the book first, <a href="http://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898/ref=sr_1_1?ie=UTF8&qid=1449682168&sr=8-1&keywords=lean+startup"><em>The Lean Startup</em></a> by Eric Ries, based on the teachings of <a target="_blank" href="https://en.wikipedia.org/wiki/Steve_Blank">Steve Blank</a>.'
      }
    , {
          'headline': 'My Plan for iOS'
        , 'subhead': 'A web developer switching to mobile'
        , 'date': new Date('2015-11-27')
        , 'dateFormatted': moment('2015-11-27').format('dddd, MMM Do YYYY')
        , 'tags': [
              'iOS'
            , 'UNSTRUCTURED LEARNING'
            , 'AUTONOMOUS LEARNING'
          ]
        , 'chrLimit': 355
        , 'body': 'I played a game with myself the other day as I was walking along Market Street in San Francisco.  It was around 5:30pm on a work day, so the streets were quite full with SF foot traffic.<br>
                  <br>
                  The game was pretty simple — count the number of individuals walking who <em>were not</em> using a smartphone of some sort.  I assumed those listening to headphones were using their phone to do so, which seemed reasonable given it was San Francisco.<br>
                  <br>
                  I was blown away.  On 1st Street between Market and Mission, I probably passed 20 or so people.  Only three of them weren\'t using their phone, and two of those three were in conversation.  The rest were either in the half walking-half texting disaster zone, strapped in with headphones walking to point B, or on the phone with Mom.<br>
                  <br>
                  Albeit a silly anecdote, this story draws on a couple of interesting phenomena we see with mobile, namely:<br>
                  <br>
                    <ul>
                      <li><strong>Ubiquity</strong> — everyone will soon have at least one of these devices, with emerging markets being a crucial new flow</li>
                      <li><strong>Price</strong> — Mobile devices are typically cheaper than their desktop or laptop equivalents, which partly explains the ubiquity point</li>
                      <li><strong>Capabilities</strong> — the amount of RAM in a smartphone today is greater than those of desktops just a decade earlier, enabling powerful experiences</li>
                    </ul>
                  A compelling argument on the power of the mobile experience versus traditional means begins to unfold in light of just these few observations.  I\'ll suspend further pontification and assume we agree that mobile is worth pursuing.<br>
                  <br>
                  According to a Pew Research Center study from this year, <a href="http://www.pewinternet.org/2015/04/01/us-smartphone-use-in-2015/">approximately two-thirds of Americans own smartphones</a>, putting the gross US figure over 200 million devices.  Next we\'ll look at the market share of the major smartphone platforms for those 200M+ devices (<a href="http://www.statista.com/statistics/266572/market-share-held-by-smartphone-platforms-in-the-united-states/">source</a>):<br>
                  <br>
                  <h4>US Market Share for Smartphone Users, 2012-2015</h4>
                  <a href="http://www.statista.com/statistics/266572/market-share-held-by-smartphone-platforms-in-the-united-states/"><img src="../img/os-breakdown.min.png" alt="Statistic: Subscriber share held by smartphone operating systems in the United States from January 2012 to October 2015 | Statista" style="width: 100%; height: auto !important; max-width:1000px;-ms-interpolation-mode: bicubic;"/></a><br />Find more statistics at <a href="http://www.statista.com">Statista</a><br>
                  <br>
                  Perhaps surprising to some, more Americans have Android than Apple iOS devices. Thus economically-speaking, one interested in programming a mobile experience toward a US audience should choose Android if they want to reach the most users and are, at this point, specializing in just one platform.<br>
                  <br>
                  What the above graph also shows, however, is Apple\'s market share has increased north of 25% over the last three years, perhaps eating away at RIM\'s Blackberry holdouts, while Android has stayed flat.  And if we drill down into what versions of Android and iOS users are on globally, the story begins to look very complicated for Android (<a href="http://opensignal.com/reports/2015/08/android-fragmentation/">source</a>):<br>
                  <br>
                  <h4>Breakdown of Global Android and iOS Users by Version, August 2015</h4><br>
                  <div style="display:inline-block">
                    <h5>Android</h5>
                    <img style="height:200px;margin-right:15px" src="../img/android-breakdown.min.png" />
                  </div>
                  <div style="display:inline-block">
                    <h5>iOS</h5>
                    <img style="height:200px" src="../img/ios-breakdown.min.png" />
                  </div><br>
                  <br>
                  Thus if we liberally assume the same fragmentation of global Android users prevails in the US, then the effective market share for Android latest operating system versus iOS\'s is much lower.<br>
                  <br>
                  Long story short, I\'m starting off with iOS as my first foray into mobile...<br>
                  <br>
                  <blockquote><p>So, how do we learn iOS?</p></blockquote>
                  That will be the subject of my series of blog posts on the subject.  They will cover my journey through this process, including interviews with those in the field, choices on which classes to take, and opinions on projects undertaken.<br>
                  <br>
                  Thanks for your time today, and if interested please see my next post on this journey, "Learning iOS — Objective-C versus Swift?"'
      }
  ];
}])
.directive('blogPost', function() {
  return {
      restrict: 'E'
    , scope: {
          'postChrLimit': '='
        , 'postBody': '='
        , 'postReadMore': '='
      }
    , templateUrl: './html/components/blog/blog-post.min.html'
    , controller: ['$scope', '$sce', PostCtrl]
  };
});

function PostCtrl($scope, $sce) {
  $scope.postSnippet = $sce.trustAsHtml($scope.postBody.substr(0, $scope.postChrLimit));

  $scope.postBody = $sce.trustAsHtml($scope.postBody);

  $scope.togglePost = function() {
    $scope.postReadMore = !$scope.postReadMore;
  };
}
