function OurTeamItem(props) {
  return (
    <div className="col-md-3">
      <div className="team-item">
        <img src={props.img} alt="" />
        <div className="down-content">
          <h4>{props.name}</h4>
          <span>{props.title}</span>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default OurTeamItem;
