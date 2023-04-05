// Define an array of events
const events = [
    {
      id: 1,
      name: "Event 1",
      location: "Location 1",
      date: "2023-03-25",
      time: "10:00",
      topic: "Topic 1"
    },
    {
      id: 2,
      name: "Event 2",
      location: "Location 2",
      date: "2023-04-01",
      time: "14:00",
      topic: "Topic 2"
    },
    {
      id: 3,
      name: "Event 3",
      location: "Location 3",
      date: "2023-04-09",
      time: "14:00",
      topic: "Topic 3"
    },
    {
      id: 4,
      name: "Event 4",
      location: "Location 4",
      date: "2023-04-21",
      time: "14:00",
      topic: "Topic 4"
    },
    {
      id: 5,
      name: "Event 5",
      location: "Location 5",
      date: "2023-05-10",
      time: "16:00",
      topic: "Topic 5"
    }
  ];
  
  // Get the event-list div
  const eventList = document.getElementById("event-list");
  
  // Loop through the events array and create a div for each event
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
  
    // Create a div for the event
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");
    eventDiv.innerHTML = `
      <h2>${event.name}</h2>
      <p>Location: ${event.location}</p>
      <p>Date: ${event.date}</p>
      <p>Time: ${event.time}</p>
      <p>Topic: ${event.topic}</p>
      <button class="edit-btn" data-id="${event.id}">Edit</button>
    `;
  
    // Add the event div to the event-list div
    eventList.appendChild(eventDiv);
  }
  
  // Add click event listener to all edit buttons
  const editBtns = document.querySelectorAll(".edit-btn");
  editBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Get the ID of the event to edit from the data-id attribute
      const eventId = btn.getAttribute("data-id");
  
      // Redirect to the edit page with the ID as a query parameter
      window.location.href = `edit.html?id=${eventId}`;
    });
  });
  