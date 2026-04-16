        const supplies = ["Surly Darkness", "Founders Dirty Bastard", "Smithwick's", "Shiner Oktoberfest", "Guinness"]

        export default function Supplies() {
          return (
            <section className="card">
              <h2>Supplies Needed</h2>
              <ul>
                {supplies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )
        }
        