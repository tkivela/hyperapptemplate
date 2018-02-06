import { h } from 'hyperapp' // eslint-disable-line

export default ({ action, delta, caption, color }) => {
  return (
    <button
      style={{
        color: `${color}`,
        height: '30px',
        fontSize: '24px',
        lineHeight: '0'
      }}
      onclick={() => action(delta)}
    >
      {caption}
    </button>
  )
}
