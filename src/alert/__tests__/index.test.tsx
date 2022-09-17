import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../alert';

describe('<Alert />', () => {
  test('should render default', () => {
    const { container } = render(<Alert></Alert>);
    expect(container).toMatchSnapshot();
  });

  test('should render alert with type and closable and onClose', () => {
    const types: any[] = ['info', 'warning', 'success', 'error'];
    const closable:boolean;
    const onClose:(e:MouseEvent)=>void;
    const { getByText } = render(
      <>
        {types.map((t,closable,onClose) => (
          <Alert type={t} closable onClose>
          </Alert>
        ))}
      </>,
    );

    types.forEach((t,closable,onClose) => {
      expect(getByText(t,closable,onClose)).toMatchSnapshot();
    });
  });
  test('should render alert with message',()=>{
    const {container} = render(

    )
  })
});