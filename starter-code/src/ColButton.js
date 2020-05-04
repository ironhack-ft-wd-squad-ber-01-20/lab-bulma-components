import React from "react";

const colbutton = () => {
  return (
    <div>
      {/* <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton> */}

      <button class="button is-rounded my-class is-danger is-small">
        Button 1
      </button>
      <button class="button is-small is-success">Button 2</button>
    </div>
  );
};

export default colbutton;
