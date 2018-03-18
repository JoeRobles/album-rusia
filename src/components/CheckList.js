import React, {Component} from 'react';
import StickerItem from './StickerItem';

class CheckList extends Component {
  constructor() {
    super();
    this.stickers = this.populateStickers();
  }

  populateStickers() {
    let stickers = [];
    stickers[0] = [];
    let row = 0;
    for (let number = 1; number <= 670; number++) {
      stickers[row].push(number);
    }

    return stickers;
  }

  render() {
    return (
      <form>
        {
          this.stickers.map((row) => (
            <div key={row} className="form-row">
              {
                row.map((sticker) => {
                  return <StickerItem key={sticker} number={sticker}/>
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