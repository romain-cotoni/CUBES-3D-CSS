
var conteneur = document.getElementsByClassName("conteneur");

for(var i = 0; i<4; i++)
{    
    conteneur[i].isDown = false;
    conteneur[i].x             ;
    conteneur[i].y             ; 
    conteneur[i].newX          ;
    conteneur[i].newY          ;
    conteneur[i].xDecal = 0    ;
    conteneur[i].yDecal = 0    ;
	
    conteneur[i].addEventListener('mousedown', down);
    conteneur[i].addEventListener('mousemove', move);
    conteneur[i].addEventListener('mouseup'  , up  );	
}


function down(event)
{
	/*for(var i = 0; i<2; i++)
    {   
        if(conteneur[i] != event.currentTarget)
		{
            conteneur[i].removeEventListener('mousedown', down);
            conteneur[i].removeEventListener('mousemove', move);
            conteneur[i].removeEventListener('mouseup'  , up  );
		}
    }*/
    event.currentTarget.isDown = true;
	event.currentTarget.x = event.clientX - event.currentTarget.xDecal;
    event.currentTarget.y = event.clientY - event.currentTarget.yDecal;
}

function move(event)
{
	if(event.currentTarget.isDown === true)
	{	
        event.currentTarget.newX = event.clientX;
        event.currentTarget.newY = event.clientY;	
	    
		event.currentTarget.xDecal = event.currentTarget.newX - event.currentTarget.x;
		event.currentTarget.yDecal = event.currentTarget.newY - event.currentTarget.y;		
		
		event.currentTarget.style.transform = "translate3d(" + event.currentTarget.xDecal + "px, " + event.currentTarget.yDecal + "px, 0px)";							
	}
}

function up(event)
{
	event.currentTarget.isDown = false;
	event.currentTarget.x = event.currentTarget.newX;
    event.currentTarget.y = event.currentTarget.newY;
	
	/*for(var i = 0; i<2; i++)
    { 
	    if(conteneur[i] != event.currentTarget)
        {
            conteneur[i].addEventListener('mousedown', down);
            conteneur[i].addEventListener('mousemove', move);
            conteneur[i].addEventListener('mouseup'  , up  );
	    }
	}*/
}



