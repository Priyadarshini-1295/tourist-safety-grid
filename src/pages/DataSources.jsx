import React, { useState } from "react";
import {
  Database,
  Plus,
  Upload,
  Search,
  CheckCircle,
  Trash2,
  FileText
} from "lucide-react";

function DataSources() {

  const [sources, setSources] = useState([
    {
      id: 1,
      name: "Dengue Surveillance Data",
      type: "Disease Cases",
      location: "Chennai",
      records: 182,
      status: "Active"
    },
    {
      id: 2,
      name: "Influenza Monitoring Data",
      type: "Disease Cases",
      location: "Madurai",
      records: 124,
      status: "Active"
    },
    {
      id: 3,
      name: "COVID-19 Historical Data",
      type: "Historical Data",
      location: "Tamil Nadu",
      records: 76,
      status: "Active"
    }
  ]);

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [newSource, setNewSource] = useState({
    name: "",
    type: "Disease Cases",
    location: "",
    records: ""
  });


  /* ================================
     ADD DATA SOURCE
  ================================= */

  const addSource = () => {

    if (
      !newSource.name ||
      !newSource.location ||
      !newSource.records
    ) {
      alert("Please fill all fields.");
      return;
    }

    const source = {
      id: Date.now(),
      name: newSource.name,
      type: newSource.type,
      location: newSource.location,
      records: Number(newSource.records),
      status: "Active"
    };

    setSources([...sources, source]);

    setNewSource({
      name: "",
      type: "Disease Cases",
      location: "",
      records: ""
    });

    setShowForm(false);
  };


  /* ================================
     DELETE SOURCE
  ================================= */

  const deleteSource = (id) => {

    setSources(
      sources.filter(
        (source) => source.id !== id
      )
    );

  };


  /* ================================
     SEARCH
  ================================= */

  const filteredSources =
    sources.filter((source) =>
      `${source.name} ${source.location} ${source.type}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );


  return (

    <div className="other-page">


      {/* =================================
          HEADER
      ================================= */}

      <div className="page-intro">

        <div>

          <h2>
            Data Sources
          </h2>

          <p>
            Manage disease and outbreak data
            used by the prediction system
          </p>

        </div>


        <div className="monitor-status">

          <span></span>

          Data System Active

        </div>

      </div>


      {/* =================================
          SUMMARY CARDS
      ================================= */}

      <div className="stats-grid">


        <div className="stat-card">

          <div>

            <p>
              Data Sources
            </p>

            <h2>
              {sources.length}
            </h2>

            <small>
              Connected sources
            </small>

          </div>

          <div className="stat-icon blue">

            <Database size={24} />

          </div>

        </div>


        <div className="stat-card">

          <div>

            <p>
              Total Records
            </p>

            <h2>
              {
                sources.reduce(
                  (total, source) =>
                    total + source.records,
                  0
                )
              }
            </h2>

            <small>
              Available records
            </small>

          </div>

          <div className="stat-icon purple">

            <FileText size={24} />

          </div>

        </div>


        <div className="stat-card">

          <div>

            <p>
              Active Sources
            </p>

            <h2>
              {
                sources.filter(
                  (source) =>
                    source.status === "Active"
                ).length
              }
            </h2>

            <small>
              Currently available
            </small>

          </div>

          <div className="stat-icon green">

            <CheckCircle size={24} />

          </div>

        </div>


        <div className="stat-card">

          <div>

            <p>
              Data Status
            </p>

            <h2
              style={{
                fontSize: "20px"
              }}
            >
              READY
            </h2>

            <small>
              Ready for analysis
            </small>

          </div>

          <div className="stat-icon orange">

            <Database size={24} />

          </div>

        </div>

      </div>


      {/* =================================
          ACTION BAR
      ================================= */}

      <div
        className="about-section"
        style={{
          marginBottom: "20px"
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap"
          }}
        >


          {/* SEARCH */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border:
                "1px solid #dfe5ee",
              borderRadius: "8px",
              padding: "0 12px",
              width: "300px",
              background: "#fff"
            }}
          >

            <Search
              size={17}
              color="#8993a5"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search data sources..."
              style={{
                border: "none",
                outline: "none",
                padding: "11px 0",
                width: "100%",
                fontSize: "12px"
              }}
            />

          </div>


          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "10px"
            }}
          >

            <button
              onClick={() =>
                alert(
                  "CSV upload can be connected to your backend later."
                )
              }
              style={{
                padding: "10px 15px",
                border:
                  "1px solid #dfe5ee",
                background: "#fff",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "12px"
              }}
            >

              <Upload size={16} />

              Import Data

            </button>


            <button
              onClick={() =>
                setShowForm(!showForm)
              }
              style={{
                padding: "10px 15px",
                border: "none",
                background: "#347cf0",
                color: "#fff",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "12px",
                fontWeight: "600"
              }}
            >

              <Plus size={16} />

              Add Data Source

            </button>

          </div>

        </div>

      </div>


      {/* =================================
          ADD FORM
      ================================= */}

      {showForm && (

        <div className="about-section">

          <div className="section-heading">

            <div>

              <h2>
                Add Data Source
              </h2>

              <p>
                Enter information about the
                disease dataset
              </p>

            </div>

            <Database size={21} />

          </div>


          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap: "15px"
            }}
          >


            {/* NAME */}

            <div>

              <label
                style={{
                  display: "block",
                  marginBottom: "7px",
                  fontSize: "12px",
                  fontWeight: "600"
                }}
              >
                Data Source Name
              </label>

              <input
                value={newSource.name}
                onChange={(e) =>
                  setNewSource({
                    ...newSource,
                    name: e.target.value
                  })
                }
                placeholder="Example: Dengue Data"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "11px",
                  border:
                    "1px solid #dfe5ee",
                  borderRadius: "8px",
                  outline: "none"
                }}
              />

            </div>


            {/* TYPE */}

            <div>

              <label
                style={{
                  display: "block",
                  marginBottom: "7px",
                  fontSize: "12px",
                  fontWeight: "600"
                }}
              >
                Data Type
              </label>

              <select
                value={newSource.type}
                onChange={(e) =>
                  setNewSource({
                    ...newSource,
                    type: e.target.value
                  })
                }
                style={{
                  width: "100%",
                  padding: "11px",
                  border:
                    "1px solid #dfe5ee",
                  borderRadius: "8px",
                  outline: "none"
                }}
              >

                <option>
                  Disease Cases
                </option>

                <option>
                  Historical Data
                </option>

                <option>
                  Environmental Data
                </option>

                <option>
                  Hospital Data
                </option>

              </select>

            </div>


            {/* LOCATION */}

            <div>

              <label
                style={{
                  display: "block",
                  marginBottom: "7px",
                  fontSize: "12px",
                  fontWeight: "600"
                }}
              >
                Location
              </label>

              <input
                value={newSource.location}
                onChange={(e) =>
                  setNewSource({
                    ...newSource,
                    location: e.target.value
                  })
                }
                placeholder="Example: Chennai"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "11px",
                  border:
                    "1px solid #dfe5ee",
                  borderRadius: "8px",
                  outline: "none"
                }}
              />

            </div>


            {/* RECORDS */}

            <div>

              <label
                style={{
                  display: "block",
                  marginBottom: "7px",
                  fontSize: "12px",
                  fontWeight: "600"
                }}
              >
                Number of Records
              </label>

              <input
                type="number"
                value={newSource.records}
                onChange={(e) =>
                  setNewSource({
                    ...newSource,
                    records: e.target.value
                  })
                }
                placeholder="Example: 500"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "11px",
                  border:
                    "1px solid #dfe5ee",
                  borderRadius: "8px",
                  outline: "none"
                }}
              />

            </div>

          </div>


          <button
            onClick={addSource}
            style={{
              marginTop: "18px",
              padding: "11px 20px",
              border: "none",
              background: "#347cf0",
              color: "#fff",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >

            Save Data Source

          </button>

        </div>

      )}


      {/* =================================
          DATA TABLE
      ================================= */}

      <div className="about-section">

        <div className="section-heading">

          <div>

            <h2>
              Connected Data Sources
            </h2>

            <p>
              Dataset information available
              to the prediction system
            </p>

          </div>

          <Database size={21} />

        </div>


        <div
          style={{
            overflowX: "auto"
          }}
        >

          <table>

            <thead>

              <tr>

                <th>
                  Data Source
                </th>

                <th>
                  Type
                </th>

                <th>
                  Location
                </th>

                <th>
                  Records
                </th>

                <th>
                  Status
                </th>

                <th>
                  Action
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredSources.map(
                (source) => (

                  <tr key={source.id}>

                    <td>

                      <strong>
                        {source.name}
                      </strong>

                    </td>

                    <td>
                      {source.type}
                    </td>

                    <td>
                      {source.location}
                    </td>

                    <td>
                      {source.records}
                    </td>

                    <td>

                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          color: "#218a50",
                          fontSize: "11px"
                        }}
                      >

                        <CheckCircle
                          size={14}
                        />

                        {source.status}

                      </span>

                    </td>

                    <td>

                      <button
                        onClick={() =>
                          deleteSource(
                            source.id
                          )
                        }
                        style={{
                          border: "none",
                          background: "transparent",
                          color: "#e05252",
                          cursor: "pointer"
                        }}
                        title="Delete"
                      >

                        <Trash2
                          size={17}
                        />

                      </button>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>


      {/* =================================
          INFORMATION
      ================================= */}

      <div className="data-info-box">

        <Database size={22} />

        <div>

          <strong>
            Why Data Sources Are Important
          </strong>

          <p>
            Disease prediction depends on reliable
            historical and current data. These datasets
            can contain disease cases, locations,
            environmental conditions and other useful
            information. The collected data can later
            be passed to the machine-learning model
            for outbreak prediction.
          </p>

        </div>

      </div>


      {/* =================================
          PROTOTYPE NOTICE
      ================================= */}

      <div
        style={{
          marginTop: "18px",
          padding: "15px",
          borderRadius: "9px",
          background: "#fff8e8",
          border: "1px solid #f3dfaa",
          color: "#80691c",
          fontSize: "11px"
        }}
      >

        <strong>
          ⚠️ Prototype Notice:
        </strong>{" "}

        Data entered here is currently stored only
        in the frontend application state. For the
        final version, connect this page to a database
        or backend API.

      </div>

    </div>
  );
}

export default DataSources;