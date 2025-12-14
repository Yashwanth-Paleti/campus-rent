export default function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Rent What You Need,Share what you have</h1>
      <p>
        A peer-to-peer rental platform for college students.
        Save money by renting from your campus.
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
    padding: "100px 20px",
    textAlign: "center"
  },
  actions: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },
  primary: {
    backgroundColor: "#ff7a18",
    color: "#fff",
    padding: "12px 22px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },
  secondary: {
    backgroundColor: "#fff",
    color: "#111",
    padding: "12px 22px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer"
  }
};
