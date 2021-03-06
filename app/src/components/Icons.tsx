import { ReactElement } from 'react';

export const Logo = (props: any): ReactElement<SVGSVGElement> => (
  <svg width={32} height={32} viewBox="0 0 450 450" {...props}>
    <path
      d="M370 0H80A80.24 80.24 0 0 0 0 80v290a80.24 80.24 0 0 0 80 80h290a80.24 80.24 0 0 0 80-80V80a80.24 80.24 0 0 0-80-80ZM216.49 260.82c0 42.72-23 78.21-72.3 78.21-34.83 0-57.18-13.15-72.95-40.42L109.36 270c7.23 13.8 17.74 20.37 26.94 20.37 15.12 0 23.66-7.22 23.66-34.17V121.49h56.53Zm92.6 78.18c-19 0-32.86-15.12-32.86-34.18s13.81-34.17 32.86-34.17S342 285.79 342 304.85 328.15 339 309.09 339Zm25-84.13h-49.31c-6.57-42.72 40.09-61.12 40.09-82.15 0-11.83-8.55-16.43-18.4-16.43-11.18 0-18.41 5.91-27 13.8l-30.89-28.26c16.1-18.4 38.78-30.89 65.07-30.89 36.14 0 65.06 16.43 65.06 57.84.05 39.46-47.93 49.98-44.64 86.12Z"
      fill="#fff"
    />
    <path
      d="M370 0H80A80.24 80.24 0 0 0 0 80v290a80.24 80.24 0 0 0 80 80h290a80.24 80.24 0 0 0 80-80V80a80.24 80.24 0 0 0-80-80ZM216.49 260.82c0 42.72-23 78.21-72.3 78.21-34.83 0-57.18-13.15-72.95-40.42L109.36 270c7.23 13.8 17.74 20.37 26.94 20.37 15.12 0 23.66-7.22 23.66-34.17V121.49h56.53Zm92.6 78.18c-19 0-32.86-15.12-32.86-34.18s13.81-34.17 32.86-34.17S342 285.79 342 304.85 328.15 339 309.09 339Zm25-84.13h-49.31c-6.57-42.72 40.09-61.12 40.09-82.15 0-11.83-8.55-16.43-18.4-16.43-11.18 0-18.41 5.91-27 13.8l-30.89-28.26c16.1-18.4 38.78-30.89 65.07-30.89 36.14 0 65.06 16.43 65.06 57.84.05 39.46-47.93 49.98-44.64 86.12Z"
      fill="#fff"
    />
  </svg>
);

export const GithubIcon = (props: any): ReactElement<SVGSVGElement> => (
  <svg width={22} height={21} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 .408A10.554 10.554 0 0 0 .444 10.964c0 4.672 3.021 8.617 7.218 10.016.527.092.725-.224.725-.502 0-.25-.013-1.082-.013-1.966-2.652.488-3.338-.646-3.55-1.24-.118-.304-.633-1.24-1.082-1.491-.369-.198-.897-.686-.013-.7.832-.013 1.425.766 1.623 1.082.95 1.597 2.468 1.148 3.075.871.092-.686.37-1.148.673-1.412-2.349-.264-4.803-1.174-4.803-5.212 0-1.148.409-2.098 1.082-2.837-.106-.264-.475-1.346.105-2.797 0 0 .884-.277 2.903 1.082a9.796 9.796 0 0 1 2.64-.357c.897 0 1.794.12 2.639.357 2.018-1.373 2.902-1.082 2.902-1.082.581 1.451.212 2.533.106 2.797.673.74 1.082 1.676 1.082 2.837 0 4.051-2.467 4.948-4.816 5.212.382.33.712.964.712 1.953 0 1.412-.013 2.547-.013 2.903 0 .277.198.607.726.502a10.573 10.573 0 0 0 7.191-10.016A10.554 10.554 0 0 0 11 .408Z"
      fill="#fff"
    />
  </svg>
);

export const TranslateIcon = (props: any): ReactElement<SVGSVGElement> => (
  <svg width={20} height={20} fill="none" {...props}>
    <path
      d="M5.681 8.393 5.138 10H3.75l2.327-6.25h1.606L10 10H8.541l-.544-1.607H5.681Zm2.043-.92-.849-2.528h-.061l-.849 2.527h1.76-.001Z"
      fill="#fff"
    />
    <path
      d="M0 2.5A2.5 2.5 0 0 1 2.5 0h8.75a2.5 2.5 0 0 1 2.5 2.5v3.75h3.75a2.5 2.5 0 0 1 2.5 2.5v8.75a2.5 2.5 0 0 1-2.5 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5v-3.75H2.5a2.5 2.5 0 0 1-2.5-2.5V2.5Zm2.5-1.25A1.25 1.25 0 0 0 1.25 2.5v8.75A1.25 1.25 0 0 0 2.5 12.5h8.75a1.25 1.25 0 0 0 1.25-1.25V2.5a1.25 1.25 0 0 0-1.25-1.25H2.5Zm8.922 12.494c.242.376.503.729.788 1.057-.935.719-2.091 1.251-3.46 1.615.223.271.564.794.694 1.084 1.406-.449 2.6-1.055 3.607-1.867.972.83 2.174 1.456 3.663 1.84.166-.318.517-.842.786-1.113-1.406-.316-2.571-.867-3.525-1.605.851-.934 1.527-2.064 2.026-3.446H17.5V10h-3.75v1.309h.956c-.397 1.055-.925 1.932-1.59 2.662a7.587 7.587 0 0 1-.518-.615c-.353.226-.757.36-1.176.388Z"
      fill="#fff"
    />
  </svg>
);

export const TimerIcon = (props: any): ReactElement<SVGSVGElement> => (
  <svg width={18} height={18} fill="none" {...props}>
    <path
      d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m11.4 12.2-1.931-1.931A1.6 1.6 0 0 1 9 9.138V4.2"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EditIcon = (props: any): ReactElement<SVGSVGElement> => (
  <svg width={27} height={27} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.168 3.602c.534.507.534 1.396 0 1.93L22.65 8.036l-5.13-5.132L20.037.4c.533-.533 1.423-.533 1.929 0l3.202 3.202ZM.933 24.133v-4.63L16.068 4.355 21.2 9.487 6.566 24.133H25.2a1 1 0 1 1 0 2H.8v-2h.133Z"
      fill="#fff"
    />
  </svg>
);

export const GoBackIcon = (props: any): ReactElement<SVGSVGElement> => (
  <svg width={20} height={12} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 6a.645.645 0 0 0-.21-.471.74.74 0 0 0-.504-.196H2.44L6.935 1.14A.666.666 0 0 0 7.09.923a.629.629 0 0 0-.155-.728.76.76 0 0 0-1.011 0L.21 5.528a.666.666 0 0 0-.155.217.628.628 0 0 0 .155.727l5.714 5.333a.72.72 0 0 0 .232.144.76.76 0 0 0 .78-.144.666.666 0 0 0 .154-.217.63.63 0 0 0-.155-.727L2.44 6.667h16.846a.74.74 0 0 0 .505-.196A.645.645 0 0 0 20 6Z"
      fill="#fff"
    />
  </svg>
);
