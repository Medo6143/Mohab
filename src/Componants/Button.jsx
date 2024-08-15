import PropTypes from 'prop-types';

export const Button = (props) => {
    return (
        <>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-2xl mt-4 hover:bg-slate-700 border-none mr-4 w-[100%] cursor-pointer"
            onClick={props.click}
          >
            {props.button}
          </button>
        </>
      );
}

Button.propTypes = {
  click: PropTypes.func.isRequired,
  button: PropTypes.string.isRequired,
};
