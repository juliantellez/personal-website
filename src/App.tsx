import * as React from 'react';

interface IAppProps {
    config?: any;
}

class App extends React.Component<IAppProps> {
    public render(): JSX.Element {
        return <div>hello world</div>;
    }
}

export default App;
