import React, {Component} from 'react';
import StickerItem from './StickerItem';

class CheckList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.stickers = [];
    this.stickers[0] = [];
    this.onChange = this.onChange.bind(this);
    let row = 0;
    for (let number = 1; number <= 670; number++) {
      this.stickers[row].push(number);
      let state = {};
      state[number] = 0;
      this.setState(state);
    }
  }

  onChange(value, number) {
    let state = {};
    state[number] = value;
    this.setState(state);
  }

  render() {
    return (
      <form>
        {
          this.stickers.map((row) => (
            <div key={row} className="form-row">
              {
                row.map((sticker) => {
                  return <StickerItem
                    key={sticker}
                    number={sticker}
                    onChange={this.onChange}
                    value={this.state[sticker]}
                  />
                })
              }
            </div>
          ))
        }
      </form>
    );
  }
}

export default CheckList;