import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 525,
        canvasWidth: 354,
    },
});
