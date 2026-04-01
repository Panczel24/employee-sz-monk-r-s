import type { Employee } from "./EmployeeInterface.js";
import { EmployeeStatistics } from "./EmployeeStatistics.js";
import { describe, expect, test } from "vitest";

describe("Employees", () => {
    const dolgozok: Employee[] = [
        { name: "John Doe", age: 30, salary: 50000 },
        { name: "John De", age: 31, salary: 50001 },
        { name: "John Do", age: 32, salary: 50002 },
        { name: "Jon Doe", age: 33, salary: 50003 },
    ];

    test("konstruktor teszt - helyes adatok", () => {
        const employeeStatistics = new EmployeeStatistics(dolgozok);
        expect(employeeStatistics.employee).toEqual(dolgozok);
    });

    test("construktor teszt - üres listával dob hibát", () => {
        expect(() => new EmployeeStatistics([])).toThrow();
    });

    test("construktor teszt - feltöltött listával nem dob hibát", () => {
    expect(() => new EmployeeStatistics(dolgozok)).not.toThrow();
  });
})