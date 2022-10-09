import React from "react"
import { fireEvent, render,screen} from '@testing-library/react';
import Image from "../index";
import "@testing-library/jest-dom"
describe("Image[Base]",() => {
   it("should render with src",() => {
        const {asFragment} = render(<Image src='https://avatars.githubusercontent.com/u/71813516?v=4'></Image>)
        expect(asFragment().firstChild).toMatchSnapshot();
    })
   /* it("className and style props should work on img element",() => {
        const onClick = jest.fn()
        render(
            <Image src='https://avatars.githubusercontent.com/u/71813516?v=4'
            onClick={onClick}
            className="img"
            style={{
                objectFit:'cover'
            }}
            ></Image>
        ) 
        const img = screen.getByTestId("img");
        expect(img).toHaveClass('img')
        expect(img).toHaveStyle({ objectFit:'cover' })
    })
   /* it("with click when disable preview",() => {

    })*/
    
})


