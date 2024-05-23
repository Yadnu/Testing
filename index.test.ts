import {describe, expect, it } from '@jest/globals';
import { app, multiply, sum } from './src';
import request  from 'supertest';

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

describe("POST /sum", ()=>{
    it("should return sum of 2 numbers", async () =>{
        const res = await request(app).post("/sum").send({
            a:1,
            b:2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.ans).toBe(3);
    });
})


describe("GET /sum", () =>{
    it("Should return sum of 2 numbers ", async () =>{
        const res =await request(app)
        .get("/sum")
        .set({
            a: "1",
            b: "2"
        })
        .send();
        expect(res.statusCode).toBe(200);
        console.log(res.body);
       expect(res.body.answer).toBe(3);
    })
    it("Bad inputs", async () =>{
        const res = await request(app)
        .get("/sum").send();
        expect(res.statusCode).toBe(411);
    })
})