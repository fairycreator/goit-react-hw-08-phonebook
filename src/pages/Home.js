export default function Home() {
  return (
    <div
      style={{
        fontFamily:
          "'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        backgroundColor: '#F9F9F9',
        minHeight: '50vh',
        // padding: '10px',
        // boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '48px',
          marginTop: '60px',
          marginBottom: '30px',
          color: '#333',
        }}
      >
        Your Contact Hub: <br></br>Stay Connected!
      </h1>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '24px',
          color: '#666',
          maxWidth: '800px',
          margin: 'auto',
          lineHeight: '1.5',
        }}
      >
        This is a working prototype of a phone book with a learning backend.
      </h2>
    </div>
  );
}
