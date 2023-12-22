/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { router } from "./index";
import { getByTestId } from "@testing-library/dom";

// Test suite for the router functionality
describe("Router Test Suites", () => {
  // Test to verify the rendering of the sign-in page
  it("should render the sign-in page correctly", async () => {
    // Setting up the DOM environment for the test
    document.body.innerHTML = `<div id="root"></div>`;

    // Calling the router function
    await router();

    // Expecting the sign-in form title to match the specific text
    expect(getByTestId(document.body, "sign-in-form-title")).toHaveTextContent(
      "Veuillez vous connecter"
    );
  });

  // Test to verify the rendering of the home page
  it("should render the home page correctly", async () => {
    // Setting up the DOM and URL for the home page
    document.body.innerHTML = `<div id="root"></div>`;
    document.location = "/#/home";

    // Calling the router function
    await router();

    // Expecting the home page title to match the specific text
    expect(getByTestId(document.body, "home-sensors-title")).toHaveTextContent(
      "Vos capteurs"
    );
  });

  // Test to verify the rendering of the facade_details page
  it("should render the facade_details page correctly", async () => {
    // Setting up the DOM for the facade_details page
    document.body.innerHTML = `<div id="root"></div>`;
    document.location = "/#/facade-details";

    // Calling the router function
    await router();

    // Expecting the sensor detail title to match the specific text
    expect(getByTestId(document.body, "sensor-detail-title")).toHaveTextContent(
      "Détails du capteur"
    );
  });

  // Test to verify the rendering of the Add sensor page
  it("should render the Add sensor page correctly", async () => {
    // Setting up the DOM and URL for the Add sensor page
    document.body.innerHTML = `<div id="root"></div>`;
    document.location = "/#/add-sensor";

    // Calling the router function
    await router();

    // Expecting the add sensor title to match the specific text
    expect(getByTestId(document.body, "add-sensor-title")).toHaveTextContent(
      "Ajout d'un nouveau capteur"
    );
  });

  // Test pour vérifier le rendu de la page d'erreur
  it("should render the error page for an unknown route", async () => {
    // Configuration de l'environnement DOM pour la page d'erreur
    document.body.innerHTML = `<div id="root"></div>`;
    window.location.hash = "#/une-route-inconnue"; // Définissez un chemin non défini dans vos routes

    // Appel de la fonction du routeur
    await router();

    // Vérifiez que la page d'erreur est rendue
    // Remplacez 'error-page-title' par le test id approprié de votre page d'erreur
    expect(getByTestId(document.body, "error-page-title")).toHaveTextContent(
      "Error Page"
    );
  });
});
