class CONNECTION{
    constructor(a,b ){
        var option={
            bodyA:a,
            badyB:b,
            length:100,
            stiffness:0.4

        }
        this.c=Matter.Constraint.create(option)
        Matter.World(World,this.c);
    }
    display(){
        line(this.c.bodyA.position.x)


    }

}