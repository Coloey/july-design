import React from 'react';
import { fireEvent, render,screen} from '@testing-library/react';
import Alert from '../index';

describe('<Alert />', () => {
  it('should render default', () => {
    const { container } = render(<Alert>hello world</Alert>);
    expect(container).toMatchSnapshot();
  });
  
  it("render with type and message",() => {
    const types:any[]= ['success','info','error','warning']  
    types.forEach((t) => {
      render(<Alert type={t} message={t}></Alert>)
      expect(screen.getByText(t)).toMatchSnapshot();
    })    
  })
})

describe('Alert[onClose]',() => {
  it('onClick',() => {
    const onClose = jest.fn()
    render(<Alert closable onClose={onClose}></Alert>)
    fireEvent.click(screen.getByText("x"))
    expect(onClose).toBeCalled();
    expect(onClose).toBeCalledTimes(1)
  }) ;

})
