import React, { useEffect } from 'react';

export default function ContactMap() {
  useEffect(() => {
    // Initialize the Google map
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("google-map"), {
        center: { lat: -27.9673, lng: 153.4100 }, // Coordinates for "Australia Post - Labrador LPO"
        zoom: 14,
        draggable: true, // Allows dragging of the map
      });

      // Add a marker for the location
      new window.google.maps.Marker({
        position: { lat: -27.9673, lng: 153.4100 },
        map,
        title: "Australia Post - Labrador LPO",
      });
    };

    // Load Google Maps script dynamically
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    // Expose initMap function globally for the Google Maps API callback
    window.initMap = initMap;
  }, []);

  return (
    <section className="px-6 lg:px-20 py-16 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
      <div id="google-map" className="w-full h-[500px] rounded-lg shadow-lg"></div>
    </section>
  );
}
