class Company { // neraboti ..............!!!!!!!!!!!!!!!!!!!!!
    constructor(){
        this.department = new Map();
    }
    static Employee = class Employee{
        constructor(username,selary,position){
            this.username = username;
            this.salary = selary;
            this.position = position;
        }
        get username(){
            return this._username; 
        }
        set username(value){
            this._validateParmeter(value);
            this._username = value;
        }

        get salary(){
            return this._selary; 
        }
        set salary(value){
            this._validateParmeter(value);
            if(value < 0){
                throw new Error('invalid input!')
            }
            this._selary = value;
        }

        get position(){
            return this._positione; 
        }
        set position(value){
            this._validateParmeter(value);
            this._position = value;
        }
        _validateParmeter(value){
            if(value === undefined || value === null || value ===""){
                throw new Error('invalid input!')
            }
        }
        compareTo(other){
           let result = other.salary - this.salary;
           return result === 0 ? this.username.localeCompare(other.username) : result;
        }

        toString(){
            return `${this.username} ${this.salary} ${this.position} `
        }
    }
    
    addEmployee(username,salary,position,departmnt){
        if(departmnt === undefined || departmnt === null || departmnt ===  ""){
            throw new Error('invalid input!')
        }

        if(!this.department.has(departmnt)){
            this.department.set(departmnt, []);
        }
        let employee = new Company.Employee(username,salary,position)
        let workers = this.department.get(departmnt)
      workers.push(employee)
      return `New employee is hired. Name: ${username}. Position: ${position}`
    }
    bestDepartment() {
            let sortedDepatment = [...this.department]
            .sort(([aName, aWorkers],[bName,bWorkers])=> {
              let aAvarageSalary = this._getAvarageSalary(aName);
              let bAvarageSalary = this._getAvarageSalary(bName);
              return bAvarageSalary - aAvarageSalary;
            })
            let [bestDepartmentName,bestDepartmentWorkers] = sortedDepatment[0];
            bestDepartmentWorkers.sort((a,b) => a.compareTo(b)); 
            let bestDepartmentString = `"Best Department is: ${bestDepartmentName}
             Average salary: ${this._getAvarageSalary(bestDepartmentName).toFixed(2)}`;
                let workersString = bestDepartmentWorkers.map(x => x.toString()).join('\n');
    }
    _getAvarageSalary(departmentName){
        let departmentWorkers = this.department(departmentName);
       let avarageSalary = departmentWorkers.reduce((acc,w)=> acc + w.salary,0 ) / departmentWorkers.length;
        return avarageSalary;
    }
}
let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());