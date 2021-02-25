import React from 'react';
import moment from 'moment';

export const JournalEntry = ({ id, date, title, body, url }) => {

  const noteDate = moment(date);

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
        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('D')}</h4>
      </div>
    </div>
  )
}
