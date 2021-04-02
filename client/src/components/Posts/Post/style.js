import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    position: "relative",
    margin: "30px 0",
    opacity: 0,
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  nameTags: {
    display: "flex",
    margin: "15px 20px 4px 20px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    display: "flex",
    margin: "0 20px 5px 20px",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "20px",
    background: "aqua",
  },
  title: {
    padding: "0 16px",
    marginTop: "5px",
  },
  message: {
    margin: "2px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  heart: {
    color: "palevioletred",
  },
});
