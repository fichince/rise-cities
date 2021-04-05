import React from "react";
import Grid from "@material-ui/core/Grid";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Hidden from "@material-ui/core/Hidden";
import ensureAbsoluteUrl from '../../utils/ensureAbsoluteUrl';

const DEFAULT_IMAGE = '/default-profile-image.jpg'

const EventGalleryItem = ({ id, content={} }) => {
  const eventImage = content.image?.imageSrc || DEFAULT_IMAGE

  return (
    <div className="event">
      <Hidden xsDown>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3} md={3}>
            <div className="text-secondary text-xs mb-2">{content.location}</div>
            <div className="text-bold text-uppercase">{content.date}</div>
          </Grid>

          <Grid item xs={4} sm={3} md={4}>
            <img src={eventImage} alt="" className="event-image" />
          </Grid>

          <Grid item xs={8} sm={6} md={5}>
            <h3 className="text-uppercase mt-0">
              { content.title }
            </h3>
            <p>{ content.description }</p>
            {
              content.url &&
              <a className="pretty-link" href={ ensureAbsoluteUrl(content.url) }>More info <span><ArrowForwardIcon style={{ fontSize: 20 }} /></span></a>
            }
          </Grid>
        </Grid>
        </Hidden>
        <Hidden smUp>
          <a href={ ensureAbsoluteUrl(content.url) } className="event-link">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img src={eventImage} alt="" className="event-image" style={{ maxHeight: '220px', objectFit: 'cover' }} />
              </Grid>

              <Grid item xs={12}>
                <div className="text-secondary text-xs mb-2">{content.location}</div>
                <div className="text-bold text-dark">{content.date}</div>
                <h3 className="text-uppercase mt-2 text-dark">
                  { content.title }
                </h3>
              </Grid>
            </Grid>
          </a>
        </Hidden>
    </div>
  );
};

EventGalleryItem.defaultProps = {
  content: {},
  classes: "",
  onSave: () => { console.log('implement a function to save changes') }
}

export default EventGalleryItem;
