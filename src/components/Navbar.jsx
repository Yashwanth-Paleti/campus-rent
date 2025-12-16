export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={{ fontWeight: 700 }}>CampusRent</h2>
      <div style={styles.links}>
        <a href="#">Browse</a>
        <a href="#">How it Works</a>
        <a href="#">Sign In</a>
        <button style={styles.btn}>List an Item</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 10
  },
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  btn: {
    padding: "8px 14px",
    backgroundColor: "#ff7a18",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};
