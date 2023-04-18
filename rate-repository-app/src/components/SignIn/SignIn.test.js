import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import SignInContainer from "./SignInContainer";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();

      render(<SignInContainer onSubmit={onSubmit} />);

      const submitButton = screen.getByTestId("submitButton");
      const usernameInput = screen.getByTestId("usernameInput");
      const passwordInput = screen.getByTestId("passwordInput");

      const input = { username: "kalle", password: "password" };
      fireEvent.changeText(usernameInput, input.username);
      fireEvent.changeText(passwordInput, input.password);

      fireEvent.press(submitButton);

      await waitFor(() => {
        const { username, password } = onSubmit.mock.calls[0][0];
        expect(username).toBe(input.username);
        expect(password).toBe(input.password);
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});
