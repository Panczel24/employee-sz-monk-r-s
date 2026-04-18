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


    test("negatív fizetéssel hiba", () => {
        const dolgozo = [
            { name: "John Doe", age: 30 , salary:-1}
        ];
        const emp = new EmployeeStatistics(dolgozo);
        expect(() => emp.getMaxSalary()).toThrow();
    });
    test("negatív fizetéssel hiba több adat esetén is", () => {
        const dolgozo = [
            { name: "John Doe", age: 30 , salary:1},
            { name: "John Doe", age: 30 , salary:-1},
            { name: "John Doe", age: 30 , salary:2},
            { name: "John Doe", age: 30 , salary:-5},
        ];
        const emp = new EmployeeStatistics(dolgozo);
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
            { name: "Joh Doe", age: 30, salary: 1000 },
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



    test(" egy elem", () => {
        const dolgozo = [
            { name: "John Doe", age: 30, salary: 1000 }
        ];
        const emp = new EmployeeStatistics(dolgozo);
        expect(emp.getAverageAge()).toBe(30);
    });

})

describe("getHighestPaidEmployee", () => {
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
        expect(employeeStatistics.getHighestPaidEmployee()).toBe(employeeStatistics.employee[3]);
    });
    test("második lista - helyes adatok/toBe", () => {
        const employeeStatistics = new EmployeeStatistics(dolgozok2);
        expect(employeeStatistics.getHighestPaidEmployee()).toBe(employeeStatistics.employee[3]);
    });





    test(" egy elem", () => {
        const dolgozo = [
            { name: "John Doe", age: 30, salary: 1000 }
        ];
        const emp = new EmployeeStatistics(dolgozo);
        expect(emp.getHighestPaidEmployee()).toBe(dolgozo[0]);
    });


    test("első  a legnagyobb elem", () => {
        const dolgozo = [
            { name: "John Doe", age: 30, salary: 1000 },
            { name: "Jon Doe", age: 30, salary: 400 },
            { name: "John Do", age: 30, salary: 450 },
        ];
        const emp = new EmployeeStatistics(dolgozo);
        expect(emp.getHighestPaidEmployee()).toBe(dolgozo[0]);
    });


    test("több ugyanolyan elem esetén az elsőt odbja LEGNAgyobbnak", () => {
        const dolgozo = [
            { name: "John Doe", age: 30, salary: 1000 },
            { name: "Jon Doe", age: 30, salary: 400 },
            { name: "John Do", age: 30, salary: 1000 },
        ];
        const emp = new EmployeeStatistics(dolgozo);
        expect(emp.getHighestPaidEmployee()).toBe(dolgozo[0]);
    });



    describe("countEmployeesOverSalary", () => {

        const dolgozok: Employee[] = [
            { name: "John Doe", age: 30, salary: 1000 },
            { name: "John De", age: 31, salary: 2000 },
            { name: "John Do", age: 32, salary: 3000 },
            { name: "Jon Doe", age: 33, salary: 4000 },
        ];
        const dolgozok2: Employee[] = [
            { name: "Johannes Doe", age: 34, salary: 5000 },
            { name: "Johann De", age: 35, salary: 6000 },
            { name: "Johhny Do", age: 36, salary: 7000 },
            { name: "Jonn Doe", age: 37, salary: 8000 },
        ];


        test("első lista - 500 felett keresők", () => {
            const emp = new EmployeeStatistics(dolgozok);
            expect(emp.countEmployeesOverSalary(500)).toBe(4);
        });
        test("második lista - 4000 felett keresők", () => {
            const emp = new EmployeeStatistics(dolgozok2);
            expect(emp.countEmployeesOverSalary(4000)).toBe(4);
        });


        test("első lista - 1000 felett keresők", () => {
            const emp = new EmployeeStatistics(dolgozok);
            expect(emp.countEmployeesOverSalary(1000)).toBe(3);
        });
        test("második lista - 5000 felett keresők", () => {
            const emp = new EmployeeStatistics(dolgozok2);
            expect(emp.countEmployeesOverSalary(5000)).toBe(3);
        });


        test("első lista - 2000 felett keresők", () => {
            const emp = new EmployeeStatistics(dolgozok);
            expect(emp.countEmployeesOverSalary(2000)).toBe(2);
        });
        test("második lista - 6000 felett keresők", () => {
            const emp = new EmployeeStatistics(dolgozok2);
            expect(emp.countEmployeesOverSalary(6000)).toBe(2);
        });


        test("első lista - 3000 felett keresők", () => {
            const emp = new EmployeeStatistics(dolgozok);
            expect(emp.countEmployeesOverSalary(3000)).toBe(1);
        });
        test("második lista - 7000 felett keresők", () => {
            const emp = new EmployeeStatistics(dolgozok2);
            expect(emp.countEmployeesOverSalary(7000)).toBe(1);
        });


        test("első lista - 4000 felett keresők", () => {
            const emp = new EmployeeStatistics(dolgozok);
            expect(emp.countEmployeesOverSalary(4000)).toBe(0);
        });
        test("második lista - 8000 felett keresők", () => {
            const emp = new EmployeeStatistics(dolgozok2);
            expect(emp.countEmployeesOverSalary(8000)).toBe(0);
        });


        test(" egy elem - tobe", () => {
            const dolgozo = [
                { name: "John Doe", age: 30, salary: 1000 }
            ];
            const emp = new EmployeeStatistics(dolgozo);
            expect(emp.countEmployeesOverSalary(900)).toBe(1);
        });


        test(" negatív érték (dolgozo) egy elemmel", () => {
            const dolgozo = [
                { name: "John Doe", age: 30, salary: -1 }
            ];
            const emp = new EmployeeStatistics(dolgozo);
            expect(emp.countEmployeesOverSalary(100)).toBe(0);
        });
        test(" negatív érték (dolgozo) több elemmel", () => {
            const dolgozo = [
                { name: "John Doe", age: 30, salary: 1000 },
                { name: "John Doe", age: 30, salary: -1000 },
                { name: "John Doe", age: 30, salary: 200 },
                { name: "John Doe", age: 30, salary: -5000 },
            ];
            const emp = new EmployeeStatistics(dolgozo);
            expect(emp.countEmployeesOverSalary(999)).toBe(1);
        });


        test(" negatív érték (emp.countEmployeesOverSalary(-1)) esetén errort dob", () => {
            const dolgozo = [
                { name: "John Doe", age: 30, salary: 1000 }
            ];
            const emp = new EmployeeStatistics(dolgozo);
            expect(() => emp.countEmployeesOverSalary(-1)).toThrow();
        });
        


        test(" nagyobb mint nulla - egy elemmel", () => {
            const dolgozo = [
                { name: "John Doe", age: 30, salary: 10000 }
            ];
            const emp = new EmployeeStatistics(dolgozo);
            expect(emp.countEmployeesOverSalary(0)).toBe(1);
        });
        test(" nagyobb mint nulla - több elemmel", () => {
            const dolgozo = [
                { name: "John Doe", age: 30, salary: 1000 },
                { name: "John Doe", age: 30, salary: -1000 },
                { name: "John Doe", age: 30, salary: 200 },
                { name: "John Doe", age: 30, salary: -5000 },
            ];
            const emp = new EmployeeStatistics(dolgozo);
            expect(emp.countEmployeesOverSalary(0)).toBe(2);
        });


        test(" szélsőérték", () => {
            const dolgozo = [
                { name: "John Doe", age: 30, salary: 1000000000000000000000000000000000000000000000 }
            ];
            const emp = new EmployeeStatistics(dolgozo);
            expect(emp.countEmployeesOverSalary(100000000000000000000000000)).toBe(1);
        });
        test(" szélsőérték2", () => {
            const dolgozo = [
                { name: "John Doe", age: 30, salary: 10000000000000000000000000 }
            ];
            const emp = new EmployeeStatistics(dolgozo);
            expect(emp.countEmployeesOverSalary(10000000000000000000000000000000000000000000000000000000000000)).toBe(0);
        });
        test(" szélsőérték3", () => {
            const dolgozo = [
                { name: "John Doe", age: 30, salary: 10000000000000000000000000 },
                { name: "John Doe", age: 30, salary: 1 },
                { name: "John Doe", age: 30, salary: 0 },
                { name: "John Doe", age: 30, salary: -1 },
                { name: "John Doe", age: 30, salary: -10000000000000000000000000 }
            ];
            const emp = new EmployeeStatistics(dolgozo);
            expect(emp.countEmployeesOverSalary(0)).toBe(2);
        });

    });



})