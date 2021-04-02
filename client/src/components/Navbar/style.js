import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    marginBottom: "3rem",
  },
  heading: {
    color: "black",
    fontSize: "72px",
    textDecoration: "none",
    opacity: 0,
  },
  toolbar: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    opacity: 1,
  },
}));
