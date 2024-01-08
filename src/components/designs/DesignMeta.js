import React from 'react'
import { DesignMetaWrapper } from '../../styles/designs'
import { Typography } from '@mui/material'

const DesignMeta = ({ design, matches }) => {
  return (
      <DesignMetaWrapper>
          <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2}>
              {design.name}
          </Typography>
          <Typography variant={matches ? 'caption' : 'body1'}>
              ${design.price}
          </Typography>
          
    </DesignMetaWrapper>
  )
}

export default DesignMeta