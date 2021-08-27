import { styled } from "../../stitches.config";

export const StyledNotFound = styled("main", {
  background: "#3483eb",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  color: "#111",
  fontFamily: "Poppins, sans-serif",

  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  ".message-error": {
    height: "10rem",
    fontSize: "1.3rem",

    ".goto-home": {
      color: "#FFF",
      border: "0.05rem solid #FFF",
      borderRadius: "0.5rem",
      padding: "1rem",
      width: "fit-content",
      transition: "linear 200ms",

      "&:hover": {
        background: "#111",
      },
    },

    "@tablet": {
      fontSize: "2.5rem",

      ".goto-home": {
        padding: "2rem 2rem",
      },
    },
  },

  ".message-noerror": {
    fontSize: "0.65rem",

    "p > a": {
      color: "#fff",

      "&:hover": {
        borderBottom: "0.1rem solid #FFF",
      },
    },

    "@tablet": {
      fontSize: "1rem",
    },
  },
});
