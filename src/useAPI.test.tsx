import { rest } from "msw";
import { setupServer } from "msw/node";

import { renderHook } from "@testing-library/react";
import { useAPI } from "./useAPI";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Walison" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

test("should increment", async () => {
  const { result } = renderHook(() => useAPI());

  expect(result.current).toEqual({ name: "Walison" });
});
