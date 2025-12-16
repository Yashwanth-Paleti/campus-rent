export default function HowItWorks() {
  return (
    <section style={styles.section}>
      <h2>How It Works</h2>

      <div style={styles.steps}>
        <div style={styles.card}>
          <h3>1. List or Browse</h3>
          <p>
            List items you already have or browse items available
            from students in your college.
          </p>
        </div>

        <div style={styles.card}>
          <h3>2. Rent for Short Term</h3>
          <p>
            Rent items only for the time you need—days, weeks, or
            exam periods.
          </p>
        </div>

        <div style={styles.card}>
          <h3>3. Save or Earn</h3>
          <p>
            Save money by renting instead of buying, or earn passive
            income by renting out unused items.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "70px 20px",
    textAlign: "center",
    backgroundColor: "#fafafa"
  },
  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
    marginTop: "40px",
    maxWidth: "900px",
    marginInline: "auto"
  },
  card: {
    padding: "25px",
    border: "1px solid #eee",
    borderRadius: "12px",
    background: "#fff"
  }
};
