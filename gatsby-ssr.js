import React from "react"

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
        function onloadCallback() {  
          grecaptcha.render(document.getElementById('g-recaptcha'), {
            "sitekey": '6LfMWLkaAAAAAFYM11ctU1Dxfz_v3SVrAKLOR3rM',
          })
        }
   	 `,
      }}
    />,
  ])

  setPostBodyComponents([
    <script
      key="abc"
      type="text/javascript"
      src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
      async
      defer
    />,
  ])
}
