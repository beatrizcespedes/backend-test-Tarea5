import { describe, test, expect } from "@jest/globals";
import {validarRUT}  from "../src/app/rut";
import { text } from "stream/consumers";
import { truncate } from "fs";

describe("Test para contar cadenas", () => 
    {
    test("validar rut correcto", () => 
        {
            expect(validarRUT('111111111')).toBe(true);
            expect(validarRUT('11.111.111-1')).toBe(true);
            expect(validarRUT('11.111111-1')).toBe(true);
            expect(validarRUT('11111111-1')).toBe(true);
            expect(validarRUT('12.345.678-K')).toBe(true);
        });
    test("validar rut incorrecto", () => 
        {
            expect(validarRUT('111111112')).toBe(false);
            expect(validarRUT('11.111.111-2')).toBe(false);
            expect(validarRUT('11.111111-2')).toBe(false);
            expect(validarRUT('11@111111-1')).toBe(false);
            expect(validarRUT('1111111-1')).toBe(false);
            expect(validarRUT('12.345.679-K')).toBe(false);
        });
    test("menos de dos digitos", () => 
            {
                expect(validarRUT('1')).toBe(false);
            });   
    })