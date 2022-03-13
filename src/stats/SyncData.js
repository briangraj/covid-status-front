import React, {useEffect, useState} from 'react';
import statsService from "../services/stats";

const SyncData = () => {
  const [lastUpdate, setLastUpdate] = useState("");
  const [updatedRecords, setUpdatedRecords] = useState("");

  useEffect(() => {
    statsService.getUpdate()
      .then(update => {
        setLastUpdate(update.lastLoadDate);
        setUpdatedRecords(update.updatedRecords);
      });
  }, []);

  return (
    <div>
      <p>Last import made on {lastUpdate}. {updatedRecords} records were updated.</p>
    </div>
  );
};

export default SyncData;
