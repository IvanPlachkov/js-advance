function solve() {
    class Component{
        constructor(manufacturer){
            if(this.constructor === Component){
                throw new Error ('Cannot instantiate abstract class')
            }
            this.manufacturer = manufacturer;
        }
    }
    class Keyboard extends Component {
        constructor(manufacturer,responseTime){
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }
    class Monitor extends Component {
        constructor(manufacturer,width , height){
            super(manufacturer);
            this.width=width;
            this.height = height;
        }
    }
    class Battery extends Component {
        constructor(manufacturer,expectedLife){
            super(manufacturer);
            this.expectedLife =expectedLife;
        }
    }
    class Computer extends  Component{
        constructor(manufacturer,processorSpeed, ram, hardDiskSpace){
             super(manufacturer);
             if(this.constructor === Computer){
                throw new Error ('Cannot instantiate abstract class')
            }// vinag se proverqva sled super poneje trqbva da e onasledeno
            this.processorSpeed =processorSpeed;
            this.ram = ram;
            this.hardDiskSpace =hardDiskSpace;
        }
    }
    class Laptop extends Computer{
        constructor(manufacturer,processorSpeed,ram, hardDiskSpace,weight ,color , battery) {
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
            this.weight =weight;
            this.color = color;
            this.battery = battery;
        }
        get battery(){
            return this._battery; // s dolna 4erta  _battery e praivet pole koeto ne trqbva da se buta
        }
        set battery(value){
            if(!(value instanceof Battery)){
                throw new TypeError('value is not an instance Battery')
            }
            this._battery = value
        }
    }
    class Desktop extends Computer{
        constructor(manufacturer,processorSpeed,ram, hardDiskSpace,keyboard ,monitor){
            this.keyboard =keyboard;
            this.monitor = monitor;
            
        }
        get keyboard(){
            return this._keyboard;
        }
        set keyboard(value){
            if(!(value instanceof Monitor)){
                throw new TypeError('value is not an instanc Monitor')
            }
            this._keyboard = value
        }
        get monitor(){
            return this._monitor;
        }
        set monitor(value){
            if(!(value instanceof Monitor)){
                throw new TypeError('value is not an instance Monitor')
            }
            this._monitor = value
        }
    }
    return{
        Component,
        Keyboard,
        Monitor,
        Battery,
        Computer,
        Laptop,
        Desktop
    }
}
let classes = solve();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
 let Battery = classes.Battery; 
let Keyboard = classes.Keyboard; 
let battery = new Battery('Energy', 3);
 console.log(battery); 
 let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
  console.log(laptop)