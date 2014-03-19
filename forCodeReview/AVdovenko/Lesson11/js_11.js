(function(){
    var titleMod = "Цікаві факти",
        bodyMod = "Оси не рояться. Нові колонії з'являються навесні завдяки тому, що матка відкладає яйця, пестує робітників, і поступово колонія ос збільшується. Наприкінці літа в гнізді з'являється молоде покоління самок і самців, які вирушають у шлюбні польоти. Після запліднення самки впадають у сплячку, а самці гинуть.У деяких видів ос у гнізді може перебувати до 20 тисяч особин.Різні види ос на передній частині голови мають чіткий візерунок різної форми, за яким їх легко розрізняють.";
    
    function showMessage(title, body) {
        var container = document.createElement('div');
      
        container.innerHTML = '<div id="container"><div id="blackBG" style="z-index = 2;"></div> \
        <div id="modal" style="z-index:3;"> \
          <h1>' + title + '</h1> \
          <div class="content">' + body + '</div> \
          <input id="close" type="button" value="Close" style="float:right;"> \
        </div></div>';
        
        document.body.appendChild(container);
        setStyle();
    }
    
    function setStyle(){
        var blackBaG = document.getElementById("blackBG"),
            modal = document.getElementById("modal");
        
        with(blackBaG.style){            
            background = 'black';
            opacity = '0.5';
            position = 'fixed';
            top = '0px';
            left = '0px';
            display = 'block';
            width = '100%';
            height = '100%';
        };
        
        with(modal.style){
            overflow = 'scroll';
            position = 'fixed';
            opacity = '1';
            top = '25%';
            left = '25%';
            border = '3px solid orange';
            backgroundColor = '#fff29c';
            width = '50%';
            height = '50%';
            padding = '15px';
            borderRadius = '10px';
            textAlign = 'justify';
        };
    }
    
    function hide(){
        document.getElementById("container").style.display = "none";      
    }
    
    function show(){
        document.getElementById("container").style.display = "block";      
    }
    
    function addNewEventListener(element, func){
        
        if(element.attachEvent){
            element.attachEvent( "onclick", func);
        }
        else{
            element.addEventListener( "click" , func);
        }
    }
    
    function removeNewEventListener(element, func){
        
       if(element.attachEvent){
            element.detachEvent( "onclick", func);
        }
        else{
            element.removeEventListener( "click" , func);
        }        
    }
    
    function redraw(){
        var hei = window.innerHeight,
            wid = window.innerWidth;
            
            document.getElementById("modal").style.height = hei / 2;
            document.getElementById("modal").style.width = wid / 2;
            document.getElementById("modal").style.top = hei / 4;
            document.getElementById("modal").style.left = wid / 4;
    }   
    
    showMessage(titleMod, bodyMod);
    addNewEventListener(document.getElementById("ok"), show);
    addNewEventListener(document.getElementById("close"), hide);
   
    window.addEventListener('resize', redraw);
   
    })();