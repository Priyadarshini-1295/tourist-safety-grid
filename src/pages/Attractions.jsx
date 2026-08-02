function Attractions() {

  const places = [
    {
      name: "Mysore Palace",
      location: "Karnataka",
      image: "https://images.unsplash.com/photo-1600100397608-4d7e7f8c7d90",
      description: "A beautiful historical palace known for its architecture and heritage."
    },

    {
      name: "Marina Beach",
      location: "Chennai, Tamil Nadu",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description: "One of the longest urban beaches with scenic coastal views."
    },

    {
      name: "Ooty",
      location: "Tamil Nadu",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
      description: "A famous hill station known for nature and pleasant climate."
    },

    {
      name: "Hampi",
      location: "Karnataka",
      image: "https://images.unsplash.com/photo-1600681529404-1d0c9f5f5f7d",
      description: "A UNESCO heritage site famous for ancient temples and ruins."
    }
  ];


  return (
    <div className="page">

      <h2>
        🏞 Popular Tourist Attractions
      </h2>


      <div className="features">

        {
          places.map((place, index) => (

            <div className="card attraction-card" key={index}>

              <img 
                src={place.image}
                alt={place.name}
              />

              <h3>
                {place.name}
              </h3>

              <p>
                📍 {place.location}
              </p>

              <p>
                {place.description}
              </p>

              <button>
                Explore
              </button>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default Attractions;