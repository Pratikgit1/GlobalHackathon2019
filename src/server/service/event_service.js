import eventApi from "../api/event_api";

const eventService = {
  fetchAllRecords: (req, res) => {
    eventApi
      .fetchAllRecords()
      .then(eventList => {
        res.status(200).json({ eventList: eventList }); //Success
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err: err }); //Internal Server Error
      });
  }
};

export default eventService;