import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export default ({ code, inline }) => (
  <LiveProvider
    code={code}
    noInline={!inline}
    style={{
      marginTop: 30,
    }}
  >
    <LiveEditor
      style={{
        lineHeight: 1.2,
        fontSize: 20,
      }}
    />
    <div
      style={{
        textAlign: 'left',
        padding: 10,
      }}
    >
      <LivePreview />
      <LiveError />
    </div>
  </LiveProvider>
)
