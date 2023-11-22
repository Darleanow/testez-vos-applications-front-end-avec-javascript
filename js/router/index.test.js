/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { router } from "./index";
import { getByTestId } from "@testing-library/dom";

describe("Router Test Suites", () => {
  it("Renders the sign in page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;

    await router();

    expect(getByTestId(document.body, "sign-in-form-title")).toHaveTextContent(
      "Veuillez vous connecter"
    );
  });

  it("Renders the home page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;
    document.location = "/#/home";

    await router();

    expect(getByTestId(document.body, "home-sensors-title")).toHaveTextContent(
      "Vos capteurs"
    );
  });

  it("Renders the facade_details page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;
    document.location = "/#/facade-details";

    await router();

    expect(getByTestId(document.body, "sensor-detail-title")).toHaveTextContent(
      "Détails du capteur"
    );
  });

  it("Renders the Add sensor page", async () => {
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
