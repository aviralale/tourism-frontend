// src/pages/Events/EventDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const EventDetails = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  const fetchEventDetails = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/events/${id}/`);
      setEvent(response.data);
    } catch (error) {
      console.error("Error fetching event details:", error);
      setError("Failed to fetch event details");
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {event ? (
        <div>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
          <p>Start Date: {new Date(event.start_date).toLocaleString()}</p>
          <p>End Date: {new Date(event.end_date).toLocaleString()}</p>
          <Carousel>
  <CarouselContent>
    <CarouselItem> <img 
            src={`http://127.0.0.1:8000${event.photo1}`} 
            alt={event.title} 
             
            onError={(e) => e.target.src = 'path/to/placeholder.jpg'} 
          /></CarouselItem>
    <CarouselItem> <img 
            src={`http://127.0.0.1:8000${event.photo2}`} 
            alt={event.title} 
           
            onError={(e) => e.target.src = 'path/to/placeholder.jpg'} 
          /></CarouselItem>
    <CarouselItem> <img 
            src={`http://127.0.0.1:8000${event.photo3}`} 
            alt={event.title} 
            
            onError={(e) => e.target.src = 'path/to/placeholder.jpg'} 
          /></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
<video src={`http://127.0.0.1:8000${event.video_file}`}></video>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EventDetails;
