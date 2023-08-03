import AppLayout from "./AppLayout";
import { render, screen } from "@testing-library/react";

const fakeUsers = {
  username: "mohan",
  phone: "123",
  address: { suite: "abs", street: "efg", city: "hij" },
};

describe("Testing the Assets Service", () => {
  let fetchMock: any = undefined;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, "fetch").mockImplementation(assetsFetchMock);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Fetch has been called", () => {
    const baseUrl = "https://jsonplaceholder.typicode.com/users/2";
    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledWith(baseUrl);
  });
  const assetsFetchMock = () =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: async () => fakeUsers,
    } as Response);
});
