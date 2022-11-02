import React, { useState } from 'react'


const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      {
        data.map(tree => (<TreeNode node={tree} />))
      }
    </div>
  )
}

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisibility] = useState(false)
  const hasChild = node.children ? true : false;
  return (
    <div>
      <div onClick={e => setChildVisibility(v => !v)}>
        {hasChild && (
          <div className={`d-inline ${childVisible ? "active" : ""}`} />
        )}
        <div className='tree'>
          <div className='tree-data'>
            {node.icon}
          </div>
          <div className='tree-data'>
            {node.label}
          </div>
          <div className='tree-data'>
            {node.add_circle_action}
          </div>
        </div>
      </div>
      {
        hasChild && childVisible && <div className='d-tree-content'>
          <ul className='d-flex d-tree-container flex-column'>
            <Tree data={node.children} />
          </ul>
        </div>
      }
    </div>
  )
}

export default Tree;
