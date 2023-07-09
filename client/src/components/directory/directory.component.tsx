import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selector";

import { Title, DirectoryMenuCont } from "./directory.styles";
import MenuItem from '../menu-item/menu-item.component'

export const Directory = ({ sections }: { sections: Section[] }) => {
  return (
    <Fragment>
      <Title>Welcome to CRWN Clothing!</Title>
      <DirectoryMenuCont>
          {
              sections.map(({id, ...otherSectionProps}) => {
                  return <MenuItem key={id} {...otherSectionProps}/>
              })
          }
      </DirectoryMenuCont>
    </Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);