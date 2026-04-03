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
    const dolgozok2: Employee[] = [
        { name: "Johannes Doe", age: 34, salary: 50004 },
        { name: "Johann De", age: 35, salary: 50005 },
        { name: "Johhny Do", age: 36, salary: 50006 },
        { name: "Jonn Doe", age: 37, salary: 50007 },
    ];

    test("konstruktor teszt első lista - helyes adatok", () => {
        const employeeStatistics = new EmployeeStatistics(dolgozok);
        expect(employeeStatistics.employee).toEqual(dolgozok);
    });

    test("konstruktor teszt második lista - helyes adatok", () => {
        const employeeStatistics = new EmployeeStatistics(dolgozok2);
        expect(employeeStatistics.employee).toEqual(dolgozok2);
    });

    test("construktor teszt - üres listával dob hibát", () => {
        expect(() => new EmployeeStatistics([])).toThrow();
    });

    test("construktor teszt elso lista- feltöltött listával nem dob hibát", () => {
        expect(() => new EmployeeStatistics(dolgozok)).not.toThrow();
    });

    test("construktor teszt  második losta- feltöltött listával nem dob hibát", () => {
        expect(() => new EmployeeStatistics(dolgozok2)).not.toThrow();
    });
})

describe("getMaxSalary", () => {
    const dolgozok: Employee[] = [
        { name: "John Doe", age: 30, salary: 50000 },
        { name: "John De", age: 31, salary: 50001 },
        { name: "John Do", age: 32, salary: 50002 },
        { name: "Jon Doe", age: 33, salary: 50003 },
    ];
    const dolgozok2: Employee[] = [
        { name: "Johannes Doe", age: 34, salary: 50004 },
        { name: "Johann De", age: 35, salary: 50005 },
        { name: "Johhny Do", age: 36, salary: 50006 },
        { name: "Jonn Doe", age: 37, salary: 50007 },
    ];

    test(" első lista - helyes megoldás/toBe", () => {
        const employeeStatistics = new EmployeeStatistics(dolgozok);
        expect(employeeStatistics.getMaxSalary()).toBe(50003);
    });
    test(" második lista - helyes megoldás/toBe", () => {
        const employeeStatistics = new EmployeeStatistics(dolgozok2);
        expect(employeeStatistics.getMaxSalary()).toBe(50007);
    });


    test(" első lista - notToBe", () => {
        const employeeStatistics = new EmployeeStatistics(dolgozok);
        expect(employeeStatistics.getMaxSalary()).not.toBe(50007);
    });
    test(" második lista - notToBe", () => {
        const employeeStatistics = new EmployeeStatistics(dolgozok2);
        expect(employeeStatistics.getMaxSalary()).not.toBe(50003);
    });


    test("hiba  teszt - üres listával dob hibát", () => {
        const emp = new EmployeeStatistics(dolgozok);
        emp.employee = [];
        expect(() => emp.getMaxSalary()).toThrow();
    });
    test("hiba  teszt2 - üres listával dob hibát", () => {
        const emp = new EmployeeStatistics(dolgozok2);
        emp.employee = [];
        expect(() => emp.getMaxSalary()).toThrow();
    });


    test(" elso lista- feltöltött listával nem dob hibát", () => {
        const emp = new EmployeeStatistics(dolgozok);
        expect(() => emp.getMaxSalary()).not.toThrow();
    });
    test(" második lista- feltöltött listával nem dob hibát", () => {
        const emp = new EmployeeStatistics(dolgozok2);
        expect(() => emp.getMaxSalary()).not.toThrow();
    });


    test("hiányzó fizetéssel hibát dob", () => {
        const dolgozo = [
            { name: "John Doe", age: 30 } as any
        ];
        const emp = new EmployeeStatistics(dolgozo);
        expect(() => emp.getMaxSalary()).toThrow();
    });
    test("több adatos hiányzó fizetéssel hibát dob", () => {
        const dolgozo = [
            { name: "John Doe", age: 30 } as any,
            { name: "Joh Doe", age: 30, salary:1000 },
            { name: "Jon Doe", age: 40 } as any
        ];
        const emp = new EmployeeStatistics(dolgozo);
        expect(() => emp.getMaxSalary()).toThrow();
    });
})


describe("getAverageAge", () => {
    const dolgozok: Employee[] = [
        { name: "John Doe", age: 30, salary: 50000 },
        { name: "John De", age: 31, salary: 50001 },
        { name: "John Do", age: 32, salary: 50002 },
        { name: "Jon Doe", age: 33, salary: 50003 },
    ];
    const dolgozok2: Employee[] = [
        { name: "Johannes Doe", age: 34, salary: 50004 },
        { name: "Johann De", age: 35, salary: 50005 },
        { name: "Johhny Do", age: 36, salary: 50006 },
        { name: "Jonn Doe", age: 37, salary: 50007 },
    ];

    test("első lista - helyes adatok/toBe", () => {
        const employeeStatistics = new EmployeeStatistics(dolgozok);
        expect(employeeStatistics.getAverageAge()).toBe(31.5);
    });
    test("második lista - helyes adatok/toBe", () => {
        const employeeStatistics = new EmployeeStatistics(dolgozok2);
        expect(employeeStatistics.getAverageAge()).toBe(35.5);
    });
 
 
    test("első lista - notToBe", () => {
        const employeeStatistics = new EmployeeStatistics(dolgozok);
        expect(employeeStatistics.getAverageAge()).not.toBe(313.5);
    });
    test("második lista - notToBe", () => {
        const employeeStatistics = new EmployeeStatistics(dolgozok2);
        expect(employeeStatistics.getAverageAge()).not.toBe(345.5);
    });

})