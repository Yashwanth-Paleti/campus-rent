export default function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Rent What You Need,Share what you have From your campus</h1>
      <p>
         CampusRent lets students rent and share items like calculators,
  books, and essentials for short-term use—saving money and
  helping each other.
      </p>

      <div style={styles.actions}>
        <button style={styles.primary}>Start Browsing</button>
        <button style={styles.secondary}>List Your Item</button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    padding: "120px 20px 100px",
    textAlign: "center"
  },
  actions: {
    marginTop: "35px",
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    flexWrap: "wrap"
  },
  primary: {
    backgroundColor: "#ff7a18",
    color: "#fff",
    padding: "14px 26px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1rem"
  },
  secondary: {
    backgroundColor: "#fff",
    color: "#111",
    padding: "14px 26px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1rem"
  }
};
