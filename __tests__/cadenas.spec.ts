import { describe, test, expect } from "@jest/globals";
import {contarCoincidenciasEnCadena}  from "../src/app/cadenas";
import { text } from "stream/consumers";

describe("Test para contar cadenas", () => 
    {
    test("ENCONTRAR PALABRAS CORRECTAS", () => 
        {
            expect(contarCoincidenciasEnCadena('HOLA', 'H')).toBe(1);
            expect(contarCoincidenciasEnCadena('HSASDSDOSSSSAAA', 'S')).toBe(7);
            expect(contarCoincidenciasEnCadena('hola feo, hola lindo, hola mundo, hola', 'hola')).toBe (4);
        });
    test("no encuentra las cadena correcta", () => 
        {
            expect(contarCoincidenciasEnCadena('buenos dias', 'Hola')).toBe(0);
            expect(contarCoincidenciasEnCadena('buenos dias', 'diass')).toBe(0);
        });
    test("cadena vacia", () => 
            {
                expect(contarCoincidenciasEnCadena('', 'Hola')).toBe(0);
            });   
    })