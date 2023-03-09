import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [missions, setMissions] = useState([])
  useEffect(() => {
    axios.get("https://plantogetherdotnetapi.azurewebsites.net/api/Missions")
      .then(response => setMissions(response.data))
      .catch(error => console.log(error))
  }, [missions])

  function getPriority(priority)
  {
    switch (priority)
    {
      case 0:
        return 'Low'
      case 1:
        return 'Medium'
      case 2:
        return 'High'
      default:
        return ''
    }
  }
  return (
    <div className="App">
      {missions.map((m) =>
        <div key={m.Id} class="p-card">
          <h3>{m.Title}</h3>
          <p class="p-card__content">{m.Description}</p>
          <p class="p-card__content">{getPriority(m.Priority)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
