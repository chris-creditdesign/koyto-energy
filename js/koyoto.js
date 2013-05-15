(function() {
	    var init = function($)	
	    {

// First nominate the div to hold the Raphael svg elements
var r = Raphael("graph", 595, 995);

// Set variables to use for animation speed and easing etc... so they can easily be updated
var speed = 300,
easing = "<",
barX = 1,
barY = 0,
barHeight = 10,
barSpace = 20,
scaleFactor = 1,
labelLeftLimit = 390,
labelYAdjust = -1,
labelXAdjust = 5,
resource = 0,
resourceColour = ["#666","#8D97B9","#B5C0DE","#F6D976","#A38C6D"],
allBars = r.set(),
newBarCount = 0;
// Create another array to hold an amended copy of the results array depending on which countries are active  or true
tempResults = [];

var allLines = r.set();
allLines.push(
// Create a set of lines for the scale of the graph
line0 = r.path("M0 0 L0 995").attr({stroke: '#000', 'stroke-width': 1}),
line1 = r.path("M100 0 L100 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line2 = r.path("M200 0 L200 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line3 = r.path("M300 0 L300 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line4 = r.path("M400 0 L400 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line5 = r.path("M500 0 L500 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line6 = r.path("M600 0 L600 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line7 = r.path("M700 0 L700 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line8 = r.path("M800 0 L800 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line9 = r.path("M900 0 L900 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line10 = r.path("M1000 0 L1000 995").attr({stroke: '#999', 'stroke-width': 1}),
line11 = r.path("M1100 0 L1100 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line12 = r.path("M1200 0 L1200 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line13 = r.path("M1300 0 L1300 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line14 = r.path("M1400 0 L1400 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line40 = r.path("M4000 0 L4000 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line16 = r.path("M1600 0 L1600 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line17 = r.path("M1700 0 L1700 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line18 = r.path("M1800 0 L1800 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line19 = r.path("M1900 0 L1900 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line20 = r.path("M2000 0 L2000 995").attr({stroke: '#999', 'stroke-width': 1}),
line21 = r.path("M2100 0 L2100 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line22 = r.path("M2200 0 L2200 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line23 = r.path("M2300 0 L2300 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line24 = r.path("M2400 0 L2400 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line25 = r.path("M2500 0 L2500 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line26 = r.path("M2600 0 L2600 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line27 = r.path("M2700 0 L2700 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line28 = r.path("M2800 0 L2800 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line29 = r.path("M2900 0 L2900 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line30 = r.path("M3000 0 L3000 995").attr({stroke: '#ddd', 'stroke-width': 1}),
line31 = r.path("M3100 0 L3100 995").attr({stroke: '#ddd', 'stroke-width': 1})
);

var allSmallLines = r.set();
allSmallLines.push(
// Create a set of lines for the scale of the graph
smallLine0 = r.path("M0 0 L0 995").attr({stroke: '#000', 'stroke-width': 1}),
smallLine1 = r.path("M10 0 L10 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine2 = r.path("M20 0 L20 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine3 = r.path("M30 0 L30 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine4 = r.path("M40 0 L40 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine5 = r.path("M50 0 L50 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine6 = r.path("M60 0 L60 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine7 = r.path("M70 0 L70 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine8 = r.path("M80 0 L80 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine9 = r.path("M90 0 L90 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine10 = r.path("M100 0 L100 995").attr({stroke: '#999', 'stroke-width': 1}),
smallLine11 = r.path("M110 0 L110 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine12 = r.path("M120 0 L120 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine13 = r.path("M130 0 L130 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine14 = r.path("M140 0 L140 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine40 = r.path("M400 0 L400 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine16 = r.path("M160 0 L160 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine17 = r.path("M170 0 L170 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine18 = r.path("M180 0 L180 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine19 = r.path("M190 0 L190 995").attr({stroke: '#ddd', 'stroke-width': 1}),
smallLine20 = r.path("M200 0 L200 995").attr({stroke: '#999', 'stroke-width': 1})
).attr({'opacity': 0});



// One big array holding smaller arrays with all the results data that will be used to set the heights of the bars 
 var results = [  
                    [0,15.6,25.2,0,0.1,"Algeria","africa",true],
                    [1.1,28.1,41.9,1.4,9.4,"Argentina","samerica",true],
                    [49.8,45.9,23,0,4.6,"Australia","asia",true],
                    [2.5,12.5,8.5,0,8.5,"Austria","europe",true],
                    [2.1,33.7,14.4,10.9,2.1,"Belgium","europe",true],
                    [13.9,120.7,24,3.5,104.7,"Brazil","samerica",true],
                    [21.8,103.1,94.3,21.4,89.6,"Canada","namerica",true],
                    [5.3,15.2,4.7,0,5.7,"Chile","samerica",true],
                    [1839.4,461.8,117.6,19.5,174.7,"Mainland China","asia",true],
                    [4.3,11.7,8.1,0,11.1,"Colombia","samerica",true],
                    [19.2,9.1,7.6,6.4,1.7,"Czech Republic","europe",true],
                    [0.9,33.7,44.7,0,3.4,"Egypt","africa",true],
                    [3.3,10.5,3.2,5.3,5.4,"Finland","europe",true],
                    [9,82.9,36.3,100,14.6,"France","europe",true],
                    [77.6,111.5,65.3,24.4,27.6,"Germany","europe",true],
                    [7.3,17.2,4.1,0,1.9,"Greece","europe",true],
                    [7.7,18.1,2.7,0,0,"Hong Kong","asia",true],
                    [295.6,162.3,55,7.3,39,"India","asia",true],
                    [44,64.4,34.1,0,5.6,"Indonesia","asia",true],
                    [0.8,87,138,0,2.8,"Iran","middleeast",true],
                    [15.4,71.1,64.2,0,17.8,"Italy","europe",true],
                    [117.7,201.4,95,36.9,26.6,"Japan","asia",true],
                    [30.2,10.2,8.3,0,1.8,"Kazakhstan","europe",true],
                    [0,19,14.6,0,0,"Kuwait","middleeast",true],
                    [15,26.9,25.7,0,1.7,"Malaysia","asia",true],
                    [9.9,89.7,62,2.3,9.9,"Mexico","namerica",true],
                    [7.8,50.1,34.3,0.9,2.7,"Netherlands","europe",true],
                    [0.6,11.1,3.6,0,28,"Norway","europe",true],
                    [4.2,20.4,35.2,0.8,6.9,"Pakistan","asia",true],
                    [8.3,11.8,3.2,0,4.4,"Philippines","asia",true],
                    [59.8,26.3,13.8,0,2.8,"Poland","europe",true],
                    [0,8,21.4,0,0,"Qatar","middleeast",true],
                    [7.1,9,12.5,2.7,3.6,"Romania","europe",true],
                    [90.9,136,382.1,39.2,37.4,"Russia","europe",true],
                    [0,127.8,89.3,0,0,"Saudi Arabia","middleeast",true],
                    [0,62.5,7.9,0,0,"Singapore","asia",true],
                    [92.9,26.2,3.8,2.9,0.5,"South Africa","africa",true],
                    [79.4,106,41.9,34,1.8,"South Korea","asia",true],
                    [14.9,69.5,28.9,13,19.6,"Spain","europe",true],
                    [2,14.5,1.1,13.8,19.1,"Sweden","europe",true],
                    [41.6,42.8,14,9.5,2.1,"Taiwan","asia",true],
                    [13.9,46.8,41.9,0,3.4,"Thailand","asia",true],
                    [32.4,32,41.2,0,13.1,"Turkey","europe",true],
                    [42.4,12.9,48.3,20.4,2.4,"Ukraine","europe",true],
                    [0,30.5,56.6,0,0,"United Arab Emirates","middleeast",true],
                    [30.8,71.6,72.2,15.6,7.9,"United Kingdom","europe",true],
                    [501.9,833.6,626,188.2,119.6,"United States","namerica",true],
                    [1.3,4.4,44.2,0,2.3,"Uzbekistan","europe",true],
                    [2,38.3,29.8,0,18.9,"Venezuela","samerica",true],
                    [15,16.5,7.7,0,6.7,"Vietnam","asia",true]
                ];

function createBars() {

newBarCount = 0;

$('#labels').html("");

allBars.remove();
tempResults = [];

// A loop is used to itterate through the rects and animate into a new position that is concucted using the values from the results array
// The rects are given a size and a label

for (var i = 0; i < results.length; i++) {

          if(results[i][7]) {
            var newBar = r.rect(barX, barY, (results[i][resource] * scaleFactor), barHeight).attr({fill: resourceColour[resource], 'stroke-width': 0}).transform("T 0," + (newBarCount * barSpace));

            if ( (results[i][resource] * scaleFactor) > labelLeftLimit ) {
              $('#labels').append("<span style='top:" + ((newBarCount * barSpace) + labelYAdjust) + "px; left: " + labelLeftLimit + "px'><strong>" + results[i][5] + "</strong> <span class='amount'>" + results[i][resource] + "</span></span>");
            } else {
              $('#labels').append("<span style='top:" + ((newBarCount * barSpace) + labelYAdjust) + "px; left:" + ((results[i][resource] * scaleFactor) + labelXAdjust) + "px'><strong>" + results[i][5] + "</strong> <span class='amount'>" + results[i][resource] + "</span></span>");
            }

            // If the country is true keep a copy of it in the tempResults array for use in animating the bars
            tempResults.push(results[i]);

            allBars.push(newBar);
            newBarCount++;
          }  
        }

        updateAxis();

}

function updateAxis() {

        // Create a 
        var graphHeight = (newBarCount * (barSpace));
        
        // Resize and reposition the lines 
        // This could sit in the switch statment below but is perhaps easier to understand here
        if (scaleFactor <= 1) {

          for (var i = 0; i < allLines.length; i++) {
                  allLines[i].animate({path: "M" + (i * scaleFactor * 100)  + " 0 L" + (i * scaleFactor * 100) + " " + graphHeight  }, speed, easing);
          }
          for (var i = 0; i < allSmallLines.length; i++) {
                  allSmallLines[i].animate({path: "M" + (i * scaleFactor * 10)  + " 0 L" + (i * scaleFactor * 10) + " " + graphHeight  }, speed, easing, function() {
                      allSmallLines.attr({'opacity':0});
                  });
          }
          
        } else if (scaleFactor > 1) {

          for (var i = 0; i < allLines.length; i++) {
                  allLines[i].animate({path: "M" + (i * scaleFactor * 100)  + " 0 L" + (i * scaleFactor * 100) + " " + graphHeight  }, speed, easing);
          }
          for (var i = 0; i < allSmallLines.length; i++) {
                  allSmallLines[i].animate({path: "M" + (i * scaleFactor * 10)  + " 0 L" + (i * scaleFactor * 10) + " " + graphHeight  }, speed, easing, function() {
                      allSmallLines.attr({'opacity':1});
                  });
          }

        }

        // Resize the raphael canvas and the containing DIVs to the new graph height value
        r.setSize(600, graphHeight);
        $('#graph').css('height', graphHeight);
        $('#labels').css('height', graphHeight);
        $('#holder').css('height', graphHeight + 60);


        
        for (var i = 0; i < $("#scale > span").length; i++) {
                $("#scale > span").eq(i).css('left',(i * scaleFactor * 100));
        }

        for (var i = 0; i < $("#smallScale > span").length; i++) {
                $("#smallScale > span").eq(i).css('left',(i * scaleFactor * 10));
        }

        // Adjust the scale box and postion the axis labels depending upon the scale factor
        switch (scaleFactor) {

          case 11 :
              $(".scaleBox").css('background-color', '#fff').eq(7).css('background-color', '#999');
              $("#smallScale > span").css('opacity',1);
              $("#scale > span").css('opacity',0);
              break;
          case 9 :
              $(".scaleBox").css('background-color', '#fff').eq(6).css('background-color', '#999');
              $("#smallScale > span").css('opacity',1);
              $("#scale > span").css('opacity',0);
              break;
          case 7 :
              $(".scaleBox").css('background-color', '#fff').eq(5).css('background-color', '#999');
              $("#smallScale > span").css('opacity',1);
              $("#scale > span").css('opacity',0);
              break;
          case 5 :
              $(".scaleBox").css('background-color', '#fff').eq(4).css('background-color', '#999');
              $("#smallScale > span").css('opacity',0).filter(':nth-child(5n+1)').css('opacity',1);
              $("#scale > span").css('opacity',0);
              break;
          case 3 :
              $(".scaleBox").css('background-color', '#fff').eq(3).css('background-color', '#999');
              $("#smallScale > span").css('opacity',0).filter(':nth-child(5n+1)').css('opacity',1);
              $("#scale > span").css('opacity',0);
              break;
          case 1 :
              $(".scaleBox").css('background-color', '#fff').eq(2).css('background-color', '#999');
              $("#smallScale > span").css('opacity',0);
              $("#scale > span").css('opacity',1);
              break;
          case 0.6 :
              $(".scaleBox").css('background-color', '#fff').eq(1).css('background-color', '#999');
              $("#smallScale > span").css('opacity',0);
              $("#scale > span").css('opacity',1);
              break;
          default:
              $(".scaleBox").css('background-color', '#fff').eq(0).css('background-color', '#999');
              $("#smallScale > span").css('opacity',0);
              $("#scale > span").css('opacity',0).filter(':nth-child(5n+1)').css('opacity',1);
              break;  
        }
}

function refreshBars() {
        for (var i = allBars.length - 1; i >= 0; i--) {
          allBars[i].remove();
          allBars.pop();
        };
        createBars();
}


function animateBars() {
        // iterate through the bars and change the width and the scale based on the resource and scaleFactor vars

        for (var i = 0; i < allBars.length; i++) {

                  allBars[i].animate({width: (tempResults[i][resource] * scaleFactor), fill: resourceColour[resource]  }, speed, easing);



                  if ( (tempResults[i][resource] * scaleFactor) > labelLeftLimit ) {
                    $('#labels > span').eq(i).animate({left: labelLeftLimit }).find('.amount').html(tempResults[i][resource]);
                    
                  } else {
                    $('#labels > span').eq(i).animate({left: ((tempResults[i][resource] * scaleFactor) + labelXAdjust)}).find('.amount').html(tempResults[i][resource]);
                  }
            }

        updateAxis();
}


// These are the buttons/links that call the animateBars or the resetBars function and change the colours of the bars 

$('.country').bind('click', function() {    

    var thisCountry = $(this).index('.country');

    if ( $(this).hasClass('off') ) {
      $(this).removeClass('off').addClass('on');
      results[thisCountry].pop(); 
      results[thisCountry].push(true);
    } else {
      $(this).removeClass('on').addClass('off');
      results[thisCountry].pop();
      results[thisCountry].push(false);
    }

    refreshBars(); 

});

$('.continent').bind('click', function() {

    var selectedContinent = $(this).data('continent');
  
    if ( $(this).hasClass('off') ) {
      $(this).removeClass('off').addClass('on');
      for (var i = 0 ; i < $('.country').length ; i++) {

          if (selectedContinent === results[i][6] ) {
            results[i].pop();
            results[i].push(true);
            $('.country').eq(i).removeClass('off').addClass('on'); 
          }
      }
    } else {
      $(this).removeClass('on').addClass('off');
      for (var i = 0 ; i < $('.country').length ; i++) {

        if (selectedContinent === results[i][6] ) {
          results[i].pop();
          results[i].push(false);
          $('.country').eq(i).removeClass('on').addClass('off');
        }
      }
    }

    // Add special case for the all countries button
    if ( $(this).hasClass('all') && $(this).hasClass('off')  ) {

      for (var i = 0 ; i < $('.country').length ; i++) {
            results[i].pop();
            results[i].push(false);
            $('.country').eq(i).removeClass('on').addClass('off'); 
      }

      for (var i = 1; i < $('.continent').length; i++) {
           if ( $('.continent').eq(i).hasClass('on') ) {
              $('.continent').eq(i).removeClass('on').addClass('off');
          } 
      }
    } else if ( $(this).hasClass('all') && $(this).hasClass('on')  ){

      for (var i = 0 ; i < $('.country').length ; i++) {
          results[i].pop();
          results[i].push(true);
          $('.country').eq(i).removeClass('off').addClass('on');
      }

      for (var i = 1; i < $('.continent').length; i++) {
           if ( $('.continent').eq(i).hasClass('off') ) {
              $('.continent').eq(i).removeClass('off').addClass('on');
          } 
      }
    };

    refreshBars(); 

});

//add the click event to each of the fuel type icons
$('.fuelType > .icons > div').bind('click', function(e) {
        
        /* Use the index value of the div to select the correct values from the resource 
        * and the resource colour arrays
        */
        resource = $(this).index();

        // Add a box shaddow and move the background image into view for the active button
        $(".fuelType > .icons > div").css({'-moz-box-shadow':'0px 0px 0px 0px #000','-webkit-box-shadow':'0px 0px 0px 0px #000','box-shadow':'0px 0px 0px 0px #000'});
        $(this).css({'-moz-box-shadow':'0px -4px 0px 0px #000','-webkit-box-shadow':'0px -4px 0px 0px #000','box-shadow':'0px -4px 0px 0px #000'});



        animateBars();

        e.preventDefault();
        return false;
});


$('#zoomIn').bind('click', function(e) {
        
        if (scaleFactor < 10 && scaleFactor >= 1 ){
          scaleFactor += 2;
          animateBars();
        } else if (scaleFactor < 1 ) {
          scaleFactor += .4;
          animateBars();
        }
        e.preventDefault();
        return false;
});

$('#zoomOut').bind('click', function(e) {
        
        if (scaleFactor > 1 ){
          scaleFactor -= 2;
          animateBars();
        } else if (scaleFactor <= 1 && scaleFactor > .4 )  {
          scaleFactor -= .4;
          animateBars();
        }
        e.preventDefault();
        return false; 
});

$(".scaleBox").bind('click', function(e) {

        console.log($(this).index());

        switch ($(this).index()) {
          case 0:
            scaleFactor = 0.2;
            animateBars();
            break;
          case 1:
            scaleFactor = 0.6;
            animateBars();
            break;
          case 2:
            scaleFactor = 1;
            animateBars();
            break;
          case 3:
            scaleFactor = 3;
            animateBars();
            break;
          case 4:
            scaleFactor = 5;
            animateBars();
            break;
          case 5:
            scaleFactor = 7;
            animateBars();
            break;
          case 6:
            scaleFactor = 9;
            animateBars();
            break;
          case 7:
            scaleFactor = 11;
            animateBars();
            break;
        }

        e.preventDefault();
        return false; 
}).hover( function (){
    $(this).css('opacity', .5)}, function() {
    $(this).css('opacity', 1)}
    );


$('#country').bind('click', function(e) {

        $('#checkBoxes').slideToggle();

        e.preventDefault();
        return false; 
});


createBars();

	    
		};

    setTimeout(function()
    {
    if (typeof jQuery !== 'undefined')
    {
      init(jQuery);
    } else
    {
      setTimeout(arguments.callee, 60);
    }
    }, 60);
    
    
})();	