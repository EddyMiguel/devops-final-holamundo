const request = require("supertest");
const app = require("./server");

describe("GET /", () => {
  it("Debería devolver Hola Mundo", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Hola Mundo");
  });
});
