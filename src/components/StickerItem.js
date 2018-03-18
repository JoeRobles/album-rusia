import React from 'react';

const StickerItem = ({number}) => (
  <div className="form-group col text-center border-top">
    <label htmlFor="colFormLabel">{number}</label>
    <input type="email" className="form-control" id={`${number}-item-list`} />
  </div>
);

export default StickerItem;