/**
 * @jest-environment jsdom
 */


import userEvent from "@testing-library/user-event";
import { getByRole, getByTestId } from "@testing-library/dom";
import SignInPage from "../../pages/signIn/index";
import { handleSignInForm } from "./index";

// Setup before each test
beforeEach(() => {
  // Rendering the Sign-In page in the DOM
  document.body.innerHTML = SignInPage.render();
  handleSignInForm();
});

// Cleanup after each test
afterEach(() => {
  document.body.innerHTML = "";
});

// Defining test suite for Sign-In form functionality
describe("Test suite for Sign-In form", () => {
  
  // Test to check for absence of error messages when inputs are empty
  it("should not show error messages when inputs are empty", () => {
    expect(
      document.querySelector(".user-email-error-msg").classList.contains("hidden")
    ).toBe(true);
  });

  // Test to display an error for invalid email
  it("should display an error message for invalid email input", () => {
    userEvent.type(getByTestId(document.body, "user-email-label"), "thomas@thomas.com");
    userEvent.click(getByRole(document.body, "button"));

    expect(
      document.querySelector(".user-email-error-msg").classList.contains("hidden")
    ).toBe(false);
  });

  // Test to display an error for missing password when email is correct
  it("should display a password error message when the email is valid but password is missing", () => {
    userEvent.type(getByTestId(document.body, "user-email-label"), "thomas@facadia.com");
    userEvent.click(getByRole(document.body, "button"));

    expect(
      document.querySelector(".user-email-error-msg").classList.contains("hidden")
    ).toBe(true);
    expect(
      document.querySelector(".user-password-error-msg").classList.contains("hidden")
    ).toBe(false);
  });

  // Test to display an error for invalid password
  it("should display a password error message for invalid password input", () => {
    userEvent.type(getByTestId(document.body, "user-email-label"), "thomas@facadia.com");
    userEvent.type(getByTestId(document.body, "user-password-label"), "qwerty");
    userEvent.click(getByRole(document.body, "button"));

    expect(
      document.querySelector(".user-password-error-msg").classList.contains("hidden")
    ).toBe(false);
  });

  // Test to confirm no errors are shown with valid inputs
  it("should not display any error messages with valid inputs", () => {
    userEvent.type(getByTestId(document.body, "user-email-label"), "thomas@facadia.com");
    userEvent.type(getByTestId(document.body, "user-password-label"), "azerty");
    userEvent.click(getByRole(document.body, "button"));

    expect(
      document.querySelector(".user-email-error-msg").classList.contains("hidden")
    ).toBe(true);
    expect(
      document.querySelector(".user-password-error-msg").classList.contains("hidden")
    ).toBe(true);
  });
});
