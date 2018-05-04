import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import NewsList from './NewsList';

describe('<Button />', () => {
  it('renders a <NewsList>', () => {
    const renderedComponent = shallow(
      <NewsList></NewsList>
    );

    expect(
      renderedComponent.find("News List").node
    ).toExist();
  });

 
});