import { render, screen } from "@testing-library/react";
import { notFound } from "../../constants";
import Items from "./items";

describe("Item component test", () => {
  test("render Item with empty data", () => {
    render(<Items data={[]} />);
    expect(screen.getByText(notFound)).toBeInTheDocument();
  });

  test("Item with data", () => {
    render(
      <Items
        data={[
          {
            id: "9b565b11-7311-5b5e-a699-97873dffb361",
            name: "Voice Report",
            description: "Calls reporting and analytics of your calls.",
            categories: ["Voice Analytics", "Reporting", "Optimization"],
            subscriptions: [
              {
                name: "Trial",
                price: 0,
              },
              {
                name: "Professional",
                price: 3500,
              },
            ],
          },
        ]}
      />
    );

    expect(screen.getByText("Voice Report")).toBeInTheDocument();

    render(
      <Items
        data={[
          {
            id: "9b565b11-7311-5b5e-a699-97873dffb361",
            name: "Voice Report",
            description: "Calls reporting and analytics of your calls.",
            categories: ["Voice Analytics", "Reporting", "Optimization"],
            subscriptions: [],
          },
        ]}
      />
    );

    expect(screen.queryByRole("li")).toBeNull();
  });
});
