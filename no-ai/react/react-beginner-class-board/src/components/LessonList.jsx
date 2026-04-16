        const lessons = [
          'Quantum Computing 101',
          'Advanced Ballistics Calculations',
          'Mead Making for Beginners',
          'Advanced Team Tactics'
        ]

        export default function LessonList() {
          return (
            <section className="card">
              <h2>Lessons</h2>
              <ul>
                {lessons.map((lesson, index) => (
                  <li key={index}>{lesson}</li>
                ))}
              </ul>
            </section>
          )
        }
        