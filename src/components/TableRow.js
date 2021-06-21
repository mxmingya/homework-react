import React from 'react'

class TableRow extends React.Component {
    constructor(props) {
      super(props);
      // wantedKeys: {}
      // location: {} 
    }

    render() {
        const location = this.props.location;
        return (
            <tr>
                {
                    Object.keys(this.props.wantedKeys).map(
                        // `location.id + " " + k` keeps the key unique
                        k => <td key={location.id + " " + k}> {location[k]} </td>)
                }
            </tr>
           
            
        )
    }


}

export default TableRow;