import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selector";

import { DirectoryMenuCont } from "./directory.styles";
import MenuItem from '../menu-item/menu-item.component'

const Directory = ( { sections } ) => {
  return (
    <DirectoryMenuCont>
        {
            sections.map(({id, ...otherSectionProps}) => {
                return <MenuItem key={id} {...otherSectionProps}/>
            })
        }
    </DirectoryMenuCont>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);