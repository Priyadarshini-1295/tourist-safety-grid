function Dashboard() {

  return (
    <div className="page">

      <h2>
        📊 Tourist Safety Dashboard
      </h2>


      <div className="features">


        <div className="card">
          <h3>👥 Total Tourists</h3>
          <p>
            1250 Registered Tourists
          </p>
        </div>


        <div className="card">
          <h3>🟢 Active Tourists</h3>
          <p>
            980 Tourists Currently Travelling
          </p>
        </div>


        <div className="card">
          <h3>🚨 Emergency Alerts</h3>
          <p>
            5 Active SOS Requests
          </p>
        </div>


        <div className="card">
          <h3>📍 Safe Locations</h3>
          <p>
            45 Verified Tourist Spots
          </p>
        </div>


      </div>


      <div className="card dashboard-info">

        <h3>
          Safety Status
        </h3>

        <p>
          ✅ All major tourist locations are monitored.
        </p>

        <p>
          🛡 Emergency response system is active.
        </p>

        <p>
          📡 Real-time tourist safety tracking enabled.
        </p>

      </div>


    </div>
  );
}


export default Dashboard;