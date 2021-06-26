class paper
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.paperWidth=120;
		this.paperHeight=120;
		this.wallThickness=90;
		
		this.image=loadImage("paper.png")
		
	
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0,
          desity:1.2
      }

      function KeyPressed() {
          if (KeyCode(UP_ARROW)){

            Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});



          }

      }


