/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { router } from "./index";
import { getByTestId } from "@testing-library/dom";

describe("Router Test Suites", () => {
  it("Test Renders the sign in page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;

    await router();

    expect(getByTestId(document.body, "sign-in-form-title")).toHaveTextContent(
      "Veuillez vous connecter"
    );
  });

  it("Test Renders the home page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;
    document.location = "/#/home";

    await router();

    expect(getByTestId(document.body, "home-sensors-title")).toHaveTextContent(
      "Vos capteurs"
    );
  });

  it("Test Renders the facade_details page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;
    document.location = "/#/facade-details";

    await router();

    expect(getByTestId(document.body, "sensor-detail-title")).toHaveTextContent(
      "Détails du capteur"
    );
  });

  it("Test Renders the Add sensor page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;
    document.location = "/#/add-sensor";

    await router();

    expect(getByTestId(document.body, "add-sensor-title")).toHaveTextContent(
      "Ajout d'un nouveau capteur"
    );
  });
});
