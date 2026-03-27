import type { Employee } from "./EmployeeInterface.js";

export class EmployeeStatistics {
    employee: Employee[] = [];

    constructor(employee: Employee[]) {
        if (!employee || employee.length === 0) {
            throw new Error("A dolgozók megadása kötelező!");
        }

        this.employee = employee;
    }
}