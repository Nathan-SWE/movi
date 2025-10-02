import { Paper, PasswordInput, TextInput } from "@mantine/core";

const newInputStyles = (theme) => ({
  input: {
    color: theme.colors["light-gray"][1],
    paddingLeft: theme.spacing.xxs,
  },
  label: {
    top: "-10px",
    position: "absolute",
    paddingLeft: theme.spacing.xxs,
    paddingRight: theme.spacing.xxs,
    backgroundColor: theme.colors["dark-blue"][9],
  },
});

function InputWrapper({ children }) {
  return (
    <Paper
      withBorder
      radius="xl"
      px="sm"
      py="xs"
      bg="transparent"
      sx={(theme) => ({
        borderColor: theme.colors["dark-gray"][7],
        position: "relative",
        transition: "border-color 250ms ease",
        "&:focus-within": {
          borderColor: theme.colors["accent-cyan"][6],
        },
      })}
    >
      {children}
    </Paper>
  );
}

function CustomTextInput(props) {
  return (
    <InputWrapper>
      <TextInput variant="unstyled" {...props} styles={newInputStyles} />
    </InputWrapper>
  );
}

function CustomPasswordInput(props) {
  return (
    <InputWrapper>
      <PasswordInput variant="unstyled" {...props} styles={newInputStyles} />
    </InputWrapper>
  );
}

export { CustomTextInput, CustomPasswordInput };
