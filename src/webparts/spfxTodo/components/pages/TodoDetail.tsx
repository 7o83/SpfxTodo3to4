import * as React from 'react';

import { IPageProps } from './IPageProps';

class TodoDetail extends React.Component<IPageProps> {

  constructor(props: IPageProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <p>TodoDetail</p>
        <p>{this.props.routeProps.match.params.ID || "IDなし"}</p>
      </div>
    );
  }
}
export default TodoDetail;