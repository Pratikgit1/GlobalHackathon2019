import eventApi from "../api/event_api";

const eventService = {
  fetchAllRecords: (req, res) => {
    let {filters} = req.query
    eventApi
      .fetchAllRecords(JSON.parse(filters))
      .then(eventList => {
        res.status(200).json({ eventList: eventList }); //Success
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err: err }); //Internal Server Error
      });
  },
  insertRecord: (req, res) => {
    let {eventRecord} = req.body;
    eventApi
      .insertRecord(eventRecord)
      .then(eventRecord => {
        res.status(200).json({ eventRecord: eventRecord }); //Success
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err: err }); //Internal Server Error
      });
  }


  
};

export default eventService;
