import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
        <img 
            src={props.image} 
            alt={props.title} 
        />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p1>{props.description}</p1>
    </section>
  );
}

export default MeetupDetail;
