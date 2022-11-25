const Singlepage = (props) => {
  const { title, id } = props;

  return (
    <>
      <li>
        {id} {"-"} {title}
      </li>
    </>
  );
};

export default Singlepage;
