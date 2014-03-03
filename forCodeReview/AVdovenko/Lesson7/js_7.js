
(function(){
    var i,
        P,
        S,
        p;
    
    function inherit(Child, Parent) {
        var F = new Function();
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.superclass = Parent.prototype;
        Child.prototype.constructor = Child;
    }

// --------------------------------------------------------------
    function getSideLength(x1, y1, x2, y2){       
        var ax,
            ay,
            sideA;               
            
            ax = Math.abs(x1 - x2);
            ay = Math.abs(y1 - y2);
            sideA = Math.sqrt(Math.pow(ax, 2) + Math.pow(ay, 2));                
            
        return sideA;
    }

// ---------------------------------------------------------------
    function figure(){
        
    }
    
    figure.prototype = {
        getCoordinates : function(){
            var arr = " ";
            
            for(i = 0; i < this.coordinates.length; i++){
                arr = arr + this.coordinates[i] + ", ";
            }
            return alert(arr);    
        },
        
        getPerimeter: function(){
            switch(this.figure){
                case ("triangle"):
                    P = this.a + this.b + this.c;
                    alert("triangle P = " + P);
                    return P;
                    break;
                case ("rectangle"):                    
                    P = 2 * (this.a + this.b);
                    alert("rectangle P = " + P);
                    return P;
                    break;
                case ("line"):
                    break;
            }           
        },
            
        getArea: function(){
            switch(this.figure){
                case ("triangle"):
                    p = (P = this.a + this.b + this.c)/2;
                    S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
                    alert("triangle S = " + S);
                    return S;
                    break;
                case ("rectangle"):
                    S = this.a * this.b;
                    alert("rectangle S = " + S);
                    return S;
                    break;
                case ("line"):
                    break;           
            }
        }
    }
    
    function line(x1, y1, x2, y2){
        this.coordinates = [x1, y1, x2, y2];
        this.figure = "line";
    }
    
    function triangle(x1, y1, x2, y2, x3, y3){
        this.coordinates = [x1, y1, x2, y2, x3, y3];
        this.figure = "triangle";        
        this.a = getSideLength(x1, y1, x2, y2);
        this.b = getSideLength(x2, y2, x3, y3);
        this.c = getSideLength(x3, y3, x1, y1);      
    }  
    
    function rectangle(x1, y1, x2, y2, x3, y3, x4, y4){
        this.coordinates = [x1, y1, x2, y2, x3, y3, x4, y4];
        this.figure = "rectangle";
        this.a = getSideLength(x1, y1, x2, y2);
        this.b = getSideLength(x2, y2, x3, y3);        
        
    }   
    
    inherit(line, figure);
    inherit(triangle, figure);
    inherit(rectangle, figure);
    
    var newLine = new line(1, 4, 5, 1);
    var newTriangle = new triangle(1, 4, 5, 1, 4, 4);
    var newRectangle = new rectangle(0, 0, 8, 0, 0, 3, 8, 3);
    
    
    newLine.getCoordinates();
    newTriangle.getCoordinates();
    newRectangle.getCoordinates();
    
  
    newTriangle.getPerimeter();
    newRectangle.getPerimeter();
    newRectangle.getArea();
    newTriangle.getArea();
    
    })();
    
    
