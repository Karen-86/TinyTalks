const images = {
  logo: "/assets/images/logo.png",
  exampleImage: "/assets/images/example.png",
  catImage: "/assets/images/rest/cat.gif",
  birdsImage: "/assets/images/rest/birds.gif",
};

const localData = {
  images,
  svgs: {
    bars: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
      </svg>
    ),

    settingsIcon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.69225 19.5L7.3115 16.4538C7.04367 16.3641 6.769 16.2385 6.4875 16.077C6.20617 15.9153 5.95459 15.7422 5.73275 15.5577L2.9115 16.75L0.604004 12.75L3.04425 10.9058C3.02125 10.7571 3.00492 10.6077 2.99525 10.4578C2.98559 10.3078 2.98075 10.1583 2.98075 10.0095C2.98075 9.86733 2.98559 9.72283 2.99525 9.576C3.00492 9.42917 3.02125 9.26858 3.04425 9.09425L0.604004 7.25L2.9115 3.26925L5.723 4.452C5.96417 4.261 6.22159 4.08633 6.49525 3.928C6.76892 3.76967 7.03784 3.64242 7.302 3.54625L7.69225 0.5H12.3078L12.6885 3.55575C12.9885 3.66475 13.2599 3.792 13.5028 3.9375C13.7458 4.083 13.991 4.2545 14.2385 4.452L17.0885 3.26925L19.396 7.25L16.9173 9.123C16.9531 9.2845 16.9727 9.4355 16.976 9.576C16.9792 9.71633 16.9808 9.85767 16.9808 10C16.9808 10.1358 16.9775 10.274 16.971 10.4145C16.9647 10.5548 16.9417 10.7154 16.902 10.8963L19.3615 12.75L17.0538 16.75L14.2385 15.548C13.991 15.7455 13.7384 15.9202 13.4808 16.072C13.2231 16.224 12.959 16.3481 12.6885 16.4443L12.3078 19.5H7.69225ZM9 18H10.9655L11.325 15.3212C11.8353 15.1879 12.3017 14.9985 12.724 14.753C13.1465 14.5073 13.5539 14.1916 13.9463 13.8057L16.4308 14.85L17.4155 13.15L15.2463 11.5155C15.3296 11.2565 15.3863 11.0026 15.4163 10.7537C15.4464 10.5051 15.4615 10.2538 15.4615 10C15.4615 9.73967 15.4464 9.48842 15.4163 9.24625C15.3863 9.00392 15.3296 8.75642 15.2463 8.50375L17.4345 6.85L16.45 5.15L13.9365 6.2095C13.6018 5.85183 13.2009 5.53583 12.7338 5.2615C12.2664 4.98717 11.7937 4.79292 11.3155 4.67875L11 2H9.0155L8.6845 4.66925C8.17434 4.78975 7.70325 4.97433 7.27125 5.223C6.83909 5.47183 6.42684 5.79233 6.0345 6.1845L3.55 5.15L2.5655 6.85L4.725 8.4595C4.64167 8.69683 4.58334 8.94367 4.55 9.2C4.51667 9.45633 4.5 9.72617 4.5 10.0095C4.5 10.2698 4.51667 10.525 4.55 10.775C4.58334 11.025 4.6385 11.2718 4.7155 11.5155L2.5655 13.15L3.55 14.85L6.025 13.8C6.4045 14.1897 6.81025 14.5089 7.24225 14.7578C7.67442 15.0064 8.152 15.1974 8.675 15.3307L9 18ZM10.0115 13C10.8435 13 11.5515 12.708 12.1355 12.124C12.7195 11.54 13.0115 10.832 13.0115 10C13.0115 9.168 12.7195 8.46 12.1355 7.876C11.5515 7.292 10.8435 7 10.0115 7C9.16917 7 8.45859 7.292 7.87975 7.876C7.30092 8.46 7.0115 9.168 7.0115 10C7.0115 10.832 7.30092 11.54 7.87975 12.124C8.45859 12.708 9.16917 13 10.0115 13Z"
          fill="#676666"
        />
      </svg>
    ),
    messageIcon: (
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.5 21.0387V4.30796C0.5 3.80279 0.675 3.37521 1.025 3.02521C1.375 2.67521 1.80258 2.50021 2.30775 2.50021H12.35C12.2962 2.75021 12.2677 2.99862 12.2645 3.24546C12.2613 3.49229 12.277 3.74387 12.3115 4.00021H2.30775C2.23075 4.00021 2.16025 4.03229 2.09625 4.09646C2.03208 4.16046 2 4.23096 2 4.30796V17.385L3.4 16.0002H17.6923C17.7693 16.0002 17.8398 15.9681 17.9038 15.904C17.9679 15.84 18 15.7695 18 15.6925V8.12146C18.2872 8.05729 18.5542 7.97521 18.801 7.87521C19.0477 7.77521 19.2807 7.64379 19.5 7.48096V15.6925C19.5 16.1976 19.325 16.6252 18.975 16.9752C18.625 17.3252 18.1974 17.5002 17.6923 17.5002H4.0385L0.5 21.0387ZM2 4.30796V16.6925V4.00021V4.30796ZM17 6.23096C16.2372 6.23096 15.5882 5.96337 15.053 5.42821C14.5177 4.89287 14.25 4.24379 14.25 3.48096C14.25 2.71812 14.5177 2.06912 15.053 1.53396C15.5882 0.998624 16.2372 0.730957 17 0.730957C17.7628 0.730957 18.4118 0.998624 18.947 1.53396C19.4823 2.06912 19.75 2.71812 19.75 3.48096C19.75 4.24379 19.4823 4.89287 18.947 5.42821C18.4118 5.96337 17.7628 6.23096 17 6.23096Z"
          fill="#1C1B1F"
        />
      </svg>
    ),
    arrowDownIcon: (
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.99582 5.5016C4.90651 5.5016 4.82346 5.48555 4.74665 5.45347C4.66985 5.42139 4.59936 5.37333 4.53519 5.3093L0.672068 1.44597C0.552068 1.32597 0.494151 1.19597 0.498318 1.05597C0.502623 0.916109 0.565123 0.785762 0.685818 0.664928C0.806651 0.544234 0.935678 0.483887 1.0729 0.483887C1.21012 0.483887 1.33915 0.544234 1.45998 0.664928L4.99998 4.22597L8.56082 0.664928C8.67623 0.549651 8.80394 0.494095 8.94394 0.498262C9.0838 0.502567 9.21415 0.565067 9.33498 0.685762C9.45568 0.806595 9.51603 0.935623 9.51603 1.07285C9.51603 1.21007 9.45332 1.34104 9.3279 1.46576L5.46478 5.3093C5.39505 5.37333 5.32179 5.42139 5.24498 5.45347C5.16818 5.48555 5.08512 5.5016 4.99582 5.5016Z"
          fill="#AFADAD"
        />
      </svg>
    ),
    arrowRightIcon: (
      <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.30927 6.99951L1.3493 12.9595L0.873718 12.4829L6.0036 7.354L6.35712 7.00049L0.873718 1.51709L1.3493 1.04053L7.30927 6.99951Z"
          fill="#1B1C1E"
          stroke="black"
        />
      </svg>
    ),
    headerCoverIcon: (
      <svg className="w-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M188.592 75.3365C194.445 67.0989 214.357 62.4558 225.381 64.4671C242.424 67.5754 246.616 93.3748 245.93 105.345C243.114 154.46 160.333 117.41 189.041 81.5735"
          stroke="currentcolor"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M331.801 44C94.0769 169.986 71.0319 183.496 32 206.298"
          stroke="currentcolor"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M214 163C201.352 171.313 185.602 181.817 177 193"
          stroke="currentcolor"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M259.621 132.734C274.647 124.559 329.251 126.411 360.262 130.288"
          stroke="currentcolor"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M259.621 132.734C266.163 159.382 277.437 196.741 274.647 224.64"
          stroke="currentcolor"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M215.938 162.787C227.328 183.642 231.615 213.076 234.458 235.822"
          stroke="currentcolor"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M234.457 235.822C208.903 300.787 167.775 321.249 156.879 353.937"
          stroke="currentcolor"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M274.645 224.64C312.502 258.029 314.435 300.25 307.144 347.647"
          stroke="currentcolor"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M127.336 162.787C133.902 158.996 162.971 180.666 177.1 192.777"
          stroke="currentcolor"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M308.191 349.395C309.465 351.814 310.303 354.055 310.638 356.733"
          stroke="currentcolor"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M360.262 130.289C363.044 128.11 365.642 127.842 368.998 127.842"
          stroke="currentcolor"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

  

      // <svg className="w-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      //   <path
      //     d="M324.453 157.568C297.732 145.636 264.384 134.858 243.915 160.63C231.407 176.382 228.297 197.623 215.616 212.525C194.829 236.956 165.87 234.535 141.608 251.99C130.802 259.769 124.057 272.887 116.216 283.417C112.385 288.566 101.751 304.519 104.608 298.767C114.517 278.801 133.609 263.74 140.883 241.758C145.952 226.441 160.277 198.874 169.355 177.239M197.209 139.273C204.365 129.862 212.626 122.793 222.228 119.701C229.035 117.509 237 115.768 248.639 117.959C264.2 120.891 272.039 136.654 287.449 141.629"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M207.053 171.214C213.942 134.413 45.2148 59.5986 80.9839 127.432C94.6934 153.427 126.275 143.765 141.247 159.54C141.401 159.702 130.437 165.618 129.47 166.837C118.397 180.837 151.816 180.058 158.562 180.702"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      // </svg>

      // <svg className="w-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      //   <path
      //     d="M162.206 158.462C168.221 122.101 210.892 120.972 220.506 155.583"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M153.425 174.152C174.228 155.496 209.325 153.682 231.735 169.689"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M147.379 199.056C163.11 181.189 222.663 173.52 238.645 195.313"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M147.439 232.011C192.428 215.573 195.456 215.573 241.742 231.708"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M245.203 236.352C219.31 236.203 193.282 237.193 167.397 238.581C160.146 238.969 151.034 237.042 143.979 238.932"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M140.518 236.362C113.803 236.107 66.9792 236.362 39.2939 240.663"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M361.135 233.782C333.735 233.63 285.711 233.782 257.315 236.336"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M122.557 242.351C121.952 248.623 123.222 277.337 123.222 273.607"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M155 247C155.647 256.175 156.33 265.389 156.33 274.599"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M177.187 247.979C177.8 256.738 177.725 265.553 176.855 274.248"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M195.386 243.64C195.309 253.728 196.071 264.069 195.046 273.916"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M214.951 246.249C214.756 255.685 215.617 265.08 215.617 274.513"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M234.847 241.058C234.629 252.265 235.844 263.449 235.844 274.642"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M264.163 244.988C264.437 255.131 263.897 265.214 263.372 275.269"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M200.036 107.292C194.988 104.123 188.314 105.012 184.086 108.742"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M191.309 101.492C191.005 94.2049 192.025 86.9868 191.573 79.7422"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M183.241 110.587C185.935 116.605 186.003 122.376 183.637 128.383"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M198.032 110.852C195.831 116.209 197.241 121.774 198.427 127.197"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M155.086 175.178C155.541 178.465 155.887 181.763 156.141 185.065"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M173.936 173.068C174.229 174.525 173.757 176.028 173.673 177.418"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M193.445 169.246C193.445 171.135 193.445 173.025 193.445 174.914"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M211.636 171.091C211.636 172.629 211.636 174.167 211.636 175.705"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M229.168 176.759C229.506 177.924 228.904 178.956 228.772 180.055"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M151.437 202.581C151.569 206.548 151.817 210.511 151.978 214.475"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M173.439 195C173.759 198.619 173.242 202.241 173 205.813"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M195.541 191C195.537 195.343 195.319 199.66 195 203.975"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M216.007 195C215.957 198.423 216.187 201.827 216.187 205.249"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M234.696 198.255C234.77 202.961 235.092 207.636 235.237 212.312"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M39.1659 242.963C39.0704 251.183 39.8425 276.144 39.8864 277.939"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M361.135 235.472C361.471 249.608 362 263.707 362 277.865"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M80 245C80 251.034 80 258.172 80 264"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M60.0581 255.766C60.0581 273.597 60.0581 251.711 60.0581 262.381"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M330.624 283.04C255.32 283.04 163.582 283.769 60.2891 283.769"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M257.315 299.527C224.988 299.115 171.439 302.708 131.001 301.996"
      //     stroke="#000000"
      //     strokeOpacity="0.5"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M276.349 317.695C235.608 317.283 168.121 320.876 117.159 320.164"
      //     stroke="#000000"
      //     strokeOpacity="0.5"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M315.309 122.459C315.524 122.459 315.698 122.285 315.698 122.07C315.698 121.855 315.524 121.681 315.309 121.681C315.095 121.681 314.92 121.855 314.92 122.07C314.92 122.285 315.095 122.459 315.309 122.459Z"
      //     fill="#000000"
      //     fill-opacity="0.9"
      //   />
      //   <path
      //     d="M306 243C305.921 247.989 305.843 252.977 305.764 257.966"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      //   <path
      //     d="M328 253C328 254.666 328 256.334 328 258"
      //     stroke="#000000"
      //     strokeOpacity="0.9"
      //     strokeWidth="16"
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //   />
      // </svg>
    ),

    introCoverIcon: (
          <svg className="w-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M154.143 348C161.145 320.407 122.476 281.611 110.818 252.372C95.3977 213.698 103.51 180.813 128.809 144.207C133.596 137.278 145.443 122.759 162.955 125.293C183.985 128.336 181.792 144.815 182.782 153.981C187.025 193.274 93.3116 272.481 165.892 301.886C175.737 305.874 184.262 310.146 196 312.086"
          stroke="#000000"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M195 312.242C185.167 315.297 167.371 314.257 159 310"
          stroke="#000000"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M159.582 309C177.568 321.319 163.42 340.547 148 351"
          stroke="#000000"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.503384"
          d="M196 79.1053C274.75 103.12 275.741 166.698 245.449 209.277C236.851 221.363 197.862 257.005 221.64 275.423C240.54 290.063 269.79 265.922 276.918 259.045C312.13 225.079 313.328 175.141 296.364 137.831C282.061 106.373 225.567 83.3938 232.995 49C232.995 49 227.065 70.5512 223 70.5512C221.01 73.4393 196 79.1053 196 79.1053Z"
          stroke="#000000"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M97.8298 183.697C94.1432 184.69 90.0406 185.16 86.3801 186.188C79.6985 188.065 66.9161 202.463 78.9938 198.222C90.6092 194.144 90.6066 184.481 103 181"
          stroke="#000000"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M164 202C190.179 227.887 160.963 228.085 164.358 205.83"
          stroke="#000000"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.503384"
          d="M230.194 203C225.314 199.645 215.257 140.562 233.488 166.615C237.406 172.215 238.955 178.285 243 183.839"
          stroke="#000000"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.503384"
          d="M323.005 193.27C346.03 158.672 340.284 201.192 321 214"
          stroke="#000000"
          strokeOpacity="0.9"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
};

export default localData;
