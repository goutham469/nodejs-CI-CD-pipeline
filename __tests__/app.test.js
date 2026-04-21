const request = require("supertest");
const app = require("../app");

describe("API", ()=>{
    test("GET /", async()=>{
        const res = await request(app).get("/");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual("Hello man, i am from space !");
    })

    test("GET /add", async()=>{
        const res = await request(app).get("/add?a=5&b=3");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual("the sum of 5 and 3 is 8");
    })

    test("GET /subtract", async()=>{
        const res = await request(app).get("/subtract?a=5&b=3");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual("the difference of 5 and 3 is 2");
    })

    test("GET /multiply", async()=>{
        const res = await request(app).get("/multiply?a=5&b=3");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual("the product of 5 and 3 is 15");
    })

    test("GET /divide", async()=>{
        const res = await request(app).get("/divide?a=5&b=0");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual("Error: Division by zero is not allowed.");
    })

    test("GET /divide", async()=>{
        const res = await request(app).get("/divide?a=5&b=3");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual("the quotient of 5 and 3 is 1.6666666666666667");
    })
})