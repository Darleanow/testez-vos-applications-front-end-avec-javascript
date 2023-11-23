/**
 * @jest-environment jsdom
 */
import userEvent from "@testing-library/user-event";
import { getByRole, getByTestId } from "@testing-library/dom";

import SignInPage from "../../pages/signIn/index";
import { handleSignInForm } from "./index";

beforeEach(() => {
  document.body.innerHTML = SignInPage.render();
  handleSignInForm();
});

afterEach(() => {
  document.body.innerHTML = "";
});

describe("Test suite for Sign in form", () => {
  it("Check no error when empty", () => {
    expect(
      document
        .querySelector(".user-email-error-msg")
        .classList.contains("hidden")
    ).toBe(true);
  });
  it("should display the email error message when the value is not correct", () => {
    userEvent.type(
      getByTestId(document.body, "user-email-label"),
      "thomas@thomas.com"
    );

    userEvent.click(getByRole(document.body, "button"));

    expect(
      document
        .querySelector(".user-email-error-msg")
        .classList.contains("hidden")
    ).toBe(false);
  });

  it("should display the pass error message when the email is correct but not password", () => {
    userEvent.type(
      getByTestId(document.body, "user-email-label"),
      "thomas@facadia.com"
    );

    userEvent.click(getByRole(document.body, "button"));

    expect(
      document
        .querySelector(".user-email-error-msg")
        .classList.contains("hidden")
    ).toBe(true);

    expect(
      document
        .querySelector(".user-password-error-msg")
        .classList.contains("hidden")
    ).toBe(false);
  });

  it("Check no error when empty", () => {
    expect(
      document
        .querySelector(".user-email-error-msg")
        .classList.contains("hidden")
    ).toBe(true);
  });
  it("should display the pass error message when the pass value is not correct", () => {
    userEvent.type(
      getByTestId(document.body, "user-email-label"),
      "thomas@facadia.com"
    );

    userEvent.type(
      getByTestId(document.body, "user-password-label"),
      "qwerty"
    );

    userEvent.click(getByRole(document.body, "button"));

    expect(
      document
        .querySelector(".user-password-error-msg")
        .classList.contains("hidden")
    ).toBe(false);
  });

  it("should not display any error messages when valid", () => {
    userEvent.type(
      getByTestId(document.body, "user-email-label"),
      "thomas@facadia.com"
    );

    userEvent.type(
      getByTestId(document.body, "user-password-label"),
      "azerty"
    );

    userEvent.click(getByRole(document.body, "button"));

    expect(
      document
        .querySelector(".user-email-error-msg")
        .classList.contains("hidden")
    ).toBe(true);

    expect(
      document
        .querySelector(".user-password-error-msg")
        .classList.contains("hidden")
    ).toBe(true);
  });

});
