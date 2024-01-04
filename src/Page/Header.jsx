
export default function Header({setIsAdding}) {
  return (
    <div>
      <header>
        <h1>Manegment Seystem</h1>
        <div style={{ marginTop: '30px', marginBottom: '18px' }}>
          <button className="round-button" onClick={() => setIsAdding(true)}>+ Add Imformation</button>
        </div>
      </header>
    </div>
  )
}
