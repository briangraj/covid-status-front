import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import statsService from "../services/stats";

const SyncData = () => {
  // TODO group into single state
  const [lastUpdate, setLastUpdate] = useState("");
  const [updatedRecords, setUpdatedRecords] = useState("");

  const refreshSyncData = () => {
    statsService.getUpdate()
      .then(update => {
        setLastUpdate(update.lastLoadDate);
        setUpdatedRecords(update.updatedRecords);
      });
  };

  useEffect(refreshSyncData, []);

  const handleClick = (event) => {
    event.preventDefault();

    statsService.postUpdate()
      .then(refreshSyncData);
  };

  return (
    <div>
      <p>Last import made on {lastUpdate}. {updatedRecords} records were updated.</p>
      <Button
        type="submit"
        variant="contained"
        onClick={handleClick}
      >
        Synchronize
      </Button>
    </div>
  );
};

export default SyncData;
