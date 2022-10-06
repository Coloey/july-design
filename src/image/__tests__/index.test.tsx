import React from "react"
import { fireEvent, render,screen} from '@testing-library/react';
import Image from "..";
describe("Image[Base]",() => {
   it("should render with src",() => {
        const {asFragment} = render(<Image src='https://avatars.githubusercontent.com/u/71813516?v=4'></Image>)
        expect(asFragment().firstChild).toMatchSnapshot();
    })
    it("with click",() => {
        const onClick = jest.fn()
        const {container} = render(
            <Image src='https://avatars.githubusercontent.com/u/71813516?v=4'
            onClick={onClick}
            ></Image>
        )
        fireEvent.click(container.getElementsByClassName('image')[0])
        expect(onClick).toHaveBeenCalledTimes(1);
    })
})


