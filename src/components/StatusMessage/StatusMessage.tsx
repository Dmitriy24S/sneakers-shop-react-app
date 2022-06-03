import "./StatusMessage.scss";

interface StatusMessagePropsType {
  title: string;
  image: string;
  description: string;
  children: JSX.Element | string;
}

const StatusMessage = ({
  title,
  image,
  description,
  children,
}: StatusMessagePropsType) => {
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
