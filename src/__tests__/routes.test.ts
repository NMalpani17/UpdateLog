import app from "../server";
import supertest from "supertest";

describe("GET / API", () => {
  it("should return hello message", async () => {
    const res = await supertest(app).get("/");
    expect(res.body.message).toBe("hello");
  });
});
