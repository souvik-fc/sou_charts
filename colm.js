
function sou_charts(col)
{
	
	      
	 
	  var h = col.height;

var paper = Raphael(0,0,col.width+300,h+300);

var t=rectangle(200,100,col.width,h).attr({'stroke':'blue',"stroke-width":4});;

 var l= col.data.length;
	
	  var max = col.data[0].val;
	  
	  for( k=0; k<l; k++)
	  {
        if( col.data[k].val> max )
        	
        	max = col.data[k].val;
	  }  
	 



        px = p1x = 200;

        py = p1y = 100 + h;

  function yAxis_caption()
  
      { 
 
  
         paper.text(px-80,(py+100)/2,col.yAxis).attr({"font-size":20}).rotate(-90,px-80,(py+100)/2); 
 
      }

 function xAxis_caption()
    
     {

        paper.text((2*px+col.width)/2, py+80, col.xAxis)
 
                                               .attr({"text-anchor": "middle"})
                                                 .attr({"font-size":30});

     }
//console.log(col.type);

 function colm_charts()
 {
       
        var w = col.width/( 2*l + 1 );  //width of the bar                                  

       for(var i = 0 ; i <l ; i++)

          {

	        mvline ( px , py  );
	
	        px = px + w;

	        if( h > max )

	        bar( px , py-(col.data[i].val *((h/max)-.2)) , w , col.data[i].val*((h/max)-.2), col.data[i].label, col.data[i].val);
	
	         else

	         bar( px, py-(col.data[i].val /(( max/h)+.2)) , w , col.data[i].val/((max/h)+.2) , col.data[i].label, col.data[i].val );	
	
	         px = px + w;
	


}

 colmchart_structure();
 
}

                                                

function bar(px , py , l , x , v, value)

       {
          
var m=1;
	   var e = paper.rect ( px , py+0, l, x-0).attr({fill:"#590E15"}).data("i",value)
	   .mouseover(function(){this.attr("title",this.data("i")).attr("fill",'red')})
	   .mouseout(function(){this.attr("fill",'blue')}).click(function(){
		 
		   this.attr({fill:"#00"+m+"23E"});
		 //  var m=Math.ceil(Math.random()*10);
		   console.log(m);
		   //events(e,m);
		   m++;
		   if(m===9)
		   	m=1;
	   });
	
	       paper.text( px + l/2 , py + 10 +0, value ).attr({stroke:'yellow'});
	
	        paper.text( px + l/2 , py + x + 20 , v)
	                                     
	                                      .attr({"font-size":15})
	                                     
	                                      .rotate(-90 , px + l/2+6 , py + x + 30);

        }

function mvline( px , py  )
     
        {

         paper.path( "M" + px + " " + py + "L" + px + " " + py );
 
       }

function colmchart_structure()

      {
         var j;

         var k = max % 10;
     
          k = 10 - k;

          k = max + k;

          k = k / 5 ;

          console.log(k);

          var dif=h / 5;



      for( i = 0, j = 0; i<=5 ; i++ , j = j + k )
        
         {
	
	       paper.path( "M" + p1x + " " + p1y + "L" + (p1x+col.width) + " " + p1y );

	       txt( p1x - 20 , p1y , j );

	       p1y = p1y - dif;
         }

      }


function txt( x , y , s)
        {

          paper.text(x,y,s);

         }

function attribute(t,v)

        {

          for(i in v)
	    
	       t.attr({i:v[i]});
        }

function rectangle(x,y,w,h)

       {
	
	     var t=paper.rect(x,y,w,h);
	   
	     return t;
        }

function events(e,m)
       {
         e.click(function(){
         	//var m=1;
         	
		  // events(e);
		   
		 
		   this.attr({fill:"#00"+m+"23E"});
           
           //m++;

           //if(m===9)
		   	//m=1;
          });

       }


       xAxis_caption();

      yAxis_caption();

   colm_charts();

}

//}