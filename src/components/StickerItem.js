import React, {Component} from 'react';

class StickerItem extends Component {
  onChange(event) {
    this.props.onChange(event.target.value, this.props.number);
  }

  render() {
    return (
      <div className="form-group col-auto col-3 col-sm-2 col-md-2 col-lg-1 col-xl-1 text-center border-top">
        <label htmlFor="colFormLabel">{this.props.number}</label>
        <input
          type="number"
          step="1"
          min="0"
          className="form-control"
          onChange={this.onChange.bind(this)}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default StickerItem;
