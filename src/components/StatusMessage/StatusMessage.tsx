import "./StatusMessage.scss";

const StatusMessage = ({ title, image, description, children }: any) => {
  return (
    <section className="status-message-container">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </section>
  );
};

export default StatusMessage;
