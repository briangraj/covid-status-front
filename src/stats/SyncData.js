import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import statsService from "../services/stats";

const SyncData = () => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    statsService.postUpdate()
      .then(refreshSyncData)
      .catch(handleError)
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <p>Last import made on {lastUpdate}. {updatedRecords} records were updated.</p>
      {/*TODO reuse button*/}
      <Button
        type="submit"
        variant="contained"
        onClick={handleClick}
        disabled={loading}
      >
        { loading ? "Loading..." : "Synchronize" }
      </Button>
    </div>
  );
};

export default SyncData;
