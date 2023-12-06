import React from 'react'
import PropTypes from 'prop-types';
export default function Logo(props) {
  return (
    <svg
      viewBox="0 0 745 219"
      aria-hidden="true"
      fill=""
      width={props.width || 94}
      height={props.height || 39}
      {...props}
    >
      <path
        d="M291.938 138.683v28.082H275.6c-12.701 0-23.528-4.552-32.46-13.791-8.935-9.298-13.449-20.469-13.449-33.573V.001h28.023v119.4c0 10.233 8.227 19.282 17.886 19.282h16.338ZM170.926 40.657h-45.405c-9.183 0-17.155 3.342-23.522 9.741-6.355 6.46-9.651 14.287-9.651 23.568v52.811c0 10.982 3.743 20.462 11.515 28.308 7.776 7.851 16.962 11.68 27.78 11.68h63.773v-26.646h-63.773c-6.361 0-11.299-5.238-11.299-11.668V115.61h83.531V73.966c0-9.28-3.266-17.108-9.649-23.568-6.382-6.399-14.12-9.741-23.3-9.741Zm7.293 51.15h-57.875V71.614c0-2.63 2.343-5.047 5.177-5.047h47.756c2.832 0 4.942 2.418 4.942 5.047v20.191Zm137.697-39.989c-7.296 7.394-11.068 16.433-11.068 27.15v40.2c0 13.087 4.5 24.517 13.199 33.82 8.921 9.235 19.729 13.77 32.69 13.77h37.652c0 19.343.957 23.437-26.981 23.937-2.354.064-25.627.083-28.41.083v27.38h37.961c25.421 0 36.944-8.816 41.637-20.227 3.541-8.577 3.764-14.042 3.764-23.315V40.654h-73.395c-10.584 0-19.535 3.8-27.049 11.164Zm72.693 86.621h-37.872c-9.644 0-17.869-8.807-17.869-19.271v-40.2c0-5.488 4.438-9.98 10.097-9.98h45.644v69.451ZM514.43 40.658h-66.316V64.21h66.316c6.347 0 11.279 5.25 11.279 11.666v15.931h-83.527v41.625c0 9.296 3.325 17.141 9.682 23.564 6.334 6.426 14.112 9.77 23.265 9.77h45.405c9.191 0 17.212-3.344 23.552-9.77 6.317-6.423 9.654-14.268 9.654-23.564V80.64c0-10.944-3.78-20.232-11.546-28.086-7.765-7.844-16.941-11.896-27.764-11.896Zm11.279 93.969c0 2.634-2.332 4.991-5.175 4.991h-47.022c-2.821 0-4.938-2.357-4.938-4.991v-19.981h57.135v19.981Zm116.566-93.934v-.036h-62.714v126.1h28.015V68.978h34.516c11.898.097 21.247 10.511 21.247 23.089v74.69h27.721v-74.69c0-14.28-4.891-26.41-14.556-36.415-9.587-9.909-20.981-14.87-34.229-14.96Zm74.604 126.065h28.013V40.654h-28.013v126.104Zm-688.85-47.351V66.573H.02v52.834c0 13.106 4.501 24.278 13.443 33.572 8.93 9.24 19.748 13.785 32.462 13.785h22.74v-28.086h-22.74c-9.665 0-17.897-9.05-17.897-19.271Zm38.501-80.88V66.55H28.005L0 38.548V.022h28.025v38.505H66.53Z"
        fill="currentColor"
      />
    </svg>
  )
}
Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};