import {describe, expect, it } from '@jest/globals';
import { multiply, sum } from './src';


describe('sum module', () =>{
    it('adds 1 + 2 to equal to 3', ()=>{
        expect(sum(1 , 2)).toBe(3);
    })

    it('adds 5 +10 to equal to 15', ()=>{
        expect(sum(5, 10));
    });
});

describe ('multiply module', ()=>{
    it('multiply 4 and 5 to be 20', ()=>{
        expect(multiply(4,5)).toBe(20);
    });

    it('multiply 10 and 10 to be 100', ()=>{
        expect(multiply(10,10)).toBe(100);
    })
})



