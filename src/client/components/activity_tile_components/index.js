import React from "react";
import "./activity_tile.scss";

export const ActivityTile = function({ activity, onActivitySelection }) {
  return (
    <div className="col-6" onClick={() => onActivitySelection(activity)}>
      <div className="row p-2">
        <div className="col-12 activity cursor-pointer">
          <div className="activity-title">{activity.title}</div>
          <div className={"activityIcon " + activity.activityColor}>
            <i className={activity.icon} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const ActivityTileTray = function({
  activityList,
  onActivitySelection
}) {
  return (
    <div className="row pt-5">
      {activityList.map(activityItem => {
        return (
          <ActivityTile
            activity={activityItem}
            key={activityItem.id}
            onActivitySelection={onActivitySelection}
          />
        );
      })}
    </div>
  );
};
