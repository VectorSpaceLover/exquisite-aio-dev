import React from 'react';
import './viewbutton.scss'

const ViewButton: React.FC<{projectPath: string}> = ({
  projectPath,
}) => {
  return (
    <>
    <a className="viewButton" href={projectPath}>
      View Project
    </a>
    </>
  )
}

export default ViewButton;
