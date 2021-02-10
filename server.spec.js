const request = require("supertest");

const server = require("./index.js");

describe("index.js", () => {
  describe("index route", () => {
    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get("/");

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON object from the index route", async () => {
      const expectedBody = { motd: messageOfTheDay };
      const response = await request(server).get("/");
      expect(response.body).toEqual(expectedBody);
    });

    it("should return a JSON object from the index route", async () => {
      const response = await request(server).get("/");

      expect(response.type).toEqual("application/json");
    });
  });
});

describe("end point tests", () => {
  beforeAll(async () => {
    await dbConfig("users").truncate();
  });

  /////////////register tests
  it("returns status 404 invalid", async function () {
    const res = await supertest(server)
      .post("/register")
      .send({ username: "john", password: "doe" });
    console.log(res.status);
    expect(res.status).toEqual(404);
  });

  it("successfully adds user returning a 201", async () => {
    await supertest(server)
      .post("/register")
      .send({ username: "Don", password: "joe" })
      .expect((res) => {
        // console.log(res.body);
        console.log(res.text);
        expect(res.status).toEqual(201);
      });
  });

  /////////////login tests
  it("successfully logs in", async () => {
    await dbConfig("users")
      .insert({ username: "val", password: bcrypt.hashSync("horseshoe", 12) })
      .catch(console.error);
    const res = await supertest(server).post("/login").send({
      username: "val",
      password: "horseshoe",
    });
    expect(res.status).toBe(201);
  });

  it("returns json login object", async function () {
    const res = await supertest(server)
      .post("/login")
      .send({ username: "jane", password: "doe" });
    expect(res.type).toMatch(/json/i);
  });
});
