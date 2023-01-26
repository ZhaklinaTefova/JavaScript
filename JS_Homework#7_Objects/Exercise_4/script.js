/* EXERCISE 4
Create a car object with some properties
model, color, year, fuel, fuelConsumption and a method that 
calculate how much fuel you will need to pass some distance. */

let car = {
    model: "BMW",
    color: "Black",
    year: 2022,
    fuel: 60,
    fuelConsumption: 5.5,
    calculateFuelForDistance: function(distance){
      console.log(distance * (this.fuelConsumption/100));
      return distance * (this.fuelConsumption/100);
    }
  }
  console.log(car.calculateFuelForDistance());
  // console.log(car);
  // let fuelConsuming = car.calculateFuelForDistance(20);
  // console.log(fuelConsuming);