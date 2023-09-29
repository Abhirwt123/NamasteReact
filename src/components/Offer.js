const Offer = (props) => {
  const { data } = props;
  return (
    <div className="item">
      <div className="tag-box">
        <p className="tag">{data.info.offerTag}</p>
      </div>
      <div className="offer-code-box">
        <p className="rupees">{data.info.header}</p>
        <p className="code">
          {data.info.couponCode} | {data.info.description}
        </p>
      </div>
    </div>
  );
};

export default Offer;
