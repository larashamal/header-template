import PropTypes from "prop-types";

// todo:
// 1, receive the name and the imgUrl as props
// 2. render the profile component
// 3. on the img, use the name from the form as part of your alt text

export default function Profile({ name, imgUrl }) {
  return (
    <section className="mx-auto w-48 flex-col items-center">
      <h2> Photo of {name}</h2>
      <img
        className=""
        src={imgUrl}
        alt={name}
        style={{ width: 200, height: 200 }}
      />
    </section>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
