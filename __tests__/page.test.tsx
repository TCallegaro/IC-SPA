import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Home from "../app/page";

afterEach(cleanup);

describe("Home page", () => {
  it("renders the prevention guidance", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /No campo, prevenção também é cuidado/,
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Pequenos hábitos. Mais proteção.",
      }),
    ).toBeTruthy();
  });

  it("provides an emergency call link and first-aid guidance", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: /Ligue 192/ }).getAttribute("href"))
      .toBe("tel:192");
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Faça isso enquanto busca ajuda",
      }),
    ).toBeTruthy();
  });
});
