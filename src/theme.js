import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#000000"
      }
    },
  },
  props: {
    MuiTextField: {
      variant: "outlined",
      fullWidth: true
    }
  }
});

export default theme;