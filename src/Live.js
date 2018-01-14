import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export default ({ code }) => (
  <LiveProvider
    code={code}
    noInline
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: 30,
    }}
  >
    <div>
      <LiveEditor style={{ lineHeight: 1.5 }} />
    </div>
    <div
      style={{
        textAlign: 'left',
        marginTop: 20,
      }}
    >
      <LivePreview />
      <LiveError />
    </div>
  </LiveProvider>
)
