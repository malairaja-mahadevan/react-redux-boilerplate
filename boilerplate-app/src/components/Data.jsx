import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "modules/application";
import selectors from "modules/application/selectors";

function Data() {
  const dispatch = useDispatch();
  const loaded = useSelector(selectors.applicationLoaded);
  const data = useSelector(selectors.applicationData);

  useEffect(() => {
    if (!loaded) {
      dispatch(actions.loadData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div className="data-container">
      <h1>Sample Data</h1>
      <span>Data from App State - {data.title}</span>
    </div>
  );
}

export default Data;
