import { render } from "@testing-library/react";
import Tiles from "./Tiles";
import '@testing-library/jest-dom/extend-expect';


test('check free bingo exist', () => {
    let content = ['Hello', 'World', 'Free Black Friday Bingo'];
    const { getByText } = render(<Tiles data={content} />);
    const freeBingo = getByText("Free Black Friday Bingo");
    expect(freeBingo).toBeTruthy();
});

test('check card text should be in reactstrap <CardText>', () => {
    let content = ['Hello', 'World', 'Free Black Friday Bingo'];
    const { getByText } = render(<Tiles data={content} />);
    content.map(data => {
        const bingoTile = getByText(data);
        expect(bingoTile).toHaveClass("card-text");
    })
});

test('check all cards are in wrapper columns of main div', () => {
    let content = ['Hello', 'World', 'Free Black Friday Bingo'];
    const { container } = render(<Tiles data={content} />);
    expect(container.firstChild).toHaveClass("wrapper card-columns");
});

test('check whole data of tile should be in reactstrap <CardBody>', () => {
    let content = ['Hello', 'World', 'Free Black Friday Bingo'];
    const { getByText } = render(<Tiles data={content} />);
    content.map(data => {
        const bingoTile = getByText(data).closest("div");
        expect(bingoTile).toHaveClass("card-body");
    })
});