        const hobbies = ['Hunting', 'Fishing', 'Drinking Beer']

        export default function HobbyList() {
          return (
            <section className="card">
              <h2>Hobbies</h2>
              <ul>
                {hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </section>
          )
        }
        