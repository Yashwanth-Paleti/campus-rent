export default function Features() {
  return (
    <section style={styles.section}>
      <h2>Why CampusRent?</h2>
      <div style={styles.grid}>
        <div style={styles.card}>Save Money</div>
        <div style={styles.card}>Verified Students</div>
        <div style={styles.card}>Short-Term & Affordable</div>
        <div style={styles.card}>Built for College Students</div>
        <div style={styles.card}>Earn From Unused Items</div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "30px",
    marginTop: "40px",
    maxWidth: "900px",
    marginInline: "auto"
  },
  card: {
    padding: "32px",
    border: "1px solid #eee",
    borderRadius: "14px",
    backgroundColor: "#fff"
  }
};
