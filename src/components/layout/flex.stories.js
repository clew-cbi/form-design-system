import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';

import Flex from './Flex';
import FlexItem from './FlexItem';
import README from './Flex.md';

const parentStyle = {
  width: '600px',
  background: 'var(--color-haze)',
};

const ConditionalItemsExample = () => (
  <div style={parentStyle}>
  </div>
);

storiesOf('Layout/Flex', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <div style={parentStyle}>
        <Flex
          className="debug--boxModel"
          direction={radios(
            'direction',
            {
              row: 'row',
              column: 'column',
            },
            'row'
          )}
          justify={radios('justify', {
            end: 'end',
            center: 'center',
            spaceBetween: 'spaceBetween',
            spaceAround: 'spaceAround',
          })}
          align={radios('align', {
            start: 'start',
            end: 'end',
            center: 'center',
            stretch: 'stretch',
          })}
          noGutters={boolean('noGutters', false)}
          reverse={boolean('reverse', false)}
        >
          <FlexItem shrink>
            <img src="https://place-hold.it/40x40/a02385/fff&text=IMG" />
          </FlexItem>
          <FlexItem shrink>
            <h4>Look at this cool content</h4>
          </FlexItem>
          <FlexItem shrink>
            <p className="color--link">edit</p>
          </FlexItem>
        </Flex>
      </div>
    ),
    { notes: { markdown: README } }
  )
  .add(
    'Classic media block',
    () => (
      <div style={parentStyle}>
        <Flex className="debug--boxModel">
          <FlexItem shrink>
            <img src="https://place-hold.it/40x40/a02385/fff&text=:)" />
          </FlexItem>
          <FlexItem>
            Look at this media block. Notice how this area grows to fill the remaining
            space of the fixed width parent container. When this content wraps, it will
            not wrap below the figure the same way it would when positioning the image
            with a<code>float</code>.
          </FlexItem>
        </Flex>
      </div>
    ),
    {
      notes: {
        markdown:
          'Making the imge `FlexItem` `shrink` and allowing the description `FlexItem` to grow creates the classic "media block" layout pattern.',
      },
    }
  )
  .add('Conditional items',
    () => (
    ),
    { notes: { markdown: '💡 `Flex` is great for conditionaly rendering items. When an item is added or removed, the other items just flow around it!' } }
  )
  .add('Auto-sized content area',
    () => (
      <div style={{ height: '300px' }}>
        <Flex direction="column" className="debug--boxModel">
          <FlexItem shrink>
            <p>
              This is the header, in a <code>FlexItem</code> set to <code>shrink</code>
            </p>
          </FlexItem>
          <FlexItem>
            <p>
              This is the content area, in a <code>FlexItem</code> that will grow to fill
              remaining space
            </p>
          </FlexItem>
          <FlexItem shrink>
            <p>
              This is the footer, in a <code>FlexItem</code> set to <code>shrink</code>
            </p>
          </FlexItem>
        </Flex>
      </div>
    ),
    {
      notes: {
        markdown:
          'Within a fixed height container, this `Flex` creates a fixed height header and footer which allows the content area to expand to fill the remaining space.',
      },
    }
  );
