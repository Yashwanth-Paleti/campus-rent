export default function Features() {
  return (
    <section style={styles.section}>
      <h2>Why CampusRent?</h2>
      <div style={styles.grid}>
        <div style={styles.card}>Save Money</div>
        <div style={styles.card}>Verified Students</div>
        <div style={styles.card}>Short-Term Rentals</div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  },
  card: {
    padding: "30px",
    border: "1px solid #eee",
    borderRadius: "10px"
  }
};
