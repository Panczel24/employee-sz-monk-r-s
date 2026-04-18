import type { Employee } from "./EmployeeInterface.js";

export class EmployeeStatistics {
    employee: Employee[] = [];

    constructor(employee: Employee[]) {
        if (!employee || employee.length === 0) {
            throw new Error("A dolgozók megadása kötelező!");
        }

        this.employee = employee;
    }

    getMaxSalary(): number {
        if (this.employee.length === 0) {
            throw new Error("Nincs adat");
        }
        let max = this.employee[0]?.salary;
        if (max === undefined) {
            throw new Error("Nincs fizetés");
        }
        for (let emp of this.employee) {
            if (emp.salary === undefined || emp.salary < 0) {
                throw new Error("Hibáas fizetés");
            }
            if (emp.salary > max) {
                max = emp.salary;
            }
        }
        return max;
    }


    getAverageAge(): number {
        let atlag = 0;
        for (let emp of this.employee) {
            atlag += emp.age;
        }
        return atlag / this.employee.length;
    }

    getHighestPaidEmployee(): Employee {
        let legtobb = this.employee[0]!;
        for (let emp of this.employee) {
            if (emp.salary > legtobb.salary) {
                legtobb = emp
            }
        }
        return legtobb;
    }


    countEmployeesOverSalary(salary: number): number {
        let szam = 0
        for (let emp of this.employee) {
            if (emp.salary > salary) {
                szam++
            }
            if (salary < 0) {
                throw new Error("nem lehet negatyv");
            }
        }
        return szam;
    }





}