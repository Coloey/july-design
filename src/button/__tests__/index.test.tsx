import React from "react"
import Button from "../index"
import {render,fireEvent, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

describe('Button[type]',() => {
    it("should set type while has type prop",() => {
        const types:any[]=['primary','dashed','link','text','default']
        types.map(t => {
            render(<Button type={t}>{t}</Button>)
            const btn = screen.getByText(t)
            expect(btn).toMatchSnapshot()
            expect(btn).toHaveClass(t)
        })
    })
})
describe('Button[size]',() => {
    it('should set size while has size prop',() => {
        const sizes:any[] = ['large','middle','small']
        sizes.map(s => {
            render(<Button size={s}>{s}</Button>)
            const btn = screen.getByText(s)
            expect(btn).toMatchSnapshot()
            expect(btn).toHaveClass(s)
        })
    })
})
describe('Button[shape]',() => {
    it('should set shape while has shape prop',() => {
        const shapes:any[] = ['default','circle','round']
        shapes.map(s => {
            render(<Button shape={s}>{s}</Button>)
            expect(screen.getByText(s)).toHaveClass(s)
        })
    })
})
describe('Button[href]',() => {
    it("should render as a tag while has href",() => {
        render(<Button href="current/page"></Button>)
        expect(screen.getByRole('link',{current:false})).toMatchSnapshot()
    })
})
describe('Button[disabled]',() => {
    it('should set disabled attr while disabled has',() => {
        render(<Button disabled>button</Button>)
        expect(screen.getByText('button')).toBeDisabled()
    })
})
describe('Button[onClick]',() => {
    it('should onClick',() => {
        const onClick=jest.fn()
        render(<Button onClick={onClick}></Button>)
        fireEvent.click(screen.getByRole('button'))
        expect(onClick).toBeCalled()
        expect(onClick).toBeCalledTimes(1)
    })
})