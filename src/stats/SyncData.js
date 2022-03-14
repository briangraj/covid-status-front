import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import statsService from "../services/stats";

const SyncData = () => {
  // TODO group into single state
  const [lastUpdate, setLastUpdate] = useState("");
  const [updatedRecords, setUpdatedRecords] = useState("");

  const handleError = (err) => {
    alert(err);
  };

  const refreshSyncData = () => {
    return statsService.getUpdate()
      .then(update => {
        setLastUpdate(update.lastLoadDate);
        setUpdatedRecords(update.updatedRecords);
      });
  };

  useEffect(() => {
    refreshSyncData()
      .catch(handleError);
  }, []);

  const handleClick = () => {

    statsService.postUpdate()
      .then(refreshSyncData)
      .catch(handleError);
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
