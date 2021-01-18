class Sling{
    constructor(bodyA,pointB){
    var a={
        bodyA:bodyA,
        pointB:pointB,
        length:5,
        stiffness:0.03,
        
    }
    this.pointB=pointB
    this.sling=Constraint.create(a)
    World.add(world,this.sling)
    }
    Fly(){
     this.sling.bodyA=null   
    }
    display(){
    if(this.sling.bodyA){

    
    var pa=this.sling.bodyA.position
    var pb=this.pointB

    line(pa.x,pa.y,pb.x,pb.y)
    }}

}