document.getElementById("tripForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from refreshing page

  const tripName = e.target.tripName.value;
  const startDate = e.target.startDate.value;

  // 🚨 Replace this with your actual Azure Function URL
  const apiUrl = "https://your-function.azurewebsites.net/api/addTrip";

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({ tripName, startDate }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Trip added successfully!");
      console.log("Success:", data);
    })
    .catch((err) => {
      alert("Error adding trip.");
      console.error("Error:", err);
    });
});
