import express  from "express";
import { z } from "zod";
export function sum(a:number, b:number){
    return a + b;
}
export function multiply(a:number, b:number){
    return a*b; 
}

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})
export const app =express();

app.use(express.json());
app.post("/sum", (req, res) =>{
    const a = req.body.a;
    const b = req.body.b;
    const ans = a + b;

    res.json({
        ans
    })
});

app.get("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        answer
    })
});