import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  container: {
    width: "100%",
    padding: "20px",
  },
  description: {
    marginTop: "25px",
    width: "100%",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "20px",
    borderBottom: "1px solid #e7e7e7",
  },
  imageContainer: {
    width: "50%",
    height: "auto",
    flex: "4",
    padding: "0 50px",
  },
  mainImage: {
    width: "100%",
    aspectRatio: "1 / 1",
    paddingBottom: "20px",
  },
  subImage: {
    width: "20%",
    border: "1px solid #e7e7e7",
    borderRadius: "10px",
    ':hover': {
      cursor: "pointer",
      opacity: "80%",
    },
  },
  infoContainer: {
    width: "50%",
    paddingLeft: "20px",
    flex: "5",
  },
  info: {
    paddingBottom: "20px",
    borderBottom: "1px solid #e7e7e7",
  },
  productTitle: {
    fontWeight: "bold",
    fontSize: "25px",
    color: "#000",
    ':hover': {
      color: "#009f7f",
      cursor: "pointer",
    },
  },
  heart: {
    width: "25px",
    height: "35px",
    backgroundColor: "#fff",
    borderRadius: "90px",
    border: "1px solid rgb(193, 193, 193)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  detail: {
    padding: "20px 0",
    borderBottom: "1px solid #e7e7e7",
  },
})