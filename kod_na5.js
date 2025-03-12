window.onload = function(){

	var canvas = document.getElementById("cv1");
	var ctx = canvas.getContext("2d");
    canvas.addEventListener("click", handleClick, false);
	var x, y;
    xp = 10; 
    yp = 10; 
    bok = 100, xg=300, yg=35, pozycja=0, pomocnik=0,liczba_k=4,liczba_w=8;
	var kod = [], kod_odp = ["","",""];  //zeby miec pewnosc ze na poczatku jest puste; !!!!!!tablica kod ma w sobie wylosowane kolory!!!!!!!!!!!, a tablica kod_odp zawiera odp uzytkownika ktory probuje odgadnac kolor

	x = Math.floor(Math.random()*1000);
	y = Math.floor(Math.random()*800);
	
    kolor1 = "#FF0000";
    kolor2 = "#00FF00";
    kolor3 = "#0000FF";
    kolor4 = "#FFFF00";
    kolor5 = "#FF00FF";
    kolor6 = "#00FFFF";
	kolor_ramka = "#4D3425";
    
    function losowanie()
    {
        for(i=0;i<liczba_k;i++)
	{
		liczba = Math.floor(Math.random()*6+1);
		if(liczba==1) kod[i] = kolor1;
		if(liczba==2) kod[i] = kolor2;
		if(liczba==3) kod[i] = kolor3;
		if(liczba==4) kod[i] = kolor4;
		if(liczba==5) kod[i] = kolor5;
		if(liczba==6) kod[i] = kolor6;	
	}
    }
	
    kolor = kolor1;

	ctx.lineWidth = 2;
	ctx.strokeStyle = "#FFFFFF";

	ctx.fillStyle = kolor1;
	ctx.beginPath();
	ctx.fillRect(xp,yp,bok,bok);
	ctx.rect(xp,yp,bok,bok);
	ctx.fillStyle = kolor2;
	ctx.fillRect(xp+bok,yp,bok,bok);
	ctx.rect(xp+bok,yp,bok,bok);
	ctx.fillStyle = kolor3;
	ctx.fillRect(xp,yp+bok,bok,bok);
	ctx.rect(xp,yp+bok,bok,bok);
	ctx.fillStyle = kolor4;
	ctx.fillRect(xp+bok,yp+bok,bok,bok);
	ctx.rect(xp+bok,yp+bok,bok,bok);
	ctx.fillStyle = kolor5;
	ctx.fillRect(xp,yp+2*bok,bok,bok);
	ctx.rect(xp,yp+2*bok,bok,bok);
	ctx.fillStyle = kolor6;
	ctx.fillRect(xp+bok,yp+2*bok,bok,bok);
	ctx.rect(xp+bok,yp+2*bok,bok,bok);
    
    ctx.fillStyle = kolor;
    ctx.fillRect(xp,yp+3.5*bok,2*bok,2*bok);
    ctx.rect(xp,yp+3.5*bok,2*bok,2*bok);


	ctx.stroke(); 
	ctx.closePath();

	ctx.beginPath();
    plansza();
	ctx.stroke(); 
	ctx.closePath();
    
    function handleClick(e)
    {
        var x = e.offsetX;  // pobiera wspolrzedne klikniecia mysza
        var y = e.offsetY;
        
        if(x>xp && x<xp+bok && y>yp && y<yp+bok )  kolor = kolor1;
        if(x>xp+bok && x<xp+2*bok && y>yp && y<yp+bok )  kolor = kolor2;
        if(x>xp && x<xp+bok && y>yp+bok && y<yp+2*bok )  kolor = kolor3;
        if(x>xp+bok && x<xp+2*bok && y>yp+bok && y<yp+2*bok )  kolor = kolor4;
        if(x>xp && x<xp+bok && y>yp+2*bok && y<yp+3*bok )  kolor = kolor5;
        if(x>xp+bok && x<xp+2*bok && y>yp+2*bok && y<yp+3*bok)  kolor = kolor6;
          
        ctx.fillStyle = kolor;
        ctx.fillRect(xp,yp+3.5*bok,2*bok,2*bok);
        ctx.rect(xp,yp+3.5*bok,2*bok,2*bok);
		
		for(i=0;i<liczba_k;i++)  // wpisywanie kolorow do okienek
		{
			if(x>xg-40+i*45 && x<xg-40+i*45+30 && y>yp+515-41*pozycja && y<yp+515-41*pozycja+30)
			{
				ctx.fillStyle = kolor;
				ctx.fillRect(xg+40+i*50,yp+700-55*pozycja,30,30);
				ctx.strokeStyle = kolor_ramka;
				ctx.rect(xg+40+i*50,yp+700-55*pozycja,30,30);
				kod_odp[i] = kolor;
			} 
		}	
		
    }
    
    function plansza()
    {
        ctx.fillStyle = "#AD8447";
        ctx.strokeStyle = "#4D3425";
        
        ctx.fillRect(xg,yg,450,750);
        ctx.rect(xg,yg,450,750);
        
        for(j=0;j<liczba_w;j++)
            {
                for(i=0;i<liczba_k;i++)
                    {
                       
                        ctx.rect(xg+40+i*50,yp+700-55*j,30,30);
                    }
            }
        
        for(j=0;j<liczba_w;j++)
            {
                for(i=0;i<liczba_k;i++)
                    {
                        ctx.rect(xg+285+i*30,yp+708-55*j,15,15);
                    }
            }
        
        ctx.font = "12pt Arial";
        ctx.fillStyle = "#4D3425";
        
        for(i=1;i<=liczba_w;i++)
            {
                ctx.fillText(""+i,xg+16,yg+700-(i-1)*55);
            }	
			
		for(i=0;i<liczba_k;i++)
		{
            ctx.fillStyle = "#4D3425";
            ctx.fillRect(xg+40+i*50,yp+700-55*liczba_w,30,30);
			ctx.fillStyle = "#696969";
			ctx.fillRect(xg+40+i*50+2,yp+700-55*liczba_w+2,26,26);
		}
		
		ctx.font = "bold 20pt Arial";
        ctx.fillStyle = "#FFFFFF";
		for(i=1;i<=liczba_k;i++)
        {
            ctx.fillText("?",xg+i*50-4,yp+725-liczba_w*55);
        }
        losowanie();
	
	function sprawdzaj(pozycja)
	{
		tab_pom = [], podpowiedz = [], poz = 0,good=0;
		
		for(i=0;i<liczba_k;i++)
		{
			tab_pom[i] = kod[i];
			podpowiedz[i]= 0;		
		}
		
		for(i=0;i<liczba_k;i++)
		{
			if(tab_pom[i] == kod_odp[i])
			{
                good++;
				podpowiedz[poz] = 2;
				poz++;
				tab_pom[i] = "0";
				kod_odp[i] = "0";
			}	
		}
		
		for(i=0;i<liczba_k;i++)
		{
			for(j=0;j<liczba_k;j++)
			{
				if(kod_odp[i] == tab_pom[j] && tab_pom[j]!=0)
				{
					podpowiedz[poz] = 1;
					poz++;
					kod_odp[i] = "0";
					tab_pom[j] = "0";	
				}
			}
		}
		
		for(i=0;i<liczba_k;i++) //zamalowywanie na bialo lub czarno po odpowiedzi
		{
			if(podpowiedz[i]==2) ctx.fillStyle = "#000000";
			if(podpowiedz[i]==1) ctx.fillStyle = "#FFFFFF";
			
			if(podpowiedz[i]==1 || podpowiedz[i]==2) 	
			{
				ctx.fillRect(xg+285+i*30,yp+708-pozycja*55,15,15);
			}
			
			ctx.strokeStyle = kolor_ramka;
			ctx.rect(xg+255+i*30,yp+708-pozycja*55,15,15);
		}	
	}
		
		document.getElementById("button1").onclick = function()                   
		{
			licz = 0, tak=false;
			for(i=0;i<liczba_k;i++)
			{
				if(kod_odp[i]!="") licz++;		// sprawdzamy czy wartosc kod_odp jest rozna od "" czyli czy gracz wypelinil wszystkie okna	
			}
			
			if(licz==liczba_k)
			{
				sprawdzaj(pozycja);
                pomocnik++;
                if(pozycja<11 && good<liczba_k ) pozycja++;  //blokowanie moliwosci wstawiania kolorow po wygranej
                tak = true;		
                if(good == liczba_k)
                    {
                        kolora = kod[0];
                        kolorb = kod[1];
                        kolorc = kod[2];
                        kolord = kod[3];
                        kolore = kod[4];
                        
		                for(i=0;i<liczba_k;i++)
                        {
                            if(i==0) 
                            {
                                ctx.fillStyle = kolora;
				                ctx.fillRect(xg+40+i*50,yp+700-55*liczba_w,30,30);
                            }
                            if(i==1) 
                            {
                                ctx.fillStyle = kolorb;
				                ctx.fillRect(xg+40+i*50,yp+700-55*liczba_w,30,30);
                            }
                            if(i==2) 
                            {
                                ctx.fillStyle = kolorc;
				                ctx.fillRect(xg+40+i*50,yp+700-55*liczba_w,30,30);
                            }
                            if(i==3) 
                            {
                                ctx.fillStyle = kolord;
				                ctx.fillRect(xg+40+i*50,yp+700-55*liczba_w,30,30);
                            }
                            if(i==4) 
                            {
                                ctx.fillStyle = kolore;
				                ctx.fillRect(xg+40+i*50,yp+700-55*liczba_w,30,30);
                            }
                        }
                    }
                if(good<liczba_k)
                    {
                        if(pomocnik==liczba_w)
                            {
                                kolora = kod[0];
                                kolorb = kod[1];
                                kolorc = kod[2];
                                kolord = kod[3];
                                kolore = kod[4];
                                
		                        for(i=0;i<liczba_k;i++)
                                {
                                    if(i==0) 
                                    {
                                       ctx.fillStyle = kolora;
				                       ctx.fillRect(xg+40+i*50,yp+700-55*liczba_w,30,30);
                                    }
                                    if(i==1) 
                                    {
                                       ctx.fillStyle = kolorb;
				                       ctx.fillRect(xg+40+i*50,yp+700-55*liczba_w,30,30);
                                    }
                                    if(i==2) 
                                    {
                                       ctx.fillStyle = kolorc;
				                       ctx.fillRect(xg+40+i*50,yp+700-55*liczba_w,30,30);
                                     }
                                    if(i==3) 
                                     {
                                       ctx.fillStyle = kolord;
				                       ctx.fillRect(xg+40+i*50,yp+700-55*liczba_w,30,30);
                                     }
                                    if(i==4) 
                                     {
                                       ctx.fillStyle = kolore;
				                       ctx.fillRect(xg+40+i*50,yp+700-55*liczba_w,30,30);
                                     }
                            }
                        }
                    }
			}
			
			for(i=0;i<liczba_k && tak;i++)  
			{
				kod_odp[i] ="";
			}
		};                                                              
		
		document.getElementById("button2").onclick = function()
		{
			window.onload(); // ta funkcja cofa do pocztaku - wywoluje nowa gre, czyli laduje od nowa okno
			liczba_w = 8;
            liczba_k = 4;
		    ctx.beginPath();
            plansza();
            losowanie();
	        ctx.stroke(); 
	        ctx.closePath();
		};
        
        document.getElementById("button3").onclick = function()
        {

            liczba_w = 12;
            liczba_k = 5;
		    ctx.beginPath();
            plansza();
            losowanie();
	        ctx.stroke(); 
	        ctx.closePath();
         };
        
        document.getElementById("button4").onclick = function()
        {

            liczba_w++;
		    ctx.beginPath();
            plansza();
            losowanie();
	        ctx.stroke(); 
	        ctx.closePath();
         };
        
        document.getElementById("button5").onclick = function()
        {

            liczba_k++;
		    ctx.beginPath();
            plansza();
            losowanie();
	        ctx.stroke(); 
	        ctx.closePath();
         };
        
         document.getElementById("button6").onclick = function()
        {

            liczba_w--;
		    ctx.beginPath();
            plansza();
            losowanie();
	        ctx.stroke(); 
	        ctx.closePath();
         };
        
         document.getElementById("button7").onclick = function()
        {

            liczba_k--;
		    ctx.beginPath();
            plansza();
            losowanie();
	        ctx.stroke(); 
	        ctx.closePath();
         };
}
		
    }