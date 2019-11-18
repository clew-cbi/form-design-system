import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import InlineBlockList from './InlineBlockList';
import Chip from '../interactive/Chip';
import README from './InlineBlockList.md';

const noop = () => {};
const parentStyle = {
  height: '100vh',
  width: '100vw',
};

storiesOf('Layout/InlineBlockList', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <div className="alignChild--center--center" style={parentStyle}>
        <InlineBlockList
          separator={text('separator', '✈️')}
          items={['New York', 'Paris', 'Schenectady', 'Los Angeles', 'Hong Kong']}
        />
      </div>
    ),
    { notes: { markdown: README } }
  )
  .add('Chips list', () => (
    <InlineBlockList
      items={[
        <Chip key="horses" size="lg" onClose={noop} label="Horses" theme="outline" />,
        <Chip key="wombats" size="lg" onClose={noop} label="Wombats" theme="outline" />,
        <Chip key="seals" size="lg" onClose={noop} label="Seals" theme="outline" />,
        <Chip key="dogs" size="lg" onClose={noop} label="Dogs" theme="outline" />,
      ]}
    />
  ))
  .add(
    'Separated lists',
    () => (
      <div>
        <div className="padding--all">
          <InlineBlockList
            separator={select(
              'Separator',
              {
                Pipe: '|',
                Middot: '・',
                Claps: '👏',
              },
              '|'
            )}
            items={[
              <a key="some" className="type--link">
                Some
              </a>,
              <a key="footer" className="type--link">
                Footer
              </a>,
              <a key="links" className="type--link">
                Links
              </a>,
              <a key="or" className="type--link">
                Or
              </a>,
              <a key="something" className="type--link">
                Something
              </a>,
            ]}
          />
        </div>
      </div>
    ),
    { notes: 'The separator can be any string.' }
  )
  .add(
    'Breadcrumbs',
    () => (
      <div>
        <div className="padding--all">
          <InlineBlockList
            separator="/"
            items={[
              <a key="main" className="type--link">
                Main
              </a>,
              'Retail',
            ]}
          />
        </div>
        <div className="padding--all">
          <InlineBlockList separator=">" items={['Market Sizings', 'Retail', 'India']} />
        </div>
      </div>
    ),
    { notes: 'You may mix strings and elements in the `items` prop.' }
  );
