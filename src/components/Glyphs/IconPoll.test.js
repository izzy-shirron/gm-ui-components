import React from "react";
import { shallow } from "enzyme";

import IconPoll from "./IconPoll";

describe("IconPoll", () => {
  it("matches snapshot", () => {
    const aIconPoll = shallow(<IconPoll />);
    expect(aIconPoll).toMatchSnapshot();
  });
});