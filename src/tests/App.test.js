import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("should render App", () => {
    const wrapper = shallow(<App />, {
      context: {},
      disableLifecycleMethods: false
    });
    console.log(wrapper.debug());
  });
});
