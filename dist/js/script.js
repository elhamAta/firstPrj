class Car {
    constructor({
      speed = 100,
      engin = false,
      model = 2010,
    }){
        this.speed = speed;
        this.model = model;
        this.engin = engin;
    }
    startEngin(){
        this.engin = true
    }

  }

  class Benz extends Car{
    constructor({
      luxury = true,
      speed = 200,
      model = 2015,
    }){
        super({
            speed : speed,
            model : model
        })
        this.luxury = luxury
    }   
  }
  const MyBenz = new Benz ({
    speed : 180,
    luxury : false,
    model : 2020
  })