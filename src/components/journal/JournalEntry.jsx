import React from 'react';

export const JournalEntry = ({ id, date, title, body, url }) => {
  return (
    <div className="journal__entry">

      {
        url &&
        <div className="journal__entry-picture"
            style={{ 
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundImage: `url(${url})`
            }}>
        </div>
      }

      {
        (!url | url == "") &&
        <div style={{ marginLeft: 10 }}>
          <i className="far fa-image fa-5x ms-1"></i>
        </div>
      }

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">
          {body}
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
