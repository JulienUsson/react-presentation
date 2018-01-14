import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export default ({ code }) => (
  <LiveProvider
    code={code}
    noInline
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
    }}
  >
    <div style={{ flex: 2 }}>
      <LiveEditor style={{ lineHeight: 1.3 }} />
    </div>
    <div
      style={{
        flex: 1,
        textAlign: 'left',
        padding: 10,
      }}
    >
      <LivePreview />
      <LiveError />
    </div>
  </LiveProvider>
)
