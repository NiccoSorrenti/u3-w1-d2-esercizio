import Alert from 'react-bootstrap/Alert';

const MyWelcome = function () {
  return (
    <>
      {['primary'].map((variant) => (
        <Alert className="text-center" key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
};

export default MyWelcome;
