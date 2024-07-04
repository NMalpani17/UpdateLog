import prisma from "../../db";
import * as user from "../user";

describe("User handler", () => {
  it("should sign in with valid credntials", async () => {
    const req = {
      body: {
        username: "AD",
        password: "12345",
      },
    };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };
    await user.singIn(req, res);
  });
});
