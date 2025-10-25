import { animate } from "motion";

animate(
  "section.content.upcoming",
  {
    y: [-100, -10],
    opacity: [0, 1],
  },
  { duration: 0.6, delay: 0 }
);

animate(
  "section.content.bg-color-1",
  {
    y: [-100, -10],
    opacity: [0, 1],
  },
  { duration: 0.6, delay: 0.6 }
);

const artist = "minta & the brook trout";
const appId = "c6fbf486cfb1cbda49cb30e03419e250";
const apiURL = `https://rest.bandsintown.com/artists/${encodeURIComponent(
  artist
)}/events?app_id=${appId}&date=upcoming`;

async function loadConcerts() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    console.log("data", data);

    if (!Array.isArray(data) || data.length === 0) {
      document.getElementById("bit-widget-custom").innerHTML = `
      <li class="no-shows">
        <div>there are no upcoming concerts at the moment </div>
      </li>`;
      return;
    }

    const html = data
      .map((event) => {
        const date = new Date(event.datetime).toLocaleDateString("en-EN", {
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
        });
        const venueName = `${event.venue.name}`;
        const venueCityCountry = `${event.venue.city}, ${event.venue.country}`;
        const ticketUrl = event.offers?.[0]?.url || event.url;
        const eventDescription = event.description || "";
        const lineup = event.lineup?.join(" + ") || "";

        const structure = `
            <li class="event">
              <div class="event-info">
                <div class="event-date">${date}</div>
                <div class="event-venue"><strong>${venueName}</strong></div>
                <div class="event-location">${venueCityCountry}</div>
                <div class="event-description">${eventDescription}</div>
                <div class="event-lineup">${lineup}</div>
              </div>
              <div class="event-tickets">
                <a href="${ticketUrl}" class="tickets" target="_blank" rel="noopener">Tickets</a>
              </div>
            </li>
          `;

        return (document.getElementById("bit-widget-custom").innerHTML =
          structure);
      })
      .join("");

    document.getElementById("bit-widget-custom").innerHTML = html;
  } catch (error) {
    console.error(error);

    document.getElementById("bit-widget-custom").innerHTML = `
      <li class="no-shows">
        <div>there are no upcoming concerts at the moment </div>
      </li>`;
  }
}
loadConcerts();
