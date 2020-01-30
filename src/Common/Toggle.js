import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import { toggleMessage } from '../Utils/Actions';

const Toggle = ({ visibility, toggleMessage }) => {
  return (
    <div>
      {visibility && (
        <p>Err' Day I'm Togglin'</p>
      )}
      <button onClick={toggleMessage}>Toggle Me</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  visibility: state.toggle.visibility
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ toggleMessage }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)
