import React from "react";
import "./Recent.css";

const RecentUpdates = () => {
  return (
    <>
      <div className="main-heading">
        <h2>Recent Updates</h2>
      </div>
      <div className="recent-updates-wrapper">
        <div className="recent-update-card">
          <h3 className="recent-update-title">New Feature Release</h3>
          <p className="recent-update-description">
            We are excited to announce the release of our latest feature, which
            allows users to track their progress in real-time.
          </p>
          <p className="recent-update-date">April 15, 2023</p>
        </div>
        <div className="recent-update-card">
          <h3 className="recent-update-title">Bug Fix</h3>
          <p className="recent-update-description">
            We have fixed a bug that was causing some users to experience slow
            load times on the site. Everything should be running smoothly now!
          </p>
          <p className="recent-update-date">April 10, 2023</p>
        </div>
        <div className="recent-update-card">
          <h3 className="recent-update-title">New Blog Post</h3>
          <p className="recent-update-description">
            Check out our latest blog post on the benefits of using React for
            building web applications.
          </p>
          <p className="recent-update-date">April 5, 2023</p>
        </div>
      </div>
    </>
  );
};

export default RecentUpdates;
